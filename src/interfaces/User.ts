import type Worker from "./Worker";
export default interface User {
  id: number;
  fullname: string,
  image: string;
  data_worker: Worker;
  rates: [];
  status: {};
}