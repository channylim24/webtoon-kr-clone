import React from "react";
import style from "./webtoon-choices-skeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function WebtoonChoicesSkeleton(props) {
  return (
    <a
      href={props.url}
      className={style.webtoon__list}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <figure className={style.webtoon__list__thumbnail}>
        <Skeleton
          src={props.thumbnail}
          alt={props.title}
          className={style.webtoon__list__thumbnail__image}
        />
      </figure>
      <span className={style.webtoon__list__number}>
        <Skeleton width={24} />
      </span>
      <div>
        <dt className={style.webtoon__list__title}>
          <Skeleton width={100} />
        </dt>
        <dd className={style.webtoon__list__author}>
          <Skeleton width={50} />
        </dd>
      </div>
    </a>
  );
}

export default WebtoonChoicesSkeleton;
