import Image from 'next/image'
import styles from './page.module.css'
import { Header, Main} from "../components";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <div className={styles.temporal1}>

      </div>
    </main>
  )
}
