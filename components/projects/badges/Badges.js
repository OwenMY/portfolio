import {FaAws, FaReact} from 'react-icons/fa'
import {SiJavascript, SiNodedotjs, SiExpress, SiPostgresql, SiNginx, SiReactrouter, SiMaterialui, SiMongodb} from 'react-icons/si';


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
}

export default badges;