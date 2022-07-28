import Image from 'next/image';
import badges from './badges/Badges';

const GymX5000 = () => {
  return (
    <>
      <div className="m-auto mt-5 relative">
        <div className="w-[17em] h-[22em] bg-slate-900 rounded m-auto">
          <div className="w-[17em] h-[10em] rounded-t">
            <a href="https://github.com/OwenMY/GymX5000">
            <Image
              className="rounded-t cursor-pointer hover:opacity-70"
              layout="responsive"
              height="10em"
              width="17em"
              alt="GymX5000 Pic"
              src="/images/GymX5000.jpg"
            />
            </a>
          </div>
          <div className="text-left font-bold break-normal ml-2">GymX5000</div>
          <div className="text-sm pt-2">An all inclusive gym application with the ability to challenge your friends and find healthy recipes</div>
          <div className="flex flex-row gap-1 flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.reactBadge}
            {badges.routerBadge}
            {badges.muiBadge}
          </div>
        </div>
      </div>
    </>
  )
};

export default GymX5000;