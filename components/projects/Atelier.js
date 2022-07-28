import Image from 'next/image';
import badges from './badges/Badges';

const Atelier = () => {
  return (
    <>
      <div className="m-auto mt-5 relative">
        <div className="w-[17em] h-[22em] bg-slate-900 rounded m-auto">
          <div className="w-[17em] h-[10em] rounded-t">
            <a href="https://github.com/OwenMY/Atelier">
              <Image
                className="rounded-t cursor-pointer hover:opacity-70"
                layout="responsive"
                height="10em"
                width="17em"
                alt="GymX5000 Pic"
                src="/images/Atelier.jpeg"
              />
            </a>
          </div>
          <div className="text-left font-bold break-normal ml-2">Atelier</div>
          <div className="text-sm pt-2">An ecommerce product page where customers can rate, view products, ask questions, and write reviews </div>
          <div className="flex flex-row gap-1 flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.reactBadge}
            {badges.expressBadge}
          </div>
        </div>
      </div>
    </>
  )
};

export default Atelier;