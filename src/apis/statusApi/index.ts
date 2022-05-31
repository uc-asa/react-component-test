import api from "../api";
import axios from "axios";
import mcmStatusApi from "./config";

const statusApi = {
  // async getWorkableStatus() {
  //   return api.get(
  //     mcmStatusApi.getWorkableStatus
  //   );
  // },
  async getWorkableStatus() {
    return api.post(
      mcmStatusApi.getWorkableStatus, {
        "email": "asheesh.sahu@medsi.mx"
    }
    );
  },
};

export default statusApi;
