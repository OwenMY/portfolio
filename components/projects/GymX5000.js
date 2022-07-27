import Image from 'next/image';

const GymX5000 = () => {
  return (
    <>
      <div className="m-auto mt-5 relative">
        <div className="w-[17em] h-[22em] bg-slate-700 rounded">
          <div className="w-[17em] h-[10em] rounded-t">
            <Image
              className="rounded-t cursor-pointer"
              layout="responsive"
              height="10em"
              width="17em"
              alt="GymX5000 Pic"
              src="/images/GymX5000.jpg"
            />
          </div>
          <div className="text-left font-bold break-normal ml-2">GymX5000</div>
          <div className="text-sm pt-2">An all inclusive gym application with the ability to challenge your friends and find healthy recipes</div>
          <div className="flex flex-row gap-1 flex-wrap absolute bottom-0 m-auto p-1">
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">Javascript</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">React</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">React Router</span>
            <span className="text-xs bg-gray-800 border p-1 rounded-xl">Material UI</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default GymX5000;