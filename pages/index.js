import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head> <title>Vipin's List | Home</title></Head>
    <div className={styles.title}>
    <h1>Vipin Jaluthria</h1>
    </div>
    </>
  );
}
