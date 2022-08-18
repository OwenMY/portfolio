import badges from '../badges/Badges';

const projectModalData = {
  atelier: {
    name: 'Atelier',
    src: '/images/Atelier.webp',
    alt: 'Atelier Homepage',
    github: 'https://github.com/OwenMY/Atelier',
    live: null,
    badges: [
      badges.reactBadge,
      badges.jsBadge,
      badges.cssBadge,
      badges.htmlBadge,
      badges.webpackBadge,
      badges.babelBadge,
      badges.styledBadge,
      badges.expressBadge,
      badges.nodeBadge
    ],
    description: 'Atelier is an e-commerce product page displaying a product, related products, questions, answers, ratings and reviews. This page was built in an agile team of 4 software engineers with 4 indivdual components where each of us had ownership of one component. I was in charge of the questions and answers section.  My biggest challenge for this page was implementing a live search where there was also a "Show More" button that loaded more questions upon click. The problem was that a user could press the "Show More" button to show more questions but as soon as you used the search, the questions that were previously shown before the search would disappear resulting in you having to press "Show More" from the beginning.  So the solution to this problem was to save the previous state by using the ref hook then rerendering that saved state if the search is cleared.  The result is a working live search that also works with manually showing more questions by pressing a button.'
  },

  qna_api: {
    name: 'Questions And Answers API',
    src: '/images/API.webp',
    alt: 'API Cycle',
    github: 'https://github.com/OwenMY/Questions-And-Answers-API',
    live: null,
    badges: [
      badges.jsBadge,
      badges.cssBadge,
      badges.expressBadge,
      badges.nodeBadge,
      badges.nginxBadge,
      badges.awsBadge
    ],
    description: 'The questions and answers API is a microservice created from a monolothic API with goal of web scaling another teams ecommerce page. The monolithic API was split into microservices within a team of 3 software engineers where each of us had ownership of one microservice, mine being the questions and answers section.  The API was built using the Express framework, postgreSQL and manual testing using Postman with the later implementation of using Jest and Pactum to test API routes.  Latency times were tested using Loader.io and K6. The API was later horizontally scaled using NGINX and AWS EC2 micro instances to split heavy client traffic. One of the challenges I ran into was while load testing at 1000 clients per second where average response time were at 2763ms. To combat this, long story short, I implemented 4 AWS EC2 instances along with proxy cacheing which brought down response rates to a whopping 73ms!'
  },

  gymX5000: {
    name: 'GymX5000',
    src: '/images/GymX5000.webp',
    alt: 'GymX5000',
    github: 'https://github.com/OwenMY/GymX5000',
    live: null,
    badges: [
      badges.reactBadge,
      badges.jsBadge,
      badges.cssBadge,
      badges.htmlBadge,
      badges.webpackBadge,
      badges.babelBadge,
      badges.routerBadge
    ],
    description: 'GymX5000 was created by a team of 9 software engineers where our client desired an all inclusive health and fitness application. I worked with the front end team where I had ownership of the activity card component that would work with the polymorphic database created by our back end team.  The card component was built using a combination of Bootstrap and Material UI along with switch statements to identify the type of card, whether it was a recipe card, a workout card or a class card.  Later per request of my product manager, I also built the live search and filter components to find activty cards by both a query and by card type.'
  },

  AZTM: {
    name: 'Arizona Traffic Maps',
    src: '/images/AZTM.webp',
    alt: 'Arizona Traffic Maps Homepage',
    github: 'https://github.com/OwenMY/Arizona-Traffic-Maps',
    live: null,
    badges: [
      badges.reactBadge,
      badges.jsBadge,
      badges.cssBadge,
      badges.htmlBadge,
      badges.webpackBadge,
      badges.babelBadge,
      badges.expressBadge,
      badges.mongoBadge,
      badges.googleMapsBadge
    ],
    description: 'Arizona Traffic Maps (AZTM) is an app that allows you to view traffic cameras and events on a custom built google map in the State of Arizona using the AZ 511 API. This project was a 2-day sprint to build an MVP full-stack application.'
  },

  sensorDataGenerator: {
    name: 'Sensor Data Generator',
    src: '/images/DSG-Modal.webp',
    alt: 'Sensor Data Generator',
    github: 'https://github.com/OwenMY/Sensor-Data-Generator',
    live: 'http://13.57.235.108:3000/',
    badges: [
      badges.jsBadge,
      badges.sassBadge,
      badges.reactBadge,
      badges.expressBadge,
      badges.webpackBadge,
      badges.babelBadge,
      badges.postgresBadge,
      badges.chartBadge,
      badges.nodeBadge
    ],
    description: 'This is an application as part of a full stack challenge to generate fake data points and manage the data. The purpose of this application was to simulate the calibration of a virtual reality system to generate data points and be able to query the information generated. Sensor calibrations are generated at random as well as base (the main machine mechanism) sensors. The validation performance generator is a simulation of both the base and sensors being used together and outputing how accurate the system is after calibration.  A challenge I ran into was the sensor calibration cycle generating huge amounts of data being at least 30000 lines of x, y, z coordinates. The data generation times made loading on the front end slow. To combat this problem, I decided to save the mass of data asynchronously while the client recieves the data as soon as it is generated. Feel free to visit the app live and also check it out on mobile!  I will note, you may need to generate data to use the search as the database is set to clear every 24 hours due to the large amounts of data being generated for presentational purposes.'
  }
};

export default projectModalData;