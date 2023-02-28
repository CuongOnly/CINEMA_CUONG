import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ChooseBankCard.scss";
function ChooseBankCard(props: any) {
  const [tmp, setTmp] = useState<any>([]);
  const { CinemaID, FilmID, SessionID } = useParams();
  const [isReady, setIsReady] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(true);
  const [isFail, setIsFail] = useState<boolean>(true);
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/Bank/CardRef/" +
        Cookies.get("Email")
    )
      .then((res) => res.json())
      .then((data) => {
        setTmp(data);
      });
  }, []);
  const nav = useNavigate();
  const handleSplitCinema = (tmp: string) => {
    return {
      cinema: tmp.slice(0, tmp.indexOf("|") - 1),
      theater: tmp.slice(tmp.indexOf("|") + 2, tmp.length),
    };
  };
  const handleSplitString = (tmp: string) => {
    return {
      month: tmp.slice(tmp.length - 7, tmp.length - 5),
      day: tmp.slice(tmp.length - 10, tmp.length - 8),
      year: tmp.slice(-4),
    };
  };
  const handleOnclickCard = (data: any) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        CardNumber: data,
        Price: props.FilmSummaryState?.Sum,
        ShowCode: `${CinemaID}-${SessionID}`,
        Email: Cookies.get("Email"),
        CinemaName: handleSplitCinema(props.FilmSummaryState?.Cinema).cinema,
        TheaterName: handleSplitCinema(props.FilmSummaryState?.Cinema).theater,
        FilmName: props.FilmSummaryState?.nameFilm,
        Combo: props.FilmSummaryState?.Combo,
        SeatCode: props.FilmSummaryState?.Seat,
        ImageLandscape: props.FilmSummaryState?.filmImg,
        ImagePortrait: props.FilmSummaryState?.filmImg,
        ShowTime: `${
          handleSplitString(props.FilmSummaryState?.showTime).year
        }-${handleSplitString(props.FilmSummaryState?.showTime).month}-${
          handleSplitString(props.FilmSummaryState?.showTime).day
        }T${props.FilmSummaryState?.showTime.slice(0, 5)}Z`,
      }),
    };
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
    <div className="choosebankMainSize">
      <div style={{ display: "flex" }}>
        <h1 className="titleChooseBank activeBankCard">
          Thanh toán bằng tài khoản ngân hàng có sẵn
        </h1>
        <h1
          className="titleChooseBank"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          /
        </h1>
        <h1 className="titleChooseBank" onClick={props.navigatePhase2}>
          Thanh toán bằng tài khoản ngân hàng mới
        </h1>
      </div>
      <div className="subMainSizeChooseBank">
        {tmp?.map((item: any, index: number) => {
          return (
            <div className="bankCardContainer" key={index}>
              <div
                className="BankCard"
                onClick={() => handleOnclickCard(item.CardNumber)}
              >
                <div className="lefthandbankcard">
                  <img src={item.Logo} />
                  <div>
                    <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                      {item.Name}
                    </p>
                    <p>{item.CardNumber.slice(0, 5) + "XXXXXXX"}</p>
                  </div>
                </div>
                <div className="righthandbankcard"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
    NextFilmState: state.NextFilmState,
    ModalPopupState: state.ModalPopupState,
    NavigateState: state.NavigateState,
    FilmSummaryState: state.FilmSummaryState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    CalculateFinalSum: (data: any) => {
      dispatch({
        type: "CALCULATE_FINAL_SUM",
        payload: data,
      });
    },
    GetCombo: (data: any) => {
      dispatch({
        type: "GET_COMBO",
        payload: data,
      });
    },
    UpdateNumSeat: (data: any) => {
      dispatch({
        type: "UPDATE_NUM_SEAT",
        payload: data,
      });
    },
    dispatchInfotoBooking: (data: any) => {
      dispatch({
        type: "GET_FILM_INFO_TO_TICKET",
        payload: data,
      });
    },
    dispatchCinemaInfoShowtime: (data: any) => {
      dispatch({
        type: "GET_CINEMAINFO_SHOWTIME",
        payload: data,
      });
    },
    getDetailSeat: (data: any) => {
      dispatch({
        type: "GET_SEAT",
        payload: data,
      });
    },
    navigatePhase1: () => {
      dispatch({
        type: "PHASE_1",
      });
    },
    navigatePhase2: () => {
      dispatch({
        type: "PHASE_2",
      });
    },
    navigatePhase3: () => {
      dispatch({
        type: "PHASE_3",
      });
    },
    navigatePhase4: () => {
      dispatch({
        type: "PHASE_4",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChooseBankCard);
