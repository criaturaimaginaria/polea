import Image from 'next/image'
import styles from './page.module.css'
import { Header, Main, Proposals} from "../components";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <div className={styles.temporal1}></div>
      <Proposals />
    </main>
  )
}
