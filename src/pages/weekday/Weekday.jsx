import React, { useState, useEffect } from "react";
import style from "./weekday.module.scss";
import Card from "../../components/card/Card";
// import WebtoonChoices from "../../components/webtoon-choices/WebtoonChoices";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveWebtoons,
  // , searchWebtoons
} from "../../actions/webtoons";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
// import { useLocation } from "react-router-dom";

function Weekday() {
  const getWebtoons = useSelector((state) => state.webtoons);
  const webtoons = getWebtoons.data;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  let days = ["월", "화", "수", "목", "금", "토", "일", "매일+"];
  const [today, setToday] = useState("");
  // const { state } = useLocation();

  useEffect(() => {
    dispatch(retrieveWebtoons());
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

    switch (String(localDay).slice(0, 3)) {
      case "Mon":
        setToday(0);
        break;
      case "Tue":
        setToday(1);
        break;
      case "Wed":
        setToday(2);
        break;
      case "Thu":
        setToday(3);
        break;
      case "Fri":
        setToday(4);
        break;
      case "Sat":
        setToday(5);
        break;
      case "Sun":
        setToday(6);
        break;
    }
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(state);
  //   dispatch(searchWebtoons(state));
  //   // setToday("");
  // }, [state]);

  useEffect(() => {
    if (webtoons) {
      setIsLoading(getWebtoons.isLoading);
    }
  }, [webtoons, getWebtoons.isLoading]);

  return (
    <main>
      <div className={style.daylist}>
        <ul className={`${style.daylist__filter} ${style.container}`}>
          {days.map((day, index) => (
            <li
              onClick={() => setToday(index)}
              className={index === today ? style.on : ""}
              key={index}
            >
              {day}
            </li>
          ))}
        </ul>
      </div>
      <ul className={style.webtoonlist}>
        {isLoading && <CardSkeleton cards={20} />}
        {webtoons
          ? webtoons.map((webtoon, index) =>
              webtoon.week[0] === today ? (
                <motion.div key={index}>
                  <li>
                    <Card
                      thumbnail={webtoon.img}
                      title={webtoon.title}
                      author={webtoon.author}
                      url={webtoon.url}
                    />
                  </li>
                </motion.div>
              ) : (
                ""
              )
            )
          : ""}
      </ul>
    </main>
  );
}

export default Weekday;
