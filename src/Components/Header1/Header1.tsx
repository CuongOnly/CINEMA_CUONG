import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Header1.scss";
import eFilm from "../Model/eFilm";
import Cookies from "js-cookie";
function Header1(props: any) {
  const [filmModal, setFilmModal] = useState<Boolean>(false);
  const [eventModal, setEventModal] = useState<Boolean>(false);
  const [signModal, setSignModal] = useState<Boolean>(false);

  const [lsCurrentFilm, setLsCurrentFilm] = useState<Array<eFilm>>([]);
  const [lsSoonFilm, setLsSoonFilm] = useState<Array<eFilm>>([]);

  useEffect(() => {
    setLsCurrentFilm(props.CurrentFilmState.lsCurFilm);
    setLsSoonFilm(props.NextFilmState.lsNextFilm);
  }, [props]);
  const handleOnClickSignOut = () => {
    Cookies.remove("Email");
    Cookies.remove("Password");
    Cookies.remove("Name");
    props.unLogin();
  };
  const nav = useNavigate();
  const HandleClickBuy = (id: string) => {
    nav("Film/" + id);
  };
  return (
    <div className="Header">
      <div className="mainSide">
        <img
          src={require("./Header1IMG/NDC.png")}
          alt="Nguyen Duc Cuong"
          onClick={() => nav("/")}
        />
        <div className="menu">
          <ul>
            <li>
              <a href="#" onClick={() => nav("/list-cinema")}>
                CHỌN RẠP
              </a>
            </li>
            <li
              className="film-li"
              onMouseEnter={() => setFilmModal(true)}
              onMouseLeave={() => setFilmModal(false)}
            >
              <a href="#">PHIM</a>
              <i className="fa-solid fa-angle-down"></i>
              {/* FilmDropdown */}
              {filmModal && (
                <div className="FilmDropdown">
                  {/* currentFilm */}
                  <div className="currentFilm">
                    <span>Phim đang chiếu</span>
                    <div className="currentFilmcontainer">
                      {lsCurrentFilm?.map((item, index) => {
                        return (
                          index <= 3 && (
                            <div
                              key={index}
                              onClick={() => HandleClickBuy(item.id)}
                            >
                              <div>
                                <img
                                  src={item.imageLandscape}
                                  alt="something"
                                />
                              </div>
                              <p>
                                {" "}
                                {item.name.length > 35
                                  ? item.name.slice(0, 30) + "..."
                                  : item.name}
                              </p>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                  {/* upcomingFilm */}
                  <div className="upcomingFilm currentFilm">
                    <span>Phim sắp chiếu</span>
                    <div className="currentFilmcontainer">
                      {lsSoonFilm?.map((item, index) => {
                        return (
                          index <= 3 && (
                            <div
                              key={index}
                              onClick={() => HandleClickBuy(item.id)}
                            >
                              <div>
                                <img
                                  src={item.imageLandscape}
                                  alt="something"
                                />
                              </div>
                              <p>
                                {item.name.length > 35
                                  ? item.name.slice(0, 30) + "..."
                                  : item.name}
                              </p>
                            </div>
                          )
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#" onClick={() => nav("/BlogFilm")}>
                BLOG ĐIỆN ẢNH
              </a>
            </li>
            <li
              className="event-li"
              onMouseEnter={() => setEventModal(true)}
              onMouseLeave={() => setEventModal(false)}
            >
              <a href="#">SỰ KIỆN</a>
              <i className="fa-solid fa-angle-down"></i>
              {eventModal && (
                <div className="event">
                  <p onClick={() => nav("/PromotionHeader")}>Ưu đãi</p>
                  <p>Phim hay tháng</p>
                </div>
              )}
            </li>
          </ul>
        </div>
        {props.ModalPopupState.login ? (
          <div
            className="sign"
            // onMouseEnter={() => setSignModal(true)}
            onMouseLeave={() => setSignModal(false)}
            onMouseEnter={() => setSignModal(true)}
          >
            <div>
              <i
                className="fa-solid fa-user"
                style={{ fontSize: "20px", color: "red" }}
              ></i>
              <p style={{ cursor: "pointer" }}>
                {Cookies.get("Name") &&
                String(Cookies.get("Name"))?.length <= 10
                  ? Cookies.get("Name")
                  : Cookies.get("Name")?.slice(0, 10) + "..."}
              </p>
              <i
                className="fa-solid fa-angle-down"
                style={{ fontSize: "15px", color: "rgb(97, 96, 96)" }}
              ></i>
            </div>
            {signModal && (
              <div className="popup-user">
                <div>
                  <h3>
                    {" "}
                    {Cookies.get("Name") &&
                    String(Cookies.get("Name"))?.length <= 20
                      ? Cookies.get("Name")
                      : Cookies.get("Name")?.slice(0, 20) + "..."}
                  </h3>
                  <p>{Cookies.get("Email")}</p>
                </div>
                <h2
                  style={{ cursor: "pointer" }}
                  onClick={() => nav("/edit-user")}
                >
                  {" "}
                  <i className="fa-solid fa-pen-to-square"></i> Edit Profile
                </h2>
                <h2
                  style={{ cursor: "pointer" }}
                  onClick={() => nav("/InfoTicker")}
                >
                  {" "}
                  <i className="fa-solid fa-ticket"></i> Vé đã đặt
                </h2>
                <h2
                  className="clear-h2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleOnClickSignOut()}
                >
                  <i className="fa-solid fa-right-from-bracket"></i> Sign Out
                </h2>
              </div>
            )}
          </div>
        ) : (
          <div className="loginsignup">
            <span className="SignIn" onClick={() => props.openSignIn()}>
              Sign in
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState,
    ModalPopupState: state.ModalPopupState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    openSignIn: () => {
      dispatch({
        type: "OPEN_SIGN_IN_MODAL",
      });
    },
    unLogin: () => {
      dispatch({
        type: "UN_LOGIN",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header1);
