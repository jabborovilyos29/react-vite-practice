import React from "react";
import style from "./Section.module.css";
import { Article } from "./Arrticle/Article";

export function Section({ user }) {
  return (
    <div>
      {user?.articles?.map((article) => {
        return (
          <>
            <h2>
              Тема: <u>{article.title}</u>
            </h2>
            <section id={article.id} className={style.section}>
              <Article article={article.article} />
            </section>
          </>
        );
      })}
    </div>
  );
}
