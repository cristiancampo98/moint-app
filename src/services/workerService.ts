import axiosInstace from "../plugins/axios";

export default {
  getAllWorkers() {
    return axiosInstace.get("/workers/get-all");
  },
  getWorkerById(id: Number) {
    return axiosInstace.get(`/workers/get-worker/${id}`);
  },
};
