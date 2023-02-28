import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import "./InfoTicker.scss";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import TickkerItem from "./TickkerItem/TickkerItem";
function InfoTicker(props: any) {
  const [tmp, setTmp] = useState<any>([]);
  const [soon, setSoon] = useState<any>([]);
  const [already, setAlready] = useState<any>([]);
  const month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "7",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const nav = useNavigate();
  useEffect(() => {
    if (props.ModalPopupState.login === false) {
      nav("/");
    }
  }, [props.ModalPopupState.login]);
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/TicketByEmail/" +
        Cookies.get("Email")
    )
      .then((res) => res.json())
      .then((data) => {
        // data?.map((item: any) => {
        //   if (
        //     Number(new Date(item.ShowTime).getTime()) -
        //       Number(new Date().getTime()) >
        //     0
        //   ) {
        //     setSoon([...soon, item]);
        //   } else {
        //     setAlready([...already, item]);
        //   }
        // });
        setTmp(data);
      });
  }, []);
  useEffect(() => {
    setSoon(
      tmp?.filter(
        (item: any) =>
          Number(new Date(item.ShowTime).getTime()) -
            Number(new Date().getTime()) >
          0
      )
    );
    setAlready(
      tmp?.filter(
        (item: any) =>
          Number(new Date(item.ShowTime).getTime()) -
            Number(new Date().getTime()) <=
          0
      )
    );
  }, [tmp]);
  console.log(soon, already);
  return (
    <div className="InfoTicker">
      <TickkerItem />
      {/* <div className="mainSize">
        <div className="subheader">
          <i style={{ color: "black" }} className="fa-solid fa-house"></i>
          <i className="fa-solid fa-angle-right"></i>
          <span className="ThanhVien" style={{ fontWeight: "bolder" }}>
            Thành viên
          </span>
          <i className="fa-solid fa-angle-right"></i>
          <span>Giao dịch</span>
        </div>

        <div className="menuInfo">
          <span className="activeBankCard">PHIM ĐÃ XEM</span>
          <span>/</span>
          <span className="">PHIM SẮP XEM</span>
        </div>
      </div>

      <div className="mainSizeMini">
        <div className="TickerContainer">
          {tmp?.map((item: any, index: number) => {
            return (
              <div className="TickerItem" key={index}>
                <div className="infLeft">
                  <h3>{item.FilmName}</h3>
                  <h4>CinemaName: {item.CinemaName}</h4>
                  <h4>TheaterName: {item.TheaterName}</h4>
                  <h4>
                    ShowTime:{" "}
                    {new Date(item.ShowTime).getDate() +
                      "-" +
                      month[new Date(item.ShowTime).getMonth()] +
                      "-" +
                      new Date(item.ShowTime).getFullYear()}
                  </h4>
                  <h4>Combo: {item.Combo}</h4>
                  <h4>SeatCode: {item.SeatCode}</h4>
                  <h5>
                    <i className="fa-solid fa-ticket"></i> {item.ShowCode}
                  </h5>
                </div>
                <div className="infRight"></div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    FilmSummaryState: state.FilmSummaryState,
    ModalPopupState: state.ModalPopupState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(InfoTicker);
