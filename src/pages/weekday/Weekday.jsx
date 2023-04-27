import React, { useState, useEffect } from "react";
import style from "./weekday.module.scss";
import Card from "../../components/card/Card";
// import WebtoonChoices from "../../components/webtoon-choices/WebtoonChoices";
import { useDispatch, useSelector } from "react-redux";
import { retrieveTodayWebtoons, searchWebtoons } from "../../actions/webtoons";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
import { useLocation, useNavigate } from "react-router-dom";

function Weekday() {
  const getTodayWebtoons = useSelector((state) => state.todayWebtoons);
  const getSearchedWebtoons = useSelector((state) => state.searchWebtoons);
  let webtoons = getTodayWebtoons.data;
  let searchedWebtoons = getSearchedWebtoons.data;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  console.log(searchedWebtoons);
  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  }
  const date = new Date();
  const localDay = convertTZ(date, "Asia/Jakarta");

  const [today, setToday] = useState(
    String(localDay).slice(0, 3).toLowerCase()
  );

  let daysDict = {
    월: "mon",
    화: "tue",
    수: "wed",
    목: "thu",
    금: "fri",
    토: "sat",
    일: "sun",
    완결: "finished",
    "네이버 Daily+": "naverDaily",
  };
  let days = Object.keys(daysDict);

  let { state, pathname } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(retrieveTodayWebtoons(`&updateDay=${today}&perPage=100`));
  }, [dispatch]);

  const handleFetchWebtoon = (e) => {
    setToday(daysDict[`${e.target.innerHTML}`]);
    setIsLoading(true);
  };
  useEffect(() => {
    dispatch(retrieveTodayWebtoons(`&updateDay=${today}&perPage=100`));
  }, [dispatch, today, isLoading]);

  useEffect(() => {
    dispatch(searchWebtoons(state));

    return () => {
      state = "";
    };
  }, [webtoons, state]);

  useEffect(() => {
    if (webtoons) {
      setIsLoading(getTodayWebtoons.isLoading);
    } else {
      setIsLoading(true);
    }
  }, [webtoons, getTodayWebtoons.isLoading]);

  return (
    <main>
      {state ? (
        <ul className={style.webtoonlist}>
          {isLoading && <CardSkeleton cards={20} />}
          {searchedWebtoons &&
            searchedWebtoons.map((webtoon, index) => (
              <div key={index}>
                <li>
                  <Card
                    thumbnail={webtoon.img}
                    title={webtoon.title}
                    author={webtoon.author}
                    url={webtoon.url}
                  />
                </li>
              </div>
            ))}
        </ul>
      ) : (
        <>
          <div className={style.daylist}>
            <ul className={`${style.daylist__filter} ${style.container}`}>
              {days.map((day, index) => (
                <li
                  onClick={(e) => handleFetchWebtoon(e)}
                  className={today === daysDict[day] ? style.on : ""}
                  key={index}
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>

          <ul className={style.webtoonlist}>
            {isLoading && <CardSkeleton cards={20} />}
            {webtoons &&
              webtoons.map((webtoon, index) => (
                <div key={index}>
                  <li>
                    <Card
                      thumbnail={webtoon.img}
                      title={webtoon.title}
                      author={webtoon.author}
                      url={webtoon.url}
                    />
                  </li>
                </div>
              ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default Weekday;
