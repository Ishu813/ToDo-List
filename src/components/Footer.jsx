import styles from "./footer.module.css";

export default function Footer({ totalTasks, completedTasks }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Tasks: {totalTasks}</span>
      <span className={styles.item}>Completed Tasks: {completedTasks}</span>
    </div>
  );
}
