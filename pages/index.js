import Head from "next/head"
import styles from "../styles/Home.module.css"

import Beanie from "../components/BeanieSVG"
import BeanieCustomiser from "../components/BeanieCustomiser"
import ColorSelector from "../components/ColorSelector"
import { useState } from "react"

export default function Home() {
  const [bodyColor, setbodyColor] = useState("black")
  const [brimColor, setbrimColor] = useState("black")
  const [pomColor, setPomColor] = useState("black")
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
          class={styles.beanie}
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
