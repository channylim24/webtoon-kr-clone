import axios from "axios";
export default axios.create({
  baseURL: "https://korea-webtoon-api.herokuapp.com",
  headers: {
    "Content-type": "application/json",
  },
});
