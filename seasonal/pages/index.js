import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>What is in season?</title>
        <meta name="description" content="Seasonal Foods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World!
        </h1>
      </main>

      <footer className={styles.footer}>
        THIS IS WHERE THE SEARCH BAR WILL GO!
      </footer>
    </div>
  )
}
