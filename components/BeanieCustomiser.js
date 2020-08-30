import styles from "../styles/BeanieCustomiser.module.scss"

import ColorSelector from "./ColorSelector"

const BeanieCustomiser = ({
  setbodyColor,
  setbrimColor,
  setPomColor,
  setHasPomPom,
}) => {
  return (
    <section className={styles.customise}>
      <h2 className={styles.title}>customise</h2>
      <ColorSelector onSelect={setbodyColor} label={"body"} />
      <ColorSelector onSelect={setbrimColor} label={"brim"} />
      <ColorSelector onSelect={setPomColor} label={"pom"} />
      <span onClick={() => setHasPomPom(false)}>❌</span>
    </section>
  )
}

export default BeanieCustomiser
