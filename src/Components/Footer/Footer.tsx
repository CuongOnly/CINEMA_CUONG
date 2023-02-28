import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="logo">
        <p>
          <img
            className="imgHo"
            src={require("./FooterIMG/VDlogo.png")}
            alt=""
          />
        </p>
      </div>
      <div className="content">
        <div className="card">
          <h2 style={{ transition: "0.3s" }}>Giới Thiệu</h2>
          <ul>
            <li>
              <a href="#">VỀ CHÚNG TÔI</a>
            </li>
            <li>
              <a href="#">THỎA THUẬN SỬ DỤNG</a>
            </li>
            <li>
              <a href="#">QUY CHẾ HOẠT ĐỘNG</a>
            </li>
            <li>
              <a href="#">CHÍNH SÁCH BẢO MẬT</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2 style={{ transition: "0.3s" }}>GÓC ĐIỆN ẢNH</h2>
          <ul>
            <li>
              <a href="#">THỂ LOẠI PHIM</a>
            </li>
            <li>
              <a href="#">BÌNH LUẬN PHIM</a>
            </li>
            <li>
              <a href="#">BLOG ĐIỆN ẢNH</a>
            </li>
            <li>
              <a href="#">PHIM HAY THÁNG</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2 style={{ transition: "0.3s" }}>HỖ TRỢ</h2>
          <ul>
            <li>
              <a href="#">GÓP Ý</a>
            </li>
            <li>
              <a href="#">SALE & SERVICES</a>
            </li>
            <li>
              <a href="#">RẠP / GIÁ VÉ</a>
            </li>
            <li>
              <a href="#">TUYỂN DỤNG</a>
            </li>
          </ul>
        </div>
        <div className="card">
          <h2 style={{ transition: "0.3s" }}>QUY ĐỊNH & ĐIỀU KHOẢN</h2>
          <ul>
            <li>
              <a href="#">QUY ĐỊNH THÀNH VIÊN</a>
            </li>
            <li>
              <a href="#">ĐIỀU KHOẢN</a>
            </li>
            <li>
              <a href="#">CHÍNH SÁCH CHUNG</a>
            </li>
            <li>
              <a href="#">CHÍNH SÁCH BẢO VỆ THÔNG TIN CÁ NHÂN</a>
            </li>
          </ul>
        </div>

        <hr />

        <div className="card marHr">
          <h2 style={{ transition: "0.3s" }}>KẾT NỐI GALAXY CINEMA</h2>
          <div className="iconItem">
            <i className="fa-brands fa-2x fa-facebook"></i>
            <i className="fa-brands fa-2x fa-youtube"></i>
            <i className="fa-brands fa-2x fa-instagram"></i>
          </div>
          <h2 style={{ transition: "0.3s" }}>DOWNLOAD APP</h2>
          <div className="iconItem2">
            <i className="fa-brands fa-2x fa-apple"></i>
            <i className="fa-brands fa-2x fa-google-play"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
