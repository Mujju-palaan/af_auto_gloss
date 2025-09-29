// import Image from "next/image";
import styles from "./page.module.css";
import Home from '../app/home/page'



export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Home/>
      </main>
      
    </div>
  );
}
