import {
  RETRIEVE_WEBTOONS,
  RETRIEVE_TODAY_WEBTOONS,
  SEARCH_WEBTOONS,
} from "./types";
import WebtoonsService from "../services/WebtoonsService";

export const retrieveWebtoons = () => async (dispatch) => {
  try {
    const res = await WebtoonsService.getAllWebtoons();
    dispatch({
      type: RETRIEVE_WEBTOONS,
      payload: res.data,
      isLoading: false,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveTodayWebtoons = (slug) => async (dispatch) => {
  try {
    const res = await WebtoonsService.getTodayWebtoons(slug);
    dispatch({
      type: RETRIEVE_TODAY_WEBTOONS,
      payload: res.data,
      isLoading: false,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchWebtoons = (slug) => async (dispatch) => {
  try {
    const res = await WebtoonsService.getSearchWebtoons(slug);
    dispatch({
      type: SEARCH_WEBTOONS,
      payload: res.data,
      isLoading: false,
    });
  } catch (err) {
    console.log(err);
  }
};
