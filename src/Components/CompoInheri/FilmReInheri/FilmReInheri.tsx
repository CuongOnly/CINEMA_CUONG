import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import "./FilmReInheri.scss";
import eFilm from "../../Model/eFilm";
import { useNavigate } from "react-router-dom";

function FilmReInheri(props: any) {
  const [lsfilm, setLsFilm] = useState<Array<eFilm>>([]);

  useEffect(() => {
    setLsFilm(props.CurrentFilmState.lsCurFilm);
  }, [props]);

  const nav = useNavigate();
  const HandleClick = (id: string) => {
    nav("/Film/" + id);
  };

  return (
    <div className="FilmReInheri">
      <h3>Phim đang chiếu</h3>
      <div className="FilmReContainer">
        {lsfilm?.map((item, index) => {
          return (
            index <= 3 && (
              <div className="FilmReOver" key={index}>
                <div
                  className="FilmReItem"
                  style={{ backgroundImage: `url(${item.imageLandscape})` }}
                >
                  <div
                    onClick={() => HandleClick(item.id)}
                    className="TitleCon"
                  >
                    <h4>Muốn Gặp Anh</h4>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="More">
        <a onClick={() => nav("/#Homepage1")} hrefLang="/#Homepage1">
          Xem Thêm
        </a>
      </div>
    </div>
  );
}
const mapStateToProps = (state: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
  };
};

export default connect(mapStateToProps, null)(FilmReInheri);
