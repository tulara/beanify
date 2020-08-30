import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/beanie-2.svg" alt="pom pom" className={styles.beanie} />
        <section className={styles.colorselector}>
          <span className={`${styles.dot} ${styles.rust}`}></span>
          <span className={`${styles.dot} ${styles.mustard}`}></span>
          <span className={`${styles.dot} ${styles.navy}`}></span>
          <span className={`${styles.dot} ${styles.teal}`}></span>
        </section>
      </main>
    </div>
  )
}
