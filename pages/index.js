import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThriftLens - AI-Powered Fashion Image Search</title>
        <meta name="description" content="ThriftLens: An AI-powered fashion image search engine" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/pattern.css" />
      </Head>

      <div className={styles.backgroundPattern}></div>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ThriftLens
          <motion.span 
            className={styles.titleAccent}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            </motion.span>
          </motion.h1>
        </div>

        <motion.section 
          className={styles.heroSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.heroContent}>
            <h2>Discover Sustainable Fashion</h2>
            <p>Using AI to revolutionize how you find your next favorite outfit</p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ transformOrigin: 'center' }}
            >
              <Link href="/search">
                <a className={styles.ctaButton}>Try Now</a>
              </Link>
            </motion.div>
          </div>
          <div className={styles.heroImage}>
            <Image 
              src="/images/sustainable-fashion.jpg" 
              alt="Sustainable Fashion" 
              width={500} 
              height={300}
              objectFit="cover"
              priority
            />
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>How It Works</h2>
          <div className={styles.featureGrid}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className={styles.featureCard}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className={styles.teamCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.teamImageWrapper}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    objectFit="cover"
                    className={styles.teamImage}
                  />
                </div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  )
}

const features = [
  {
    icon: "📸",
    title: "Upload Image",
    description: "Share a photo of the style you're looking for"
  },
  {
    icon: "🤖",
    title: "AI Analysis",
    description: "Our ML model analyzes the key features of your image"
  },
  {
    icon: "✨",
    title: "Match",
    description: "Get instant matches from sustainable fashion sources"
  },
  {
    icon: "♻️",
    title: "Sustainable Choice",
    description: "Make eco-friendly fashion choices with confidence"
  }
]

const teamMembers = [
  {
    name: "Karin Norberg",
    role: "Project Leader",
    image: "/images/karin.jpeg"
  },
  {
    name: "Othilia Norell",
    role: "Business Analysis",
    image: "/images/othilia.jpeg"
  },
  {
    name: "Julia Damgard",
    role: "Business Analysis",
    image: "/images/julia.jpeg"
  },
  {
    name: "Nora Gullberg",
    role: "Machine Learning",
    image: "/images/nora.jpeg"
  },
  {
    name: "Emelie Löfgren",
    role: "Web Developer",
    image: "/images/emelie.jpeg"
  }
];