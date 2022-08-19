import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import NavBar from '../components/navbar/NavBar';
import Introduction from '../components/introduction/Introduction';
import About from '../components/about/About';
import Technologies from '../components/technologies/Technologies';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';

const Home = () => {
  return (
    <>
    <Head>
     <title>Owens Portfolio Page</title>
     <link rel="icon" href="/favicon.ico" />
    </Head>
      <NavBar />
      <Introduction />
      <div className="w-[100%] h-[100%] m-0 bg-black/[.5]">
        <About />
      </div>
      <Technologies />
      <Projects />
      <div className="w-[100%] h-[100%] m-0 bg-black/[.5]">
        <Contact />
      </div>
    </>
  )
};

export default Home;