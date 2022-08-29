import {
  RETRIEVE_WEBTOONS,
  // , SEARCH_WEBTOONS
} from "../actions/types";

const initialState = [];

const webtoonReducer = (webtoons = initialState, action) => {
  const { type, payload, isLoading } = action;
  switch (type) {
    case RETRIEVE_WEBTOONS:
      return { data: payload, isLoading };
    default:
      return webtoons;
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

export default webtoonReducer;
