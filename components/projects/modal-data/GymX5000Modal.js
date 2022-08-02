/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image';
import badges from '../badges/Badges';
import { BsGithub } from 'react-icons/bs';

const GymX5000Modal = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-col mt-20 overflow-y-auto  md:mt-10 gap-2">
      <h2 className="text-3xl md:text-5xl font-bold text-start">GymX5000</h2>
      <div className="w-[100%] mx-auto">
        <Image
          layout="responsive"
          height="364px"
          width="800px"
          src="/images/GymX5000.webp"
          alt="GymX5000 image"
        />
      </div>
      <div className="flex flex-col md:w-[100%]">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <div className="flex flex-row w-[100%] md:w-[60%] flex-wrap self-center gap-1">
            {badges.reactBadge}
            {badges.routerBadge}
            {badges.jsBadge}
            {badges.cssBadge}
            {badges.muiBadge}
            {badges.htmlBadge}
            {badges.webpackBadge}
            {badges.babelBadge}
          </div>
          <div className="flex flex-row w-[100%] md:w-[40%] justify-end gap-1">
            <div>
              <a href="https://github.com/OwenMY/GymX5000" target="_blank" className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <BsGithub className="m-0"/>Code</a>
            </div>
          </div>
        </div>
        <span className="text-2xl my-2">About</span>
        <div className="text-sm overflow-y-auto max-h-[30vh] mb-4">
          GymX5000 was created by a team of 9 software engineers where our client desired an all inclusive health and fitness application. I worked with the front-end team where I had ownership of the activity card component that would work with the polymorphic database created by our back-end team.  The card component was built using a combination of Bootstrap and Material UI along with switch statements to identify the type of card, whether it was a recipe card, a workout card or a class card.  Later per request of my product manager, I also built the live search and filter components to find activty cards by both a query and by card type.
        </div>
      </div>
    </div>
  )
};

export default GymX5000Modal;