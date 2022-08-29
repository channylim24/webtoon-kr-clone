import http from "../http-common";

const getAllWebtoons = (slug) => {
  return http.get("/naver");
};

// const getSearchWebtoons = (slug) => {
//   // return http.get(slug ? `/search?keyword=${slug}` : "/naver");
//   return http.get(slug ?? "");
// };

const WebtoonsService = {
  getAllWebtoons,
};
export default WebtoonsService;
