import Head from "next/head"
import styles from "../styles/Home.module.scss"

import Beanie from "../components/BeanieSVG"
import BeanieCustomiser from "../components/BeanieCustomiser"
import { useState } from "react"

export default function Home() {
  const defaultColor = "#e1ad01"
  const [bodyColor, setbodyColor] = useState(defaultColor)
  const [brimColor, setbrimColor] = useState(defaultColor)
  const [pomColor, setPomColor] = useState(defaultColor)
  const [hasPompom, setHasPomPom] = useState(true)

  return (
    <div className={styles.container}>
      <Head>
        <title>Beanify</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Itim"
        />
      </Head>

      <main className={styles.main}>
        <Beanie
          strokeBody={bodyColor}
          strokeBrim={brimColor}
          strokePompom={pomColor}
          pompom={hasPompom}
          className={styles.beanie}
        />
        <BeanieCustomiser
          setbodyColor={setbodyColor}
          setbrimColor={setbrimColor}
          setPomColor={setPomColor}
          setHasPomPom={setHasPomPom}
        />
      </main>
    </div>
  )
}
