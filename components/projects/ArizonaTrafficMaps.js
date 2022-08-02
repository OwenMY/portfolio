import Image from 'next/image';
import badges from './badges/Badges';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

const ArizonaTrafficMaps = () => {
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
              alt="AZTM Pic"
              src="/images/AZTMCard.jpeg"
            />
          </div>
          <div className="text-left font-bold break-normal ml-2">Arizona Traffic Maps</div>
          <div className="text-sm pt-2">A custom build google map displaying traffic bottle necks and custruction zones</div>
          <div className="flex flex-row gap-1 max-w-[17em] flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.expressBadge}
            {badges.mongoBadge}
            {badges.reactBadge}
            {badges.googleMapsBadge}
          </div>
        </div>
        <Modal hide={toggle} isShowing={isShowing} component="AZTM" />
      </div>
    </>
  )
};

export default ArizonaTrafficMaps;