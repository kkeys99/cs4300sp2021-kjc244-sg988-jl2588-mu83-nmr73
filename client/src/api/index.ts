import axios from "axios";

export * from "./search";

export default axios.create({
  baseURL: "http://listen-and-learn.herokuapp.com/",
});
