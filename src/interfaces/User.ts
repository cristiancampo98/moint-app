import type Worker from "@/interfaces/Worker";
export default interface User {
  id: number;
  name: string;
  last_name: string;
  photo: string;
  data_woker: Worker;
}