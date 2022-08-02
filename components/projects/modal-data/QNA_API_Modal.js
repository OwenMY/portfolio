/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image';
import badges from '../badges/Badges';
import { BsGithub } from 'react-icons/bs';

const QNA_API_Modal = () => {
  return (
    <div className="flex flex-col mx-auto md:flex-col mt-20 overflow-y-auto  md:mt-10 gap-2">
      <h2 className="text-3xl md:text-5xl font-bold text-start">Questions And Answers API</h2>
      <div className="w-[100%] mx-auto">
        <Image
          layout="responsive"
          height="364px"
          width="800px"
          src="/images/API.png"
          alt="Questions and Answers Image"
        />
      </div>
      <div className="flex flex-col md:w-[100%]">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row">
          <div className="flex flex-row w-[100%] md:w-[60%] flex-wrap self-center gap-1">
            {badges.jsBadge}
            {badges.nodeBadge}
            {badges.expressBadge}
            {badges.postgresBadge}
            {badges.nginxBadge}
            {badges.awsBadge}
          </div>
          <div className="flex flex-row w-[100%] md:w-[40%] justify-end gap-1">
            <div>
              <a href="https://  )
.com/OwenMY/Questions-And-Answers-API" target="_blank" className="flex flex-row bg-gray-800 rounded items-center px-2 py-1 font-bold text-md">
                <BsGithub className="m-0"/>Code</a>
            </div>
          </div>
        </div>
        <span className="text-2xl my-2">About</span>
        <div className="text-sm overflow-y-auto max-h-[30vh] mb-4">
          The questions and answers API is a microservice created from a monolothic API with goal of web scaling another teams eccomerce page. The monolithic API was split into microservices within a team of 3 software engineers where each of us had ownership of one microservice, mine being the questions and answers section.  The API was built using the Express framework, postgreSQL and manual testing using Postman with the later implementation of using Jest and Pactum to test API routes.  Latency times were tested using Loader.io and K6. The API was later horizontally scaled using NGINX and AWS EC2 micro instances to split heavy client traffic. One of the challenges I ran into was while load testing at 1000 clients per second where average response time were at 2763ms. To combat this, long story short, I implemented 4 AWS EC2 instances along with proxy cacheing which brought down response rates to a whopping 73ms!
        </div>
      </div>
    </div>
  )
};

export default QNA_API_Modal;