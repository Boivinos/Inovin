import axios from "axios";

console.warn(localStorage.getItem("token"));

export default axios.create({
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});
