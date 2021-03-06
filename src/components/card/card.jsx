import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

const Card = ({ _id, theme, comment, date, favorite }) => {
  const formatDate = moment(date).format("DD MMMM");

  return (
    <article className="card">
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <Link
              to={`/event/${_id}`}
              type="button"
              className="card__btn card__btn--edit"
            >
              Редактировать
            </Link>
            <button type="button" className="card__btn card__btn--archive">
              В архив
            </button>
            <button type="button" className="card__btn card__btn--favorites">
              В избранное
            </button>
            <button type="button" className="card__btn card__btn--remove">
              Удалить
            </button>
          </div>
          <div className="card__textarea-wrap">
            <p className="card__text--theme">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <p className="card__text--comment">Curabitur nibh.</p>
          </div>
          <div className="card__settings">
            <span className="card__date">23 Сентября</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
