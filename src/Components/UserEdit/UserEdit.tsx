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
            <b>Th??nh Vi??n</b>
          </a>
          <i className="fa-solid fa-angle-right"></i>
          <span style={{ color: "#737373", fontSize: "15px" }}>C?? Nh??n</span>
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
                TH??NG TIN C?? NH??N
              </h2>
              <h2 style={{ marginLeft: "10px", marginRight: "10px" }}>/</h2>
              <h2
                className={`changePasswordtitle ${!bool && "activeUserInfo"} `}
                onClick={() => setBool(false)}
              >
                ?????I M???T KH???U
              </h2>
            </div>
            {bool === true ? (
              <>
                <p>H??? v?? t??n</p>
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
                    <p>Ng??y sinh</p>
                    <input className="birthday" defaultValue={"25/12/2000"} />
                  </div>
                  <div>
                    <p>Gi???i t??nh</p>
                    <input className="gender" disabled={true} value={"Nam"} />
                  </div>
                </div>
                <p style={{ marginTop: "20px" }}>?????a ch???</p>
                <input
                  className="address"
                  defaultValue={
                    "Verosa Park Khang ??i???n, ???????ng Li??n Ph?????ng, ph?????ng Ph?? H???u TP. Th??? ?????c"
                  }
                />
                <p>Email</p>
                <input
                  className="usernameedit"
                  value={Cookies.get("Email")}
                  disabled={true}
                />
                <button className="buttonSaveEdit" onClick={handleOnClickSave}>
                  L??U L???I
                </button>
              </>
            ) : (
              <>
                <p>M???t kh???u hi???n t???i </p>
                <></>
                <input
                  className="currentPass"
                  onChange={(event) => setcurrentPass(event.target.value)}
                />
                <></>
                <p>M???t kh???u m???i: </p>
                <input
                  className="NewPass"
                  onChange={(event) => setnewPass(event.target.value)}
                />
                <p>X??c nh???n l???i m???t kh???u m???i </p>
                <input
                  className="NewPass"
                  onChange={(event) => setnewcheckedPass(event.target.value)}
                />
                {errorCheckedPass && (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    M???t kh???u x??c nh???n kh??ng kh???p{" "}
                  </p>
                )}
                <button
                  className="buttonSaveEdit"
                  onClick={handleOnClickSaveChangePass}
                >
                  L??U L???I
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
