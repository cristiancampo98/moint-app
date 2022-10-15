import axiosInstace from "../plugins/axios";

export default {
  getAllEmployers() {
    return axiosInstace.get("/employers/get-all");
  },
  getEmployerById(id: Number) {
    return axiosInstace.get(`/employers/get-worker/${id}`);
  },
};
