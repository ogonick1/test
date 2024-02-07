import React from "react";
import "./index.scss";

const Card = ({ cardImg, title, author, date }) => {
  return (
    <div className="card__container">
      <div className="card__wrapper">
        <img
          width={347}
          height={171}
          className="card__img"
          src={cardImg}
          alt="card image"
        />
        <div className="card__title">{title}</div>
        <div className="card__info">
          <div className="card__info-author">
            <svg
              width="11"
              height="13"
              viewBox="0 0 11 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 10.1484C10.5 8.09375 9.99219 5.71875 7.94531 5.71875C7.3125 6.33594 6.45312 6.71875 5.5 6.71875C4.54688 6.71875 3.6875 6.33594 3.05469 5.71875C1.00781 5.71875 0.5 8.09375 0.5 10.1484C0.5 11.2891 1.25 12.2188 2.16406 12.2188H8.83594C9.75 12.2188 10.5 11.2891 10.5 10.1484ZM8.5 3.21875C8.5 1.5625 7.15625 0.21875 5.5 0.21875C3.84375 0.21875 2.5 1.5625 2.5 3.21875C2.5 4.875 3.84375 6.21875 5.5 6.21875C7.15625 6.21875 8.5 4.875 8.5 3.21875Z"
                fill="#B3B3B1"
              />
            </svg>
            {author}
          </div>
          <div className="card__info-date">
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3.25C7.5 3.10938 7.39063 3 7.25 3H6.75C6.60938 3 6.5 3.10938 6.5 3.25V6H4.75C4.60938 6 4.5 6.10938 4.5 6.25V6.75C4.5 6.89063 4.60938 7 4.75 7H7.25C7.39063 7 7.5 6.89063 7.5 6.75V3.25ZM10.75 6C10.75 8.34375 8.84375 10.25 6.5 10.25C4.15625 10.25 2.25 8.34375 2.25 6C2.25 3.65625 4.15625 1.75 6.5 1.75C8.84375 1.75 10.75 3.65625 10.75 6ZM12.5 6C12.5 2.6875 9.8125 0 6.5 0C3.1875 0 0.5 2.6875 0.5 6C0.5 9.3125 3.1875 12 6.5 12C9.8125 12 12.5 9.3125 12.5 6Z"
                fill="#B3B3B1"
              />
            </svg>
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
