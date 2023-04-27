import { combineReducers } from "redux";
import webtoons from "./webtoons";
import todayWebtoons from "./todayWebtoons";
import searchWebtoons from "./searchWebtoons";

export default combineReducers({
  webtoons,
  todayWebtoons,
  searchWebtoons,
});
