import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import NavBar from '../components/navbar/NavBar';
import Introduction from '../components/introduction/Introduction';
import About from '../components/about/About';
import Technologies from '../components/technologies/Technologies';
import Projects from '../components/projects/Projects';

const Home = () => {
  return (
    <>
    <Head>
     <title>Welcome!</title>
     <link rel="icon" href="/favicon.ico" />
    </Head>
      <NavBar />
      <Introduction />
      <About />
      <Technologies />
      <Projects />
    </>
  )
};

export default Home;