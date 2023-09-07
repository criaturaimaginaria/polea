import Image from 'next/image'
import styles from './page.module.css'
import { Header, Main, Proposals, Comunication} from "../components";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main />
      <div className={styles.temporal1}></div>
      <Proposals />
      <Comunication />
    </main>
  )
}

// https://www.figma.com/file/PB5XYjwjaRr4XlbaEOEbxF/POLEA-Landing?type=design&node-id=61-3473&mode=design&t=pVF1Zyt8U7LPYBuL-0

// https://drive.google.com/drive/folders/1lJ0-F5I1Qgwf1wPQ9yOXcBUp5wvmno0m