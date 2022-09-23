import axiosInstace from "../plugins/axios";

export default {
  getAllWorkers() {
    return axiosInstace.get("/workers/get-all");
  },
};
