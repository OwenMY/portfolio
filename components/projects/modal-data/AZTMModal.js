/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image';
import badges from '../badges/Badges';
import { BsGithub } from 'react-icons/bs';

const AZTM_Modal = () => {

  return (
    <div className="flex flex-col mx-auto md:flex-col mt-20 overflow-y-auto  md:mt-10 gap-2">
      <h2 className="text-3xl md:text-5xl font-bold text-start">Arizona Traffic Maps</h2>
      <div className="w-[100%] mx-auto">
        <Image
          layout="responsive"
          height="364px"
          width="800px"
          src="/images/AZTM.webp"
          alt="AZTM image"
        />
      </div>
      <div className="flex flex-col md:w-[100%]">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <div className="flex flex-row w-[100%] md:w-[60%] flex-wrap self-center gap-1">
            {badges.reactBadge}
            {badges.jsBadge}
            {badges.cssBadge}
            {badges.htmlBadge}
            {badges.webpackBadge}
            {badges.babelBadge}
            {badges.expressBadge}
            {badges.postgresBadge}
            {badges.googleMapsBadge}
          </div>
          <div className="flex flex-row w-[100%] md:w-[40%] justify-end gap-1">
            <div>
              <a href="https://github.com/OwenMY/Arizona-Traffic-Maps" target="_blank" className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <BsGithub className="m-0"/>Code</a>
            </div>
          </div>
        </div>
        <span className="text-2xl my-2">About</span>
        <div className="text-sm overflow-y-auto max-h-[30vh] mb-4">
          Arizona Traffic Maps (AZTM) is an app that allows you to view traffic cameras and events on a custom built google map in the State of Arizona using the AZ 511 API. This project was a 2-day sprint to build an MVP full-stack application.
        </div>
      </div>
    </div>
  )
};

export default AZTM_Modal;