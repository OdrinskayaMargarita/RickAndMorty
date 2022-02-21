import axios from "axios";
import {baseUrl} from "./config";

export const authAPI = {
  // getUser(token) {
  //   return axios({
  //     method: "get",
  //     url: baseUrl + '/auth/user',
  //     headers: {
  //       "Authorization": `Bearer ${token}`,
  //       "X-Requested-With": "XMLHttpRequest"
  //     },
  //   }).catch(error => error);
  // },

  // login(loginData) {
  //   return axios({
  //     method: "post",
  //     url: baseUrl + '/login',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-Requested-With": "XMLHttpRequest"
  //   },
  //     data: loginData
  //   }).catch(error => error);
  // },

  // updateRecoveryAnswersPut(answer, id, token) {
  //   return axios({
  //     method: "put",
  //     url: baseUrl + '/recovery-answer/' + id,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer " + token,
  //       "X-Requested-With": "XMLHttpRequest"
  //     },
  //     data: {
  //       "answer": answer,
  //     }
  //   })
  // },
};