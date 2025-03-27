import styles from "./Loader.module.css";

export default function div() {
  return (
    <div className={styles.LoaderWrapper}>
      <div className={styles.Loader}></div>
    </div>
  );
}
