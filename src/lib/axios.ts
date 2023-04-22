import axios from "axios";

export default await axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-type": "application/json"
  }
});
