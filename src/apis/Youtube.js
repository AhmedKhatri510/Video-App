import axios from "axios";

const KEY = "AIzaSyAAa5xDiiPacflkArWEaRAkHQ-inwMW5-g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "videos",
    key: KEY,
  },
});
