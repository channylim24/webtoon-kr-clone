import React, { useState, useRef, useEffect } from "react";
import style from "./home.module.scss";
import Card from "../../components/card/Card";
import WebtoonChoices from "../../components/webtoon-choices/WebtoonChoices";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  retrieveWebtoons,
  retrieveTodayWebtoons,
} from "../../actions/webtoons";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
import WebtoonChoicesSkeleton from "../../components/webtoon-choices-skeleton/WebtoonChoicesSkeleton";

function Home() {
  // Get date
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
  let today = String(localDay).slice(0, 3).toLowerCase();

  // Motion Framer
  const slider1 = useRef();
  const slider2 = useRef();
  const [sliderWidth1, setSliderWidth1] = useState(0);
  const [sliderWidth2, setSliderWidth2] = useState(0);

  // Fetch API
  const getWebtoons = useSelector((state) => state.webtoons);
  const getTodayWebtoons = useSelector((state) => state.todayWebtoons);
  const webtoons = getWebtoons.data;
  let todayWebtoons = getTodayWebtoons.data;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(retrieveWebtoons());
    dispatch(retrieveTodayWebtoons(`&updateDay=${today}`));
  }, [dispatch]);

  let favWebtoons = webtoons
    ? [...webtoons].sort(function (a, b) {
        return a.fanCount - b.fanCount;
      })
    : "";

  useEffect(() => {
    if (webtoons) {
      setIsLoading(getWebtoons.isLoading);
    }
  }, [webtoons, getWebtoons.isLoading]);

  // Slider
  useEffect(() => {
    setSliderWidth1(slider1.current.offsetWidth - slider1.current.scrollWidth);
    setSliderWidth2(slider2.current.offsetWidth - slider2.current.scrollWidth);
  }, [sliderWidth1, sliderWidth2, webtoons, todayWebtoons]);

  return (
    <main className={style.home}>
      <section className={style.container}>
        <h2 className={style.home__heading}>이런 판타지는 처음이야!</h2>
        <div className={style.home__slide__container}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: sliderWidth1 }}
            className={style.home__slider}
            ref={slider1}
          >
            {isLoading && <CardSkeleton cards={8} />}

            {webtoons &&
              webtoons.map((webtoon, index) => (
                <motion.div key={index}>
                  <Card
                    thumbnail={webtoon.img}
                    title={webtoon.title}
                    author={webtoon.author}
                    url={webtoon.url}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
      <section className={style.container}>
        <h2 className={style.home__heading}>연령별·성별 실시간 랭킹</h2>
        <ul className={style.home__rank}>
          <li className={style.home__rank__filter}>10대여자</li>
          <li className={style.home__rank__filter}>10대남자</li>
          <li className={style.home__rank__filter}>20대여자</li>
          <li className={style.home__rank__filter}>20대남자</li>
          <li className={style.home__rank__filter}>30대여자</li>
          <li className={style.home__rank__filter}>30대남자</li>
        </ul>
        <dl className={style.home__rank__list__container}>
          {isLoading && <WebtoonChoicesSkeleton cards={8} />}

          {webtoons &&
            favWebtoons
              .reverse()
              .slice(0, 5)
              .map((webtoon, index) => (
                <WebtoonChoices
                  key={index}
                  thumbnail={webtoon.img}
                  title={webtoon.title}
                  author={webtoon.author}
                  url={webtoon.url}
                  rank={index + 1}
                />
              ))}
        </dl>
      </section>
      <section className={style.container}>
        <h2 className={style.home__heading}>오늘의 웹툰</h2>
        <div className={style.home__slide__container}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: sliderWidth2 }}
            className={style.home__slider}
            ref={slider2}
          >
            {isLoading && <CardSkeleton cards={8} />}

            {todayWebtoons &&
              todayWebtoons.map((webtoon, index) => (
                <motion.div key={index}>
                  <Card
                    thumbnail={webtoon.img}
                    title={webtoon.title}
                    author={webtoon.author}
                    url={webtoon.url}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
