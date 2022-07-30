import Image from 'next/image';
import badges from './badges/Badges';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

const GymX5000 = () => {
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
              src="/images/GymX5000.jpg"
            />
          </div>
          <div className="text-left font-bold break-normal ml-2">GymX5000</div>
          <div className="text-sm pt-2">An all inclusive gym application with the ability to challenge your friends and find healthy recipes</div>
          <div className="flex flex-row gap-1 max-w-[17em] flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.reactBadge}
            {badges.routerBadge}
            {badges.muiBadge}
          </div>
        </div>
        <Modal hide={toggle} isShowing={isShowing} component="GymX5000"/>
      </div>
    </>
  )
};

export default GymX5000;