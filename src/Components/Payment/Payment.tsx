import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import "./Payment.scss";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
function Payment(props: any) {
  const [numBank, setNumBank] = useState<number>(0);
  const { CinemaID, FilmID, SessionID } = useParams();
  const [cardNumber, setcardNumber] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [CVV, setCVV] = useState<string>("");
  const [expire, setExpire] = useState<string>("");
  const handleOnChangeBank = (event: any) => {
    setNumBank(event.target.value * 1);
  };
  const handleOnChangeCardName = (event: any) => {
    setcardNumber(event.target.value);
  };
  const handleOnChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleOnExpire = (event: any) => {
    setExpire(event.target.value);
  };
  const handleOnChangeCVV = (event: any) => {
    setCVV(event.target.value);
  };
  const handleSplitString = (tmp: string) => {
    return {
      month: tmp.slice(tmp.length - 7, tmp.length - 5),
      day: tmp.slice(tmp.length - 10, tmp.length - 8),
      year: tmp.slice(-4),
    };
  };
  const nav = useNavigate();
  const handleSplitCinema = (tmp: string) => {
    return {
      cinema: tmp.slice(0, tmp.indexOf("|") - 1),
      theater: tmp.slice(tmp.indexOf("|") + 2, tmp.length),
    };
  };
  const handleOnClickPayment = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        BankId: numBank * 1,
        CardNumber: cardNumber,
        CardName: name,
        ExpireDate: expire,
        CVV: CVV,
        Price: props.FilmSummaryState?.Sum,
        ShowCode: `${CinemaID}-${SessionID}`,
        Email: Cookies.get("Email"),
        ImageLandscape: props.FilmSummaryState?.filmImg,
        ImagePortrait: props.FilmSummaryState?.filmImg,
        CinemaName: handleSplitCinema(props.FilmSummaryState?.Cinema).cinema,
        TheaterName: handleSplitCinema(props.FilmSummaryState?.Cinema).theater,
        FilmName: props.FilmSummaryState?.nameFilm,
        Combo: props.FilmSummaryState?.Combo,
        SeatCode: props.FilmSummaryState?.Seat,
        ShowTime: `${
          handleSplitString(props.FilmSummaryState?.showTime).year
        }-${handleSplitString(props.FilmSummaryState?.showTime).month}-${
          handleSplitString(props.FilmSummaryState?.showTime).day
        }T${props.FilmSummaryState?.showTime.slice(0, 5)}Z`,
      }),
    };
    numBank !== 0 &&
      fetch(
        "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/Ticket",
        requestOptions
      ).then((response) => {
        if (response.status === 200) {
          nav("/Success");
        }
      });
  };
  return (
    <div className="PaymentContainer">
      <div style={{ display: "flex" }}>
        <h1 className="titleChooseBank" onClick={props.navigatePhase4}>
          Thanh toán bằng tài khoản ngân hàng có sẵn
        </h1>
        <h1
          className="titleChooseBank "
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          /
        </h1>
        <h1 className="titleChooseBank activeBankCard">
          Thanh toán bằng tài khoản ngân hàng mới
        </h1>
      </div>
      <div className="contentContainer">
        <div className="LeftHandPayment">
          <div
            className="ATMContainer"
            style={{
              backgroundImage: `url(${require("./1.png")})`,
            }}
          >
            <div className="NameATM">
              <img
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-TPBank.png"
                alt=""
              />
              <h1>TP Bank</h1>
            </div>

            <div className="NumCard">
              <h3>XXXX-XXXX-XXXX-XXXX</h3>
              <p>2717</p>
            </div>

            <div className="UserInfo">
              <h3>NGUYEN DUC CUONG</h3>
              <div>
                <span className="nameDay">VALID FROM</span>
                <span className="day">04/22</span>
                <span className="nameDay">GOOD THRU</span>
                <span className="day">04/28</span>
              </div>
            </div>
          </div>
        </div>

        <div className="RightHandPayment">
          {" "}
          <div className="intContainer">
            <select name="Chọn Loại Thẻ" onChange={handleOnChangeBank}>
              <option value="0">Chọn thẻ</option>
              <option value="1">TP Bank</option>
              <option value="2">Agribank</option>
            </select>
          </div>
          <div className="intContainer">
            <input
              type="text"
              placeholder="Nhập số thẻ"
              onChange={handleOnChangeCardName}
            />
          </div>
          <div className="intContainer">
            <input
              type="text"
              placeholder="Tên chủ thẻ"
              onChange={handleOnChangeName}
            />
          </div>
          <div className="intContainer">
            <input
              type="text"
              disabled
              value={Cookies.get("Email")}
              className="gender"
            />
          </div>
          <div className="intContainerexpire">
            <input
              type="text"
              className="expireday"
              placeholder="Expire day"
              onChange={handleOnExpire}
            />
            <input
              type="text"
              className="CVV"
              placeholder="CVV / CVC"
              onChange={handleOnChangeCVV}
            />
          </div>
          <div className="intContainer">
            <input type="text" placeholder="Mã giảm giá" />
          </div>
          <div className="intContainer">
            <span>
              (*) Bằng việc click/chạm vào <b>THANH TOÁN</b>, bạn đã xác nhận
              hiểu rõ các <b>Quy Định Giao Dịch Trực Tuyến</b> của Galaxy
              Cinema.
            </span>
          </div>
          <div className="intContainer">
            <button onClick={handleOnClickPayment}>THANH TOÁN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return { FilmSummaryState: state.FilmSummaryState };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    navigatePhase4: () => {
      dispatch({
        type: "PHASE_4",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);
