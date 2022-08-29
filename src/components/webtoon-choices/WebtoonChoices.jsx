import React from "react";
import style from "./webtoon-choices.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

function WebtoonChoices(props) {
  return (
    <a
      href={props.url}
      className={style.webtoon__list}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <figure className={style.webtoon__list__thumbnail}>
        <img
          src={props.thumbnail}
          alt={props.title}
          className={style.webtoon__list__thumbnail__image}
        />
      </figure>
      <span className={style.webtoon__list__number}>{props.rank}</span>
      <div>
        <dt className={style.webtoon__list__title}>{props.title}</dt>
        <dd className={style.webtoon__list__author}>{props.author}</dd>
      </div>
    </a>
  );
}

export default WebtoonChoices;
