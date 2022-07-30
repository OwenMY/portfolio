import Image from 'next/image';
import badges from './badges/Badges';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

const Atelier = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div className="m-auto mt-5 relative">
        <div className="w-[17em] h-[22em] bg-slate-900 rounded m-auto">
          <div className="w-[17em] h-[10em] rounded-t">
            <Image
              className="rounded-t cursor-pointer hover:opacity-70"
              onClick={toggle}
              layout="responsive"
              height="10em"
              width="17em"
              alt="GymX5000 Pic"
              src="/images/Atelier.jpeg"
            />
          </div>
          <div className="text-left font-bold break-normal ml-2">Atelier</div>
          <div className="text-sm pt-2">An ecommerce product page where customers can rate, view products, ask questions, and write reviews </div>
          <div className="flex flex-row gap-1 max-w-[17em] flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.reactBadge}
            {badges.expressBadge}
            {badges.styledBadge}
            {badges.jestBadge}
          </div>
        </div>
        <Modal hide={toggle} isShowing={isShowing} component={'Atelier'}/>
      </div>
    </>
  )
};

export default Atelier;