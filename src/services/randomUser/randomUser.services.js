import axios from "axios";
const URL_API = "https://randomuser.me/api/";

export const RandomUserServices = {
    getUser: async function(){
        return axios.get(`${URL_API}?results=12`);
    }
};