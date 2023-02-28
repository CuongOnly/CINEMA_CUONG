import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import eFilm from "../Model/eFilm";
import Promotion from "./Promotion/Promotion";
import { connect } from "react-redux";
function Home(props: any) {
  const [isClick, setIsClick] = useState<number>(1);
  const [lsfilm, setLsFilm] = useState<Array<eFilm>>([]);
  const [tmp, setTmp] = useState<number>(1);
  let a = 0,
    b = 0;
  useEffect(() => {
    if (isClick === 1) {
      setLsFilm(props.CurrentFilmState.lsCurFilm);
    } else {
      setLsFilm(props.NextFilmState.lsNextFilm);
    }
    setTmp(1);
  }, [isClick, props]);
  const assignVar = () => {
    a = Math.floor(lsfilm.length / 5);
    b = lsfilm.length - 5 * Math.floor(lsfilm.length / 5);
    return false;
  };

  const nav = useNavigate();
  const handleOnclickMuaVe = (id: string) => {
    nav("/Film/" + id);
  };
  return (
    <div>
      <Carousel />
      <div className="FilmContainer" id="section1Home">
        {assignVar()}
        <div className="titleContainer">
          <span
            style={{ marginLeft: "-50px" }}
            onClick={() => setIsClick(1)}
            className={isClick === 1 ? "Active" : ""}
          >
            PHIM ĐANG CHIẾU
          </span>
          <span
            onClick={() => setIsClick(2)}
            className={isClick === 2 ? "Active" : ""}
          >
            PHIM SẮP CHIẾU
          </span>
        </div>
        <div className="lsFilmContainer">
          {lsfilm?.map((item, index) => {
            if (index < (tmp > a ? tmp * 4 + b : tmp * 4)) {
              return (
                <div className="Film" key={index}>
                  <a
                    className="aClear"
                    href={`/Film/${item.id}#FilmBanner`}
                    onClick={() => handleOnclickMuaVe(item.id)}
                  >
                    <div
                      className="imageContainer shine"
                      // onClick={() => nav("/Film/" + item.id)}
                    >
                      {/* <a href={`/Film/${item.id}#FilmBanner`} onClick={() => handleOnclickMuaVe(item.id)} className="aIMGFilm">
                        <img alt="Bùi Thanh Duy" src={item.imagePortrait} />
                      </a> */}
                      <img alt="Bùi Thanh Duy" src={item.imagePortrait} />
                    </div>
                  </a>
                  <p>
                    {item.name.length > 30
                      ? item.name.slice(0, 30) + " ..."
                      : item.name}
                  </p>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      className="aDuy"
                      href={`/Film/${item.id}#FilmBanner`}
                      onClick={() => handleOnclickMuaVe(item.id)}
                    >
                      MUA VÉ
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div
          style={{
            width: "1499px",
            display: "flex",
            justifyContent: "flex-end",
            boxSizing: "border-box",
            paddingRight: "80px",
            paddingTop: "20px",
            height: "auto",
          }}
        >
          {tmp <= a && a !== 0 && (
            <a className="buttonAddmore" onClick={() => setTmp(tmp + 1)}>
              XEM THÊM <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
          {tmp > a && (
            <a
              className="buttonAddmore"
              onClick={() => setTmp(1)}
              href="/#section1Home"
            >
              THU GỌN <i className="fa-solid fa-arrow-right"></i>
            </a>
          )}
        </div>
      </div>
      <Promotion />
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState,
    FilmSummaryState: state.FilmSummaryState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchdatafromfirstapi: () => {
      dispatch({
        type: "FECTH_DATA_FROM_FIRST_API",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
