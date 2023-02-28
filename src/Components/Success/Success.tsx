import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.scss";

export default function Success() {
  const nav = useNavigate();
  return (
    <div className="Success">
      <div className="title-suc">
        <h1 className="h1-suc" data-text="Success">
          Success
        </h1>
      </div>
      <div className="btnContainer">
        <a href="#" onClick={() => nav("/InfoTicker")}>
          XEM VÉ ĐÃ ĐẶT
        </a>
        <a href="#" onClick={() => nav("/")}>
          TRANG CHỦ
        </a>
      </div>
    </div>
  );
}
