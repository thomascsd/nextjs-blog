import styles from './layout.module.css';

export default function layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}
