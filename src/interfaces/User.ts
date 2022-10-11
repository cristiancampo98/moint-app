import type Worker from "./Worker";
export default interface User {
  id: number;
  name: string;
  last_name: string;
  photo: string;
  data_worker: Worker;
}