import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  //quando aplica desestruturação, se consegue aplicar valores padrão

  const hasBorder = props.hasBorder != false;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
    />
  );
}
