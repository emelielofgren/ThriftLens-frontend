import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThriftLens - AI-Powered Fashion Image Search</title>
        <meta name="description" content="ThriftLens: An AI-powered fashion image search engine" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ThriftLens</h1>
        
        <section className={styles.section}>
          <h2>Project Description</h2>
          <p className={styles.description}>
            ThriftLens is an innovative ML-powered fashion image search engine. Our project aims to revolutionize 
            the way people find and match clothing items, making sustainable fashion choices easier than ever.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Problem Statement</h2>
          <p className={styles.description}>
            Sustainable fashion is a growing trend, but it can be difficult to find the right clothing items. 
            One problem is that the labels are not always clear, making the search for sustainable clothing difficult and time-consuming.
            Instead of having to search through clothing items with tags, we want to use image search to help the user find the right clothing item instantly.
            Sustainable fashion should be easy and accessible for everyone, and that is where ThriftLens comes in.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Team</h2>
          <ul className={styles.teamList}>
            <li>Karin Norberg - Project Leader</li>
            <li>Othilia Norell - Senior Business Analyst</li>
            <li>Julia Damgard - Senior Business Analyst</li>
            <li>Nora Gullberg - Senior ML Engineer</li>
            <li>Emelie Löfgren - Junior Web Developer</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Try Our Demo</h2>
          <Link href="/search">
            <a className={styles.demoButton}>Launch Image Search Demo</a>
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 NEJKO</p>
      </footer>
    </div>
  )
}