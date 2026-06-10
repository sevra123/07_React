import styles from "../css/Button.module.css";

function ButtonModule({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default ButtonModule;
