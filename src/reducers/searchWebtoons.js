import { SEARCH_WEBTOONS } from "../actions/types";

const initialState = [];

const searchReducer = (webtoons = initialState, action) => {
  const { type, payload, isLoading } = action;
  switch (type) {
    case SEARCH_WEBTOONS:
      return { data: payload.webtoons, isLoading };
    default:
      return webtoons;
  }
};

export default searchReducer;
