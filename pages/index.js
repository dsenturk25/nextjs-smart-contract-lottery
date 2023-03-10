import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
// import ManualHeader from "../components/ManualHeader.jsx";
import Header from "../components/Header.jsx";
import LotteryEntrance from '@/components/LotteryEntrance.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our smart contract lottery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Header, Navbar */}
      <LotteryEntrance />
    </>
  )
}
