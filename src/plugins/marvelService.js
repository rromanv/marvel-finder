import axios from "axios";

const marvelService = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public"
});

export default marvelService;
