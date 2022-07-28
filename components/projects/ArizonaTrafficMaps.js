import Image from 'next/image';
import badges from './badges/Badges';

const ArizonaTrafficMaps = () => {
  return (
    <>
      <div className="m-auto mt-5 relative">
        <div className="w-[17em] h-[22em] bg-slate-900 rounded m-auto">
          <div className="w-[17em] h-[10em] rounded-t">
            <a href="https://github.com/OwenMY/Arizona-Traffic-Maps">
              <Image
                className="rounded-t cursor-pointer hover:opacity-70"
                layout="responsive"
                height="10em"
                width="17em"
                alt="GymX5000 Pic"
                src="/images/AZTM.jpg"
              />
            </a>
          </div>
          <div className="text-left font-bold break-normal ml-2">Arizona Traffic Maps</div>
          <div className="text-sm pt-2">A custom build google map displaying traffic bottle necks and custruction zones</div>
          <div className="flex flex-row gap-1 flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.expressBadge}
            {badges.mongoBadge}
            {badges.reactBadge}
          </div>
        </div>
      </div>
    </>
  )
};

export default ArizonaTrafficMaps;