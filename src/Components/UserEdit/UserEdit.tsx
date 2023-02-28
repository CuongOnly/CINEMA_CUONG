import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserEdit.scss";
import Cookies from "js-cookie";
export default function UserEdit() {
  const [name, setName] = useState<string>(String(Cookies.get("Name")));
  const [currentPass, setcurrentPass] = useState<string>("");
  const [newPass, setnewPass] = useState<string>("");
  const [newcheckedPass, setnewcheckedPass] = useState<string>("");
  const [errorCheckedPass, seterrorCheckedPass] = useState<Boolean>(false);
  const [bool, setBool] = useState<boolean>(true);
  const handleOnClickSaveChangePass = () => {
    if (newPass === newcheckedPass && currentPass === Cookies.get("Password")) {
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Email: Cookies.get("Email"),
          Password: Cookies.get("Password"),
          PasswordNew: newPass,
        }),
      };
      fetch(
        "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/ChangePassword",
        requestOptions
      ).then((response) => {
        if (response.status === 200) {
          Cookies.set("Password", newPass, { expires: 1 });
          nav("/");
        }
      });
      seterrorCheckedPass(false);
    } else {
      seterrorCheckedPass(true);
    }
  };
  const handleOnClickSave = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Email: Cookies.get("Email"),
        Name: name,
        Password: Cookies.get("Password"),
      }),
    };
    fetch(
      "https://vietcpq.name.vn/U2FsdGVkX1+ibKkbj+HGKjeepxUwFVviPP1AkhuyHto=/user/user",
      requestOptions
    ).then((response) => {
      if (response.status === 200) {
        Cookies.set("Name", name, { expires: 1 });
        nav("/");
      }
    });
  };
  const nav = useNavigate();
  return (
    <div>
      <div className="subheadContainer">
        <div className="subheadMainSize">
          <i className="fa-solid fa-house" onClick={() => nav("/")}></i>
          <i className="fa-solid fa-angle-right"></i>
          <a
            href="/#section1Home"
            onClick={() => nav("/#section1Home")}
            className="phimchieusubhead"
          >
            <b>Thành Viên</b>
          </a>
          <i className="fa-solid fa-angle-right"></i>
          <span style={{ color: "#737373", fontSize: "15px" }}>Cá Nhân</span>
        </div>
      </div>
      <div className="userEditContainer">
        {" "}
        <div className="userEditMainSize">
          <div className="LefthandUserEdit">
            {" "}
            <div style={{ display: "flex" }}>
              {" "}
              <h2
                className={`userInfotitle ${bool && "activeUserInfo"} `}
                onClick={() => setBool(true)}
              >
                THÔNG TIN CÁ NHÂN
              </h2>
              <h2 style={{ marginLeft: "10px", marginRight: "10px" }}>/</h2>
              <h2
                className={`changePasswordtitle ${!bool && "activeUserInfo"} `}
                onClick={() => setBool(false)}
              >
                ĐỔI MẬT KHẨU
              </h2>
            </div>
            {bool === true ? (
              <>
                <p>Họ và tên</p>
                <input
                  onChange={(event) => setName(event.target.value)}
                  className="fullname"
                  defaultValue={Cookies.get("Name")}
                />
                <div
                  style={{
                    display: "flex",
                    marginTop: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p>Ngày sinh</p>
                    <input className="birthday" defaultValue={"25/12/2000"} />
                  </div>
                  <div>
                    <p>Giới tính</p>
                    <input className="gender" disabled={true} value={"Nam"} />
                  </div>
                </div>
                <p style={{ marginTop: "20px" }}>Địa chỉ</p>
                <input
                  className="address"
                  defaultValue={
                    "Verosa Park Khang Điền, đường Liên Phường, phường Phú Hữu TP. Thủ Đức"
                  }
                />
                <p>Email</p>
                <input
                  className="usernameedit"
                  value={Cookies.get("Email")}
                  disabled={true}
                />
                <button className="buttonSaveEdit" onClick={handleOnClickSave}>
                  LƯU LẠI
                </button>
              </>
            ) : (
              <>
                <p>Mật khẩu hiện tại </p>
                <></>
                <input
                  className="currentPass"
                  onChange={(event) => setcurrentPass(event.target.value)}
                />
                <></>
                <p>Mật khẩu mới: </p>
                <input
                  className="NewPass"
                  onChange={(event) => setnewPass(event.target.value)}
                />
                <p>Xác nhận lại mật khẩu mới </p>
                <input
                  className="NewPass"
                  onChange={(event) => setnewcheckedPass(event.target.value)}
                />
                {errorCheckedPass && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    Mật khẩu xác nhận không khớp{" "}
                  </p>
                )}
                <button
                  className="buttonSaveEdit"
                  onClick={handleOnClickSaveChangePass}
                >
                  LƯU LẠI
                </button>
              </>
            )}
          </div>
          <div className="RighthandUserEdit"></div>
        </div>
      </div>
    </div>
  );
}
