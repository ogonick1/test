import React from "react";
import Card from "../Card";
import cardImg from "../../assets/icon/cardImg.webp";
import sidebar from "../../assets/icon/sidebar.webp";
import "./index.scss";

const BodyInfo = () => {
  return (
    <main className="info__container">
      <article className="info__wrapper">
        <ul className="info__nav">
          <li className="info__nav-item">Home &gt;</li>
          <li className="info__nav-item">Lorem Ipsum is &gt;</li>
          <li className="info__nav-item">
            <b>Lorem Ipsum is simply dummy</b>
          </li>
        </ul>
        <h1 className="info__title">Lorem Ipsum is simply dummy</h1>
        <div className="info__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Leeriest sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="info__articles-wrapper">
          <h6 className="info__articles">Similar articles</h6> <span></span>
        </div>
        <section className="info__card-wrapper">
          <Card
            cardImg={cardImg}
            title="Lorem Ipsum is simply dummy"
            author="ALCO"
            date="26 JANUARY 2023"
          />
          <Card
            cardImg={cardImg}
            title="Lorem Ipsum is simply dummy"
            author="ALCO"
            date="26 JANUARY 2023"
          />
          <Card
            cardImg={cardImg}
            title="Lorem Ipsum is simply dummy"
            author="ALCO"
            date="26 JANUARY 2023"
          />
          <Card
            cardImg={cardImg}
            title="Lorem Ipsum is simply dummy"
            author="ALCO"
            date="26 JANUARY 2023"
          />
        </section>
      </article>
      <aside className="info__ads">
        <img width={300} height={600} src={sidebar} alt="sidebar" />
      </aside>
    </main>
  );
};

export default BodyInfo;
