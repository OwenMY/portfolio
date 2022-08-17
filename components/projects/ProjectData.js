import badges from './badges/Badges';

const projectData = [
  {
    projectName: 'Atelier',
    description: 'An ecommerce product page where customers can rate, view products, ask questions, and write reviews ',
    alt: 'Atelier Homepage',
    src: '/images/AtelierCard.webp',
    badges: [
      badges.jsBadge,
      badges.reactBadge,
      badges.expressBadge,
      badges.styledBadge,
      badges.jestBadge
    ]
  },
  {
    projectName: 'Questions and Answers API',
    description: 'An API for the questions and answers section of an ecommerce store as a microservice from a monolithic API',
    alt: 'Questions And Answers Display',
    src: '/images/QNA_API.webp',
    badges: [
      badges.jsBadge,
      badges.nodeBadge,
      badges.expressBadge,
      badges.awsBadge,
      badges.nginxBadge,
      badges.postgresBadge
    ]
  },
  {
    projectName: 'GymX5000',
    description: 'An all inclusive gym application with the ability to challenge your friends and find healthy recipes',
    alt: 'GymX5000 Homepage',
    src: '/images/GymX5000Card.webp',
    badges: [
      badges.jsBadge,
      badges.reactBadge,
      badges.routerBadge,
      badges.muiBadge
    ]
  },
  {
    projectName: 'Arizona Traffic Maps',
    description: 'A custom built google map displaying traffic bottle necks and custruction zones',
    alt: 'Arizona Traffic Maps Homepage',
    src: '/images/AZTMCard.webp',
    badges: [
      badges.jsBadge,
      badges.expressBadge,
      badges.mongoBadge,
      badges.reactBadge,
      badges.googleMapsBadge
    ]
  },
  {
    projectName: 'Sensor Data Generator',
    description: 'A full stack challenge to generate data for a virtual reality system',
    alt: 'Sensor Data Generator',
    src: '/images/DSG.webp',
    badges: [
      badges.jsBadge,
      badges.reactBadge,
      badges.postgresBadge,
      badges.sassBadge,
      badges.chartBadge
    ]
  },
];

export default projectData;