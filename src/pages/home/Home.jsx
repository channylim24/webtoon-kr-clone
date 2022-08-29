import React, { useState, useRef, useEffect } from "react";
import style from "./home.module.scss";
import Card from "../../components/card/Card";
import WebtoonChoices from "../../components/webtoon-choices/WebtoonChoices";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { retrieveWebtoons } from "../../actions/webtoons";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton";
import WebtoonChoicesSkeleton from "../../components/webtoon-choices-skeleton/WebtoonChoicesSkeleton";

function Home() {
  const slider = useRef();
  const [sliderWidth, setSliderWidth] = useState(0);
  const getWebtoons = useSelector((state) => state.webtoons);
  const webtoons = getWebtoons.data;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(retrieveWebtoons());
  }, []);

  useEffect(() => {
    if (webtoons) {
      setIsLoading(getWebtoons.isLoading);
    }
  }, [webtoons]);

  useEffect(() => {
    setSliderWidth(slider.current.offsetWidth - slider.current.scrollWidth);
  }, [sliderWidth, webtoons]);

  return (
    <main className={style.home}>
      <section className={style.container}>
        <h2 className={style.home__heading}>이런 판타지는 처음이야!</h2>
        <div className={style.home__slide__container}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: sliderWidth }}
            className={style.home__slider}
            ref={slider}
          >
            {isLoading && <CardSkeleton cards={8} />}

            {webtoons &&
              webtoons.map((webtoon, index) =>
                webtoon.week[0] === 3 ? (
                  <motion.div key={index}>
                    <Card
                      thumbnail={webtoon.img}
                      title={webtoon.title}
                      author={webtoon.author}
                      url={webtoon.url}
                    />
                  </motion.div>
                ) : (
                  ""
                )
              )}
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
            webtoons
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
        <h2 className={style.home__heading}>휘몰아치는 전개</h2>
        <div className={style.home__slide__container}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: sliderWidth }}
            className={style.home__slider}
            ref={slider}
          >
            {isLoading && <CardSkeleton cards={8} />}
            {webtoons
              ? webtoons.map((webtoon, index) =>
                  webtoon.week[0] === 2 ? (
                    <motion.div key={index}>
                      <Card
                        thumbnail={webtoon.img}
                        title={webtoon.title}
                        author={webtoon.author}
                        url={webtoon.url}
                      />
                    </motion.div>
                  ) : (
                    ""
                  )
                )
              : ""}
          </motion.div>
        </div>
      </section>
      <section className={style.container}>
        <h2 className={style.home__heading}>소설도 읽고 웹툰도 보고</h2>
        <div className={style.home__slide__container}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: sliderWidth }}
            className={style.home__slider}
            ref={slider}
          >
            {isLoading && <CardSkeleton cards={8} />}
            {webtoons &&
              webtoons.map((webtoon, index) =>
                webtoon.week[0] === 1 ? (
                  <motion.div key={index}>
                    <Card
                      thumbnail={webtoon.img}
                      title={webtoon.title}
                      author={webtoon.author}
                      url={webtoon.url}
                    />
                  </motion.div>
                ) : (
                  ""
                )
              )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Home;
