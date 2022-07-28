import Image from 'next/image';

const QnA = () => {
  return (
    <>
      <div className="m-auto mt-5 relative">
        <div className="w-[17em] h-[22em] bg-slate-900 rounded m-auto">
          <div className="w-[17em] h-[10em] rounded-t">
            <a href="https://github.com/OwenMY/Questions-And-Answers-API">
              <Image
                className="rounded-t cursor-pointer hover:opacity-70"
                layout="responsive"
                height="10em"
                width="17em"
                alt="GymX5000 Pic"
                src="/images/API.png"
              />
            </a>
          </div>
          <div className="text-left font-bold break-normal ml-2">Questions and Answers API</div>
          <div className="text-sm pt-2">An API for the questions and answers section of an eccomerce store as a microservice from a monolithic API </div>
          <div className="flex flex-row gap-1 w-[17em] flex-wrap absolute bottom-0 m-auto p-1">
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">Javascript</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">Node</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">Express</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">PostgreSQL</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">NGINX</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">AWS</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default QnA;