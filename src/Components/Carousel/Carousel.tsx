import React, { useState } from "react";
import "./Carousel.scss";
export default function Carousel() {
  const [Index, setIndex] = useState<number>(0);
  const imgArray = [
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/VNPay-Ngang-1.jpeg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/COLORFULFESTIVAL-WEB-1920x1080.jpg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/COMBO-OP-WEB-1.jpeg",
    "https://www.bhdstar.vn/wp-content/uploads/2018/03/App.jpg",
  ];
  const plus = (num: number) => {
    if (Index + num < 0) {
      setIndex(imgArray.length - 1);
    } else if (Index + num > imgArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(Index + num);
    }
  };
  return (
    <div className="carouselContainer">
      {imgArray.map((item, index) => {
        return (
          <img
            key={index}
            alt="jflkdsj"
            src={item}
            className={index === Index ? "mySlide active" : "mySlide"}
          />
        );
      })}
      <a className="prevBanner" onClick={() => plus(-1)} type="button">
        ❮
      </a>
      <a className="nextBanner" onClick={() => plus(1)} type="button">
        ❯
      </a>
      <div>
        {imgArray.map((item, index) => {
          return (
            <span
              key={index}
              className={index === Index ? "dot activeDot" : "dot"}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
