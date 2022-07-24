import Image from 'next/image';

const Introduction = () => {
  return (
    <div className="flex flex-row mt-20 gap-28 justify-center">
    <div className="flex-col">
      <h1 className="text-6xl max-w-xl max-h-screen font-bold text-start">Software Developer And Veteran</h1>
      <p className="text-start max-w-[600px]">A curious software developer with a passion for automation and technology.
      Making websites that run faster then your refridgerator (Im kidding) </p>
      <p className="text-yellow-300"></p>
    </div>
    <Image
      layout="fixed"
      height={200}
      width={200}
      className="rounded-[50%]"
      src="/images/profile-pic.jpeg"
      alt="Owen"
    />
  </div>
  )
};

export default Introduction;