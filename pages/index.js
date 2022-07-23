import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

const Home = () => {
  return (
    <>
    <Head>
     <title>Pooop</title>
     <link rel="icon" href="/favicon.ico" />

    </Head>
    <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

    <div>
      <h1 className="text-3xl font-bold underline">Welcome to Next.js!</h1>
      <Image
        height={144}
        width={144}
        src="/images/profile-pic.jpeg"
        alt="Owen"
      />
      <Link href="/posts/poop-page">
        <button>poop</button>
      </Link>
    </div>
    </>
  )
};

export default Home;