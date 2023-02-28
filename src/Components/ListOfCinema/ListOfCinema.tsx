import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import eCity from "../Model/eCity";
import "./ListOfCinema.scss";
export default function ListOfCinema() {
  const nav = useNavigate();
  const [cinema, setCinema] = useState<Array<any>>([]);
  const [valueInut, setValueinput] = useState<string>("");
  const [city, setCity] = useState<Array<eCity>>([]);
  const [popupCinema, setPopupCinema] = useState<boolean>(false);
  const [CinemaObject, setCinemaObject] = useState<any>({
    slug: "",
    name: "Tất cả các rạp",
  });
  const [CityObject, setCityObject] = useState<any>({
    cityID: "",
    name: "Cả Nước",
  });
  const [popupCity, setPopUpCity] = useState<boolean>(false);
  const SetCloseCity = () => {
    setPopUpCity(false);
    setValueinput("");
  };
  const HandleOnClickCinema = (ObjectCinema: any) => {
    setCinemaObject(ObjectCinema);
    setPopupCinema(false);
  };
  const handleOnClickCity = (ObjectCity: any) => {
    setCityObject(ObjectCity);
    setPopUpCity(false);
  };
  useEffect(() => {
    setCinemaObject({
      slug: "",
      name: "Tất cả các rạp",
    });
  }, [CityObject]);
  useEffect(() => {
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/city"
    )
      .then((res) => res.json())
      .then((data) => setCity(data));
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/cinema/cinemas"
    )
      .then((res) => res.json())
      .then((data) => setCinema(data));
  }, []);
  const handleOnclickMuaVe = (id: string) => {
    nav("/Cinema/" + id);
  };
  return (
    <div>
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
            Tất cả các rạp
          </span>
        </div>
      </div>
      <div className="ListOfCinemacontainer">
        <div className="ListOfCinemaMainsize">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {" "}
            <h2 style={{ color: "rgb(219, 61, 33)" }}>
              DANH SÁCH RẠP GALAXY TRÊN TOÀN QUỐC
            </h2>
            <div style={{ display: "flex" }}>
              <div className="locationCity">
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                  <span
                    style={{ marginLeft: "5px" }}
                    onClick={() => setPopUpCity(true)}
                  >
                    {CityObject.name}
                  </span>
                  <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
              <div
                className="cinemalocation"
                onClick={() => setPopupCinema(true)}
              >
                <p>
                  <span>{CinemaObject.name}</span>
                  <i className="fa-solid fa-caret-down"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="cinemaList">
            {cinema
              ?.filter((n) => n.cityId.includes(CityObject.cityID))
              .filter((n) => n.slug.includes(CinemaObject.slug))
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cinemaBorder"
                    onClick={() => handleOnclickMuaVe(item.code)}
                  >
                    <div>
                      {" "}
                      <img src={item.imageUrls[0]} />
                    </div>

                    <p style={{ fontWeight: "bolder", marginTop: "5px" }}>
                      {item.name}
                    </p>
                  </div>
                );
              })}
          </div>
          {popupCity && (
            <div className="popUpCityBg">
              <div className="PopupCityBorder">
                <div className="buttonClose">
                  <i
                    className="fa-solid fa-x"
                    onClick={() => SetCloseCity()}
                  ></i>
                </div>
                <div className="popupcityMainsize">
                  {" "}
                  <div className="headerPopup">
                    <h3>Chọn địa điểm</h3>
                    <div className="InputContainerCity">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input
                        placeholder="Tìm địa điểm"
                        onChange={(event) => setValueinput(event?.target.value)}
                      ></input>
                    </div>
                  </div>
                  <div className="contentofCity">
                    <div
                      className="City"
                      onClick={() =>
                        handleOnClickCity({ cityID: "", name: "Cả Nước" })
                      }
                    >
                      <span>Cả Nước</span>
                    </div>
                    {city &&
                      city
                        .filter((n) =>
                          n.name.toLowerCase().includes(valueInut.toLowerCase())
                        )
                        .map((item) => {
                          return (
                            <div
                              className="City"
                              onClick={() =>
                                handleOnClickCity({
                                  cityID: item.id,
                                  name: item.name,
                                })
                              }
                            >
                              <span>{item.name}</span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          )}
          {popupCinema && (
            <div className="PopUpCinemaBg">
              <div className="PopUpCinemaBorder">
                <div
                  className="buttonClose"
                  onClick={() => setPopupCinema(false)}
                >
                  <i className="fa-solid fa-x"></i>
                </div>
                <div className="popupcinemaMainsize">
                  <div className="headerPopup">
                    <h3>Chọn Rạp</h3>
                  </div>
                  <div className="contentofCinema">
                    <div className="Cinema">
                      <span
                        onClick={() =>
                          HandleOnClickCinema({
                            slug: "",
                            name: "Tất cả các rạp",
                          })
                        }
                      >
                        Tất cả các rạp
                      </span>
                    </div>
                    {cinema &&
                      cinema
                        .filter((n) => n.cityId.includes(CityObject.cityID))
                        .map((item) => {
                          return (
                            <div
                              className="Cinema"
                              onClick={() =>
                                HandleOnClickCinema({
                                  slug: item.slug,
                                  name: item.name,
                                })
                              }
                            >
                              <span>{item.name}</span>
                            </div>
                          );
                        })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
