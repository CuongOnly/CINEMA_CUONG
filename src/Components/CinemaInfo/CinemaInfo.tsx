import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import eCinema from "../Model/eCinema";
import eFilmInCinema from "../Model/eFimInCinema";
import "./CinemaInfo.scss";
import { connect } from "react-redux";
function CinemaInfo(props: any) {
  const { id } = useParams();
  const [CinemaInfo, setCinemaInfo] = useState<Array<eCinema>>([]);
  const [moving, setMoving] = useState<boolean>(true);
  const [tmp, setTmp] = useState<number>(0);
  const [length, setlength] = useState<number>(0);
  const [Index, setIndex] = useState<number>(0);
  const [detaiSchedule, setSchedule] = useState<Array<eFilmInCinema>>([]);
  const nav = useNavigate();
  const HandleOnClickPrevButtonCinema = (a: number) => {
    setTmp(tmp + a);
  };
  const handleOnClickShowTime = (data: any) => {
    if (props.ModalPopupState.login === true) {
      nav(
        `/Ticker/CinemaId=/${data.CinemaID}/FilmID=/${data.FilmID}/SessionID=/${data.SessionID}`
      );
    } else {
      props.openSignIn();
    }
  };
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/cinemas"
    )
      .then((res) => res.json())
      .then((data) => {
        setCinemaInfo(data.filter((n: any) => n.code === id));
      });
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/cinemas/" +
        id
    )
      .then((res) => res.json())
      .then((data) => {
        setSchedule(data);
        setlength(data[0].dates.length);
      });
  }, []);

  return (
    <>
      <div className="subheadContainer">
        <div className="subheadMainSize">
          <i className="fa-solid fa-house" onClick={() => nav("/")}></i>
          <i className="fa-solid fa-angle-right"></i>
          <a onClick={() => nav("/list-cinema")} className="phimchieusubhead">
            <b>Danh sách rạp</b>
          </a>
          <i className="fa-solid fa-angle-right"></i>
          <span
            style={{ color: "#737373", fontSize: "15px", fontWeight: "bolder" }}
          >
            {CinemaInfo[0]?.name}
          </span>
        </div>
      </div>
      <div className="CinemaInfoContainer">
        <div className="CinemaInfoMainSize">
          <div className="ImageContainer">
            {moving === false && (
              <a
                className="prevbuttonTimeCinema"
                onClick={() => setMoving(true)}
              >
                ❮
              </a>
            )}
            {moving === true && (
              <a
                className="nextbuttonTimeCinema"
                onClick={() => setMoving(false)}
              >
                ❯
              </a>
            )}
            <img
              style={{ marginLeft: moving === true ? "5px" : "-150px" }}
              src={CinemaInfo[0]?.imageUrls[0]}
            />
            {CinemaInfo[0]?.imageUrls.map((item, index) => {
              if (index > 0 && index <= 2) {
                return <img key={index} src={item} />;
              }
            })}
          </div>
          <div className="CinemaFilmContainer">
            <div className="LeftHandCinema">
              <p className="ticketpricetitle">PHIM ĐANG CHIẾU</p>
              <div className="DateFilmContainerInCinema">
                {" "}
                {length - 3 > 0 && (
                  <>
                    {tmp !== 0 && (
                      <a
                        className="prevbuttonFilmCinema"
                        onClick={() => HandleOnClickPrevButtonCinema(-1)}
                      >
                        ❮
                      </a>
                    )}
                    {tmp !== length - 3 && (
                      <a
                        className="nextbuttonFilmCinema"
                        onClick={() => HandleOnClickPrevButtonCinema(1)}
                      >
                        ❯
                      </a>
                    )}
                  </>
                )}
                <div className="DateFilmMainSizeInCinema">
                  {
                    <div
                      className="DateContainerinCinema"
                      onClick={() => setIndex(0)}
                      style={{ marginLeft: `${-1 * 185 * tmp}px` }}
                    >
                      <div className={Index === 0 ? "activeCinema" : ""}>
                        <p>{detaiSchedule[0]?.dates[0].dayOfWeekLabel}</p>
                        <p>{detaiSchedule[0]?.dates[0].showDate}</p>
                      </div>
                    </div>
                  }
                  {detaiSchedule &&
                    detaiSchedule[0]?.dates.map((item, index) => {
                      return (
                        index > 0 && (
                          <div
                            key={index}
                            className="DateContainerinCinema"
                            onClick={() => setIndex(index)}
                          >
                            <div
                              className={Index === index ? "activeCinema" : ""}
                            >
                              <p>{item?.dayOfWeekLabel}</p>
                              <p>{item?.showDate}</p>
                            </div>
                          </div>
                        )
                      );
                    })}
                </div>
              </div>
              {/* List Film in this cinema */}
              {detaiSchedule?.map((item, index) => {
                return (
                  item.dates.filter((n) =>
                    n.showDate.includes(detaiSchedule[0]?.dates[Index].showDate)
                  ).length > 0 && (
                    <div key={index} className="listFilmContainer">
                      <div className="avatarFilm">
                        <img src={item.imagePortrait}></img>
                      </div>
                      <div className="showtimeInfo">
                        <h3>{item?.name}</h3>
                        <p>
                          {item?.startdate.slice(0, 4)}
                          <span style={{ marginLeft: "70px" }}>
                            <i
                              className="fa-regular fa-clock"
                              style={{ marginRight: "6px" }}
                            ></i>
                            {item.duration} phút
                          </span>
                        </p>
                        <div className="ShowTime">
                          {item.dates
                            .filter((n) =>
                              n.showDate.includes(
                                detaiSchedule[0]?.dates[Index].showDate
                              )
                            )
                            .map((n, index) => {
                              return (
                                <div key={index}>
                                  {n.bundles.map((m) => {
                                    return (
                                      <div key={index}>
                                        {" "}
                                        <p
                                          style={{
                                            marginTop: "15px",
                                            width: "90px",
                                          }}
                                        >
                                          {m.version} - Phụ đề
                                        </p>
                                        <div className="ShowTimeContainer">
                                          {m.sessions.map((x, index) => {
                                            return (
                                              <span
                                                key={index}
                                                className="time"
                                                onClick={() =>
                                                  handleOnClickShowTime({
                                                    FilmID: item.id,
                                                    CinemaID: id,
                                                    SessionID: x.sessionId,
                                                  })
                                                }
                                              >
                                                {x.showTime}
                                              </span>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className="RightHandCinema">
              <p className="ticketpricetitle">GIÁ VÉ</p>
              <img
                className="CinemaBanner"
                src={CinemaInfo[0]?.ticket[0]?.url}
              />
              <p className="ticketpricetitle">THÔNG TIN CHI TIẾT</p>
              <p style={{ marginTop: "10px" }}>
                <span style={{ color: "#5E5E5E", fontWeight: "bolder" }}>
                  Địa chỉ:
                </span>{" "}
                {CinemaInfo[0]?.address}
              </p>
              <p>
                <span style={{ color: "#5E5E5E", fontWeight: "bolder" }}>
                  Số điện thoại:{" "}
                </span>
                {CinemaInfo[0]?.phone}
              </p>
              <iframe className="mapGoogle" src={CinemaInfo[0]?.mapEmbeb} />
              <p
                style={{ marginTop: "20px" }}
                dangerouslySetInnerHTML={{
                  __html: CinemaInfo[0]?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
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
    dispatchInfotoBooking: (data: any) => {
      dispatch({
        type: "GET_FILM_INFO_TO_TICKET",
        payload: data,
      });
    },
    openSignIn: () => {
      dispatch({
        type: "OPEN_SIGN_IN_MODAL",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CinemaInfo);
