import api from "../api";
import mcmStatusApi from "./config";

const statusApi = {
  async getWorkableStatus(payload: any) {
    return api.post(mcmStatusApi.getWorkableStatus, payload);
  },
};

export default statusApi;
