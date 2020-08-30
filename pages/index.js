import Head from "next/head"
import styles from "../styles/Home.module.css"

import Beanie from "../components/BeanieSVG"
import ColorSelector from "../components/ColorSelector"
import { useState } from "react"

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("black")

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Beanie stroke={selectedColor} fill="white" class={styles.beanie} />
        <ColorSelector onSelect={setSelectedColor} />
      </main>
    </div>
  )
}
