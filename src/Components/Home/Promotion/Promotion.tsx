import React, { useEffect, useState } from "react";
import ePromotion from "../../Model/ePromotion";
import "./Promotion.scss";
export default function Promotion() {
  const [style, setStyle] = useState<number>(0);
  const [lsPro, setLsPro] = useState<Array<ePromotion>>([]);
  const [tmp, setTmp] = useState<number>(1);
  const assignVar = () => {
    a = Math.floor(lsPro.length / 5);
    b = lsPro.length - 5 * Math.floor(lsPro.length / 5);
    return false;
  };
  let a = 0,
    b = 0;
  useEffect(() => {
    fetch("https://mocki.io/v1/e0b2b770-bca5-4f0c-b213-b7f8aeba509b")
      .then((res) => res.json())
      .then((data) => setLsPro(data));
  }, []);
  return (
    <div>
      {assignVar()}
      <div className="promotionContainer" id="sectionPromotion">
        <img
          className="LeftSideImage"
          src="https://ocwckgy6c1obj.vcdn.cloud/media/wysiwyg/CGV_T12_120x600.jpg"
          alt="Bùi Thanh Duy"
        />
        <img
          className="RightSideImage"
          src="https://ocwckgy6c1obj.vcdn.cloud/media/wysiwyg/CGV_T12_120x600.jpg"
          alt="Bùi Thanh Duy"
        />
        <p>TIN TỨC - KHUYẾN MÃI</p>
        <div className="promotionMainsize">
          {/* LOOP */}
          {lsPro?.map((item, index) => {
            if (index < (tmp > a ? tmp * 4 + b : tmp * 4)) {
              return (
                <div
                  key={index}
                  className="promotion"
                  onMouseEnter={() => setStyle(index)}
                  onMouseLeave={() => setStyle(-1)}
                >
                  <img alt="Bùi Thanh Duy" src={item.imagePortrait} />
                  <div style={{ transition: "0.3s" }}>
                    <div
                      className="contentBG"
                      style={
                        index === style
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <span>QUÀ LUNG LINH - ĐÓN GIÁNG SINH</span>

                      <p>
                        Mỗi hóa đơn combo bắp nước bất kỳ sẽ được tặng ngẫu
                        nhiên 01 bộ lì xì lung linh hoặc 01 lịch để bàn Galaxy
                        Cinema 2023.
                      </p>
                      <div>
                        <button>CHI TIẾT</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div>
          {tmp <= a && a !== 0 && (
            <button className="promotionButton" onClick={() => setTmp(tmp + 1)}>
              <i className="fa-solid fa-arrow-down"></i>XEM THÊM
            </button>
          )}
          {tmp > a && (
            <a
              className="promotionButton_1"
              onClick={() => setTmp(1)}
              href="/HomePage#sectionPromotion"
            >
              <i className="fa-solid fa-arrow-up"></i>THU GỌN
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
