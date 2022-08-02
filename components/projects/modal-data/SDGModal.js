/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image';
import badges from '../badges/Badges';
import { BsGithub } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';

const SDGModal = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-col mt-20 overflow-y-auto  md:mt-10 gap-2">
      <h2 className="text-3xl md:text-5xl font-bold text-start">Sensor Data Generator</h2>
      <div className="w-[100%] mx-auto">
        <Image
          layout="responsive"
          height="364px"
          width="800px"
          src="/images/DSG-Modal.png"
          alt="Data Sensor Generator Image"
        />
      </div>
      <div className="flex flex-col md:w-[100%]">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <div className="flex flex-row w-[100%] md:w-[60%] flex-wrap self-center gap-1">
            {badges.jsBadge}
            {badges.sassBadge}
            {badges.reactBadge}
            {badges.expressBadge}
            {badges.webpackBadge}
            {badges.babelBadge}
            {badges.postgresBadge}
            {badges.chartBadge}
            {badges.nodeBadge}
          </div>
          <div className="flex flex-row w-[100%] md:w-[40%] justify-end gap-1">
            <div>
              <a href="http://13.57.235.108:3000/" target="_blank" className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <FaAws className="m-0"/>Live</a>
            </div>
            <div>
              <a href="https://github.com/OwenMY/Sensor-Data-Generator" target="_blank" className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <BsGithub className="m-0"/>Code</a>
            </div>
          </div>
        </div>
        <span className="text-2xl my-2">About</span>
        <div className="text-sm overflow-y-auto max-h-[30vh] mb-4">
            This is an application as part of a full stack challenge to generate fake data points and manage the data. The purpose of this application was to simulate the calibration of a virtual reality system to generate data points and be able to query the information generated. Sensor calibrations are generated at random as well as base (the main machine mechanism) sensors. The validation performance generator is a simulation of both the base and sensors being used together and outputing how accurate the system is after calibration.  The biggest challenge I ran into was that the sensor calibration cycle generates at least 30000 lines of x, y, z coordinates. The data generation times made loading on the front end slow. To combat this problem, I decided to save the mass of data asynchronously while the client recieves the data as soon as it is generated. Feel free to visit the app live and also check it out on mobile!  I will note, you may need to generate data to use the search as the database is set to clear every 24 hours due to the large amounts of data being generated for presentational purposes.
        </div>
      </div>
    </div>
  )
};

export default SDGModal;