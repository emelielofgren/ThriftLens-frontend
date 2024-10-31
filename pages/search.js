import Head from 'next/head'
import ImageSearch from '../components/ImageSearch'
import styles from '../styles/Search.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Search() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThriftLens - Fashion Image Search</title>
        <meta name="description" content="AI-powered fashion image search application" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className={styles.backgroundPattern}></div>

      <main className={styles.main}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Fashion Image Search
        </motion.h1>

        <motion.div 
          className={styles.introSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className={styles.description}>
            Welcome to try out our image search engine!<br /><br />
            Right now, our model is trained on dresses, so try uploading an image of a dress and let our model find similar items.<br /><br />
            Hope you enjoy!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.searchContainer}
        >
          <ImageSearch />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <a className={styles.backLink}>Back to Home</a>
          </Link>
        </motion.div>
      </main>
    </div>
  )
}
