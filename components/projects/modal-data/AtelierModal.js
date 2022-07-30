import Image from 'next/image';
import badges from '../badges/Badges';
import { BsGithub } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';

const AtelierModal = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-col mt-20 overflow-y-auto  md:mt-10 gap-2">
      <h2 className="text-3xl md:text-5xl font-bold text-start">Atelier</h2>
      <div className="w-[100%] mx-auto">
        <Image
          layout="responsive"
          height="364px"
          width="800px"
          src="/images/Atelier.jpeg"
          alt="Atelier Image"
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
            {badges.styledBadge}
            {badges.expressBadge}
          </div>
          <div className="flex flex-row w-[100%] md:w-[40%] justify-end gap-1">
            <div>
              <a className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <FaAws className="m-0"/>Live</a>
            </div>
            <div>
              <a className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <BsGithub className="m-0"/>Code</a>
            </div>
          </div>
        </div>
        <span className="text-2xl my-2">About</span>
        <div className="text-sm overflow-y-auto max-h-[30vh] mb-4">
          Atelier is an eccomerce product page displaying a product, related products, questions, answers, ratings and reviews. This page was built in an agile team of 4 software engineers with 4 indivdual components where each of us had ownership of one component. I was in charge of the questions and answers section.  My biggest challenge for this page was implementing a live search where the &quot;Show More&quot; button would only appear if there are enough answers given from the fetched data.
        </div>
      </div>
    </div>
  )
};

export default AtelierModal;