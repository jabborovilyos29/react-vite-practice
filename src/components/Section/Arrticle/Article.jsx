import React, { useState } from "react";
import style from "./Article.module.css";

const noImg =
  "https://avatars.mds.yandex.net/i?id=c636967ff204a2a399974d385cb31fa5eec4cc36-9068831-images-thumbs&n=13";

export function Article({ article }) {
  const [like, setLike] = useState(article);

  const handleClick = (id) => {
    const newItems = like.map((item) => {
      if (item.id === id) {
        item.like = !item.like;
        return item;
      } else {
        return item;
      }
    });
    setLike(newItems);
  };

  return (
    <>
      {like.map((item) => {
        return (
          <div id={item.id} className={style.card}>
            <img
              className={style.img}
              src={item.img || noImg}
              alt={item.title}
            />
            <h3>Называние: {item.title || "Без называния"}</h3>
            <p>Описание: {item.subtitle || "Нет текста"}</p>
            <button
              className={
                item.like === true
                  ? style.likeButtonLiked
                  : style.likeButtonDefault
              }
              onClick={() => {
                handleClick(item.id);
              }}
            >
              &#10084;
            </button>
          </div>
        );
      })}
    </>
  );
}
