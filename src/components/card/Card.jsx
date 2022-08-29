import React from "react";
import style from "./card.module.scss";

function Card(props) {
  return (
    <article className={style.card} id={props.id} ref={props.ref}>
      <div className={style.card__thumbnail}>
        <img
          src={props.thumbnail}
          alt={props.title}
          className={style.card__thumbnail__image}
        />
      </div>
      <a href={props.url} style={{ textDecoration: "none", color: "white" }}>
        <h3 className={style.card__title}>{props.title}</h3>
      </a>
      <small className={style.card__author}>{props.author}</small>
    </article>
  );
}

export default Card;
