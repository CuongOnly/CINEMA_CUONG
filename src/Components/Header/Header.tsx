import React from "react";
import "./Header.scss";

export default function Header() {
  return (
    <div className="Header">
      <div className="mainSide">
        <div className="head">
          <div className="mainHead">
            <img src={require("./HeaderIMG/NDC.png")} alt="" />
            <div className="searchContainer">
              <input type="search" placeholder="Tìm Kiếm..." />
            </div>
            <div className="log">
              <span>
                <i className="fa-solid fa-user"></i>
                <a href="#">Đăng Nhập</a>
              </span>
              <span>
                <i className="fa-regular fa-registered"></i>
                <a href="#">Đăng Ký</a>
              </span>
            </div>
          </div>
        </div>

        <div className="navbar">
          <ul>
            <li>
              <a href="#">MUA VÉ</a>
            </li>
            <li>
              <a href="#">THỂ LOẠI</a>
              <ul className="subMenu">
                <li>
                  <a href="#">HÀNH ĐỘNG</a>
                </li>
                <li>
                  <a href="#">TÌNH CẢM</a>
                </li>
                <li>
                  <a href="#">KINH DỊ</a>
                </li>
                <li>
                  <a href="#">HÀI HƯỚC</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">SỰ KIỆN</a>
              <ul className="subMenu">
                <li>
                  <a href="#">ƯU ĐÃI</a>
                </li>
                <li>
                  <a href="#">FAN MEETING</a>
                </li>
                <li>
                  <a href="#">PHIM HAY THÁNG</a>
                </li>
              </ul>
            </li>
            <li style={{ paddingLeft: "20px" }}>
              <a href="#">GÓC ĐIỆN ẢNH</a>
              <ul style={{ marginLeft: "-20px" }} className="subMenu">
                <li>
                  <a href="#">DIỄN VIÊN</a>
                </li>
                <li>
                  <a href="#">ĐẠO DIỄN</a>
                </li>
                <li>
                  <a href="#">BÌNH LUẬN PHIM</a>
                </li>
                <li>
                  <a href="#">BLOG ĐIỆN ẢNH</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">HỖ TRỢ</a>
              <ul className="subMenu">
                <li>
                  <a href="#">GÓP Ý</a>
                </li>
                <li>
                  <a href="#">SALE & SERVICES</a>
                </li>
                <li>
                  <a href="#">ĐÁNH GIÁ</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">THÀNH VIÊN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
