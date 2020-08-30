import styles from "../styles/ColorSelector.module.scss"

const ColorSelector = ({ label, onSelect }) => {
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
    <div className={styles.colorselector}>
      <h4 className={styles.label}>{label}</h4>
      {colors.map((color) => (
        <span
          key={color.name}
          onClick={() => onSelect(color.hex)}
          className={`${styles.dot} ${styles[color.name]}`}
        ></span>
      ))}
    </div>
  )
}

export default ColorSelector
