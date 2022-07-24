import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import NavBar from '../components/navbar/NavBar';
import Introduction from '../components/introduction/Introduction';

const Home = () => {
  return (
    <>
    <Head>
     <title>Welcome!</title>
     <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
    <Introduction />
    </>
  )
};

export default Home;