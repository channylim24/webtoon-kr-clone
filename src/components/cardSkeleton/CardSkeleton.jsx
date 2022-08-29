import React from "react";
import Skeleton from "react-loading-skeleton";
import style from "./card-skeleton.module.scss";

function CardSkeleton(props) {
  return Array(props.cards)
    .fill(0)
    .map((_, index) => (
      <article
        className={style.card__skeleton}
        id={props.id}
        ref={props.ref}
        key={index}
      >
        <div className={style.card__skeleton__thumbnail}>
          <Skeleton className={style.card__skeleton__thumbnail__image} />
        </div>
        <a href={props.url} style={{ textDecoration: "none", color: "white" }}>
          <h3 className={style.card__skeleton__title}>
            <Skeleton />
          </h3>
        </a>
        <small className={style.card__skeleton__author}>
          <Skeleton />
        </small>
      </article>
    ));
}

export default CardSkeleton;
