import {FaAws, FaReact} from 'react-icons/fa'
import {GiDualityMask} from 'react-icons/gi';
import {
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiNginx,
  SiReactrouter,
  SiMaterialui,
  SiMongodb,
  SiStyledcomponents,
  SiJest,
  SiCss3,
  SiHtml5,
  SiWebpack,
  SiBabel,
  SiCypress,
  SiTestinglibrary,
  SiGooglestreetview,
  SiSass,
  SiChartdotjs
} from 'react-icons/si';


const badges = {
  jsBadge: <span className="flex flex-row text-xs bg-gray-800 border p-1 rounded-xl">
  <SiJavascript className="inline m-auto" />Javascript</span>,
  nodeBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiNodedotjs className="inline m-auto"/>Node</span>,
  expressBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiExpress className="inline m-auto"/>Express</span>,
  postgresBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiPostgresql className="inline m-auto"/>PostgreSQL</span>,
  nginxBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiNginx className="inline m-auto"/>Nginx</span>,
  awsBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <FaAws className="inline m-auto"/>AWS</span>,
  reactBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <FaReact className="inline m-auto"/>React</span>,
  routerBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiReactrouter className="inline m-auto"/>React Router</span>,
  muiBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiMaterialui className="inline m-auto"/>MUI</span>,
  mongoBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiMongodb className="inline m-auto"/>MongoDB</span>,
  styledBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiStyledcomponents className="inline m-auto"/>Styled-Components</span>,
  jestBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiJest className="inline m-auto"/>Jest</span>,
  cssBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiCss3 className="inline m-auto"/>CSS</span>,
  htmlBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiHtml5 className="inline m-auto"/>HTML</span>,
  webpackBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiWebpack className="inline m-auto"/>Webpack</span>,
  babelBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiBabel className="inline m-auto"/>Babel</span>,
  cypressBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiCypress className="inline m-auto"/>Cypress</span>,
  playwrightBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <GiDualityMask className="inline m-auto"/>Playwright</span>,
  testingLibraryBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiTestinglibrary className="inline m-auto"/>Testing Library</span>,
  googleMapsBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiGooglestreetview className="inline m-auto"/>Google Maps API</span>,
  sassBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiSass className="inline m-auto"/>Sass</span>,
  chartBadge: <span className="flex flex-row  text-xs bg-gray-800 border p-1 rounded-xl">
  <SiChartdotjs className="inline m-auto"/>Chart</span>,
};

export default badges;