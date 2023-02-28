import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import FilmInfo from "./Components/FilmInfo/FilmInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Header1 from "./Components/Header1/Header1";
import BlogFilm from "./Components/BlogFilm/BlogFilm";
import LoginPopup from "./Components/LoginPopup/LoginPopup";
import Cookies from "js-cookie";
import UserEdit from "./Components/UserEdit/UserEdit";
import ListOfCinema from "./Components/ListOfCinema/ListOfCinema";
import CinemaInfo from "./Components/CinemaInfo/CinemaInfo";
import Ticker from "./Components/Ticker/Ticker";
import PromotionHeader from "./Components/PromotionHeader/PromotionHeader";
import PromoItem from "./Components/PromotionHeader/PromoItem/PromoItem";
import Error404 from "./Components/ErrorPage/Error404/Error404";
import Success from "./Components/Success/Success";
import InfoTicker from "./Components/InfoTicker/InfoTicker";
function App(props: any) {
  useEffect(() => {
    props.fetchdatafromfirstapi();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: Cookies.get("Email"),
        Password: Cookies.get("Password"),
      }),
    };
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/Login",
      requestOptions
    ).then((response) => {
      response.status === 200 ? props.successlogin() : props.faillogin();
    });
  }, []);
  return (
    <div>
      {props.ModalPopupState.signinmodal === true && <LoginPopup />}
      <BrowserRouter>
        <div className="Header">
          <Header1 />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <div className="Home" id="Homepage1">
                <Home />
              </div>
            }
          ></Route>
          <Route path="/Film/:id" element={<FilmInfo />}></Route>
          <Route path="/BlogFilm" element={<BlogFilm />}></Route>
          <Route
            path="/Ticker/CinemaId=/:CinemaID/FilmID=/:FilmID/SessionID=/:SessionID"
            element={<Ticker />}
          ></Route>
          <Route path="/PromotionHeader" element={<PromotionHeader />}></Route>
          <Route path="/PromoItem" element={<PromoItem />}></Route>
          <Route path="/edit-user" element={<UserEdit />}></Route>
          <Route path="/Error404" element={<Error404 />}></Route>
          <Route path="/Success" element={<Success />}></Route>
          <Route path="/InfoTicker" element={<InfoTicker />}></Route>
          <Route path="/list-cinema" element={<ListOfCinema />}></Route>
          <Route path="/Cinema/:id" element={<CinemaInfo />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    ModalPopupState: state.ModalPopupState,
  };
};
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchdatafromfirstapi: () => {
      dispatch({
        type: "FECTH_DATA_FROM_FIRST_API",
      });
    },
    successlogin: () => {
      dispatch({
        type: "ALREADY_LOGIN",
      });
    },
    faillogin: () => {
      dispatch({
        type: "UN_LOGIN",
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
