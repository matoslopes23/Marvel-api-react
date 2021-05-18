import axios from "axios";
import md5 from "md5";

const publicKey = "20a812bb3e9adaf952b5a9af769aeb94";
const privateKey = "0eb8fba0c55ecdd5ea438a2c7add3ade14481425";
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
