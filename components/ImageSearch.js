import { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/ImageSearch.module.css'

const simulatedDataset = [
  'https://img01.ztat.net/article/spp-media-p1/35af95bc713b3b5e81271efb768824cb/1729533d161c48a2accf176cec87c1d2.jpg?imwidth=400&filter=packshot',
  'https://img01.ztat.net/article/spp-media-p1/cc59f7e79f34318b9cfdb27fd062c957/5368b0c9acc7477d9a6f2bc89c06437e.jpg?imwidth=400&filter=packshot',
  'https://img01.ztat.net/article/spp-media-p1/b3f2aa34ae7436ed920a083677828756/d4ec3066b39942209806f027592afca8.jpg?imwidth=400&filter=packshot',
  'https://img01.ztat.net/article/spp-media-p1/cf973985efe5393084ec563850138123/72dcb49e47784eb7a37d2f1a452ab080.jpg?imwidth=400&filter=packshot'
]

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
      const response = await fetch('http://localhost:8000/api/search', {
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
