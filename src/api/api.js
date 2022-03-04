import axios from "axios";
import {baseUrl} from "./config";

export const api = {
  getCharacterListPage(numberPage) {
    return axios({
      method: "get",
      url: baseUrl + '/character/?page=' + numberPage,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
    }).catch(error => error);
  },

  getSingleCharacter(idCharacter) {
    return axios({
      method: "get",
      url: baseUrl + '/character/' + idCharacter,
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
    }).catch(error => error);
  },
};