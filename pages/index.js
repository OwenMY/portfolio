import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import NavBar from '../components/navbar/NavBar';
import Introduction from '../components/introduction/Introduction';
import Technologies from '../components/technologies/Technologies';

const Home = () => {
  return (
    <>
    <Head>
     <title>Welcome!</title>
     <link rel="icon" href="/favicon.ico" />
    </Head>
      <NavBar />
      <Introduction />
      <Technologies />
    </>
  )
};

export default Home;