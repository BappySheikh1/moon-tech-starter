import axios from "axios";

let URL;

switch(process.env.REACT_APP_ENVIRONMENT){
    case "DEVELOPMENT" :
        URL = "https://moon-tech-server-ruddy.vercel.app";
        break;
    case "PRODUCTION" :
        URL ="https://moon-tech-server-ruddy.vercel.app";
        break;
     default :
       URL = "https://moon-tech-server-ruddy.vercel.app"       
}

const instance =axios.create({
    baseURL : URL,
})
export default instance;