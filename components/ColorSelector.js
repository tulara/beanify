import styles from "../styles/ColorSelector.module.css"

const ColorSelector = (props) => {
  const colors = [
    {
      name: "rust",
      hex: "#b7410e",
    },
    {
      name: "mustard",
      hex: "#e1ad01",
    },
    {
      name: "teal",
      hex: "#008080",
    },
    {
      name: "navy",
      hex: "#02075d",
    },
  ]

  return (
    <section className={styles.colorselector}>
      {colors.map((color) => (
        <span
          onClick={() => props.onSelect(color.hex)}
          className={`${styles.dot} ${styles[color.name]}`}
        ></span>
      ))}
    </section>
  )
}

export default ColorSelector
