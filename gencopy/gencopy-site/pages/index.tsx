import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GenCopy from '../components/gencopy'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>GenCopy | AI Branding</title>
        <meta name="description" content="AI generated brand copy for your products." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <GenCopy/>
    </div>
  );
}

export default Home
