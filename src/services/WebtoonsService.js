import http from "../http-common";

const getAllWebtoons = (slug) => {
  return http.get("/?service=naver");
};

const getTodayWebtoons = (slug) => {
  return http.get(`/?service=naver${slug}`);
};

const getSearchWebtoons = (slug) => {
  // return http.get(slug ? `/search?keyword=${slug}` : "/naver");
  return http.get(`/search?keyword=${slug}`);
};

const WebtoonsService = {
  getAllWebtoons,
  getTodayWebtoons,
  getSearchWebtoons,
};
export default WebtoonsService;
