import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

const Poop = () => {
  return (
    <Layout>
    <Head>
     <title>Pewp</title>
     <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <h1>Welcome to POOP WORLD!</h1>
      <Link href="/">
        <button>Go poop at home</button>
      </Link>
    </div>
    </Layout>
  )
};


export default Poop;