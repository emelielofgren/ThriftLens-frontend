import Head from 'next/head'
import ImageSearch from '../components/ImageSearch'
import styles from '../styles/Search.module.css'
import Link from 'next/link'

export default function Search() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThriftLens - Fashion Image Search</title>
        <meta name="description" content="AI-powered fashion image search application" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fashion Image Search</h1>
        <ImageSearch />
        <Link href="/">
          <a className={styles.backLink}>Back to Home</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 NEJKO</p>
      </footer>
    </div>
  )
}
