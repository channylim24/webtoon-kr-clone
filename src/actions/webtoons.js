import {
  RETRIEVE_WEBTOONS,
  // , SEARCH_WEBTOONS
} from "./types";
import WebtoonsService from "../services/WebtoonsService";

export const retrieveWebtoons = (slug) => async (dispatch) => {
  try {
    const res = await WebtoonsService.getAllWebtoons(slug);
    dispatch({
      type: RETRIEVE_WEBTOONS,
      payload: res.data,
      isLoading: false,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const searchWebtoons = (slug) => async (dispatch) => {
//   try {
//     const res = await WebtoonsService.getSearchWebtoons(slug);
//     dispatch({
//       type: SEARCH_WEBTOONS,
//       payload: slug,
//       isLoading: false,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
