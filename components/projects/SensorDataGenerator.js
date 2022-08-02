import Image from 'next/image';
import badges from './badges/Badges';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';

const SensorDataGenerator = () => {
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
              alt="Data Sensor Generator Pic"
              src="/images/DSG.jpeg"
            />
          </div>
          <div className="text-left font-bold break-normal ml-2">Sensor Data Generator</div>
          <div className="text-sm pt-2">A full stack challenge to generate data for a virtual reality system</div>
          <div className="flex flex-row gap-1 max-w-[17em] flex-wrap absolute bottom-0 m-auto p-1">
            {badges.jsBadge}
            {badges.reactBadge}
            {badges.postgresBadge}
            {badges.sassBadge}
            {badges.chartBadge}

          </div>
        </div>
        <Modal hide={toggle} isShowing={isShowing} component={'SensorDataGenerator'}/>
      </div>
    </>
  )
};

export default SensorDataGenerator;