import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/ImageSearch.module.css'

export default function ImageSearch() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [results, setResults] = useState([])

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleSearch = async () => {
    if (!selectedFile) {
      alert('Please upload an image first.')
      return
    }

    const formData = new FormData()
    formData.append('file', selectedFile)

    try {
      const response = await fetch('https://thriftlens-production.up.railway.app/api/search', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      
      if (data.error) {
        alert('Error processing image: ' + data.error)
        return
      }
      
      setResults(data.similar_images)
    } catch (error) {
      console.error('Error:', error)
      alert('Error processing image')
    }
  }

  return (
    <div className={styles.imageSearch}>
      <div className={styles.inputContainer}>
        <input type="file" onChange={handleFileChange} accept="image/*" className={styles.fileInput} />
        <button onClick={handleSearch} className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.results}>
        {results.map((imageSrc, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={imageSrc}
              alt="Similar image"
              width={200}
              height={288}
              className={styles.resultImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
