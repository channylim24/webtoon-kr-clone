import {
  RETRIEVE_TODAY_WEBTOONS,
  // , SEARCH_WEBTOONS
} from "../actions/types";

const initialState = [];

const todayWebtoonReducer = (todayWebtoons = initialState, action) => {
  const { type, payload, isLoading } = action;
  switch (type) {
    case RETRIEVE_TODAY_WEBTOONS:
      return { data: payload.webtoons, isLoading };
    default:
      return todayWebtoons;
  }
};

// const searchReducer = (webtoons = initialState, action) => {
//   const { type, payload, isLoading } = action;
//   switch (type) {
//     case SEARCH_WEBTOONS:
//       return { data: payload, isLoading };
//     default:
//       return webtoons;
//   }
// };

export default todayWebtoonReducer;
