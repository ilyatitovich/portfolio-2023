
import styles from "./BurgerBtn.module.css";

export default function BurgerBtn({ menuIsOpen, onClick }) {

  return (
    <button onClick={onClick} className={styles.burger}>
      <div className={`${styles.line} ${menuIsOpen && styles.active}`}></div>
      <div className={`${styles.line} ${menuIsOpen && styles.active}`}></div>
      <div className={`${styles.line} ${menuIsOpen && styles.active}`}></div>
    </button>
  );
}
