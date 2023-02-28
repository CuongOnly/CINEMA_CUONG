import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import eBlog from "../Model/eBlog";
import eFilm from "../Model/eFilm";
import eListBlogs from "../Model/eListBlogs";
import eListBlogTopView from "../Model/eListBlogTopView";
import "./BlogFilm.scss";
import { useNavigate } from "react-router-dom";
import PopupBlog from "./PopupBlog/PopupBlog";

function BlogFilm(props: any) {
  const [blogData, setBlogData] = useState<Array<eBlog>>([]);
  const [listBlogs, setListBlogs] = useState<Array<eListBlogs>>([]);
  const [listBlogTopView, setListBlogTopView] = useState<
    Array<eListBlogTopView>
  >([]);
  const [popupBlog, setPopupBlog] = useState<Boolean>(false);

  const [lsFilm, setLsFilm] = useState<Array<eFilm>>([]);

  useEffect(() => {
    setLsFilm(props.CurrentFilmState.lsCurFilm);
  }, [props]);

  const nav = useNavigate();
  const HandleClick = (id: string) => {
    nav("/Film/" + id);
  };

  // Handle Xem Thêm
  const [tmp, setTmp] = useState<number>(1);
  let a = 0,
    b = 0;
  // a là số lượng render ra mỗi lần nhấn Xem thêm, phần dư còn lại render lần cuối

  const assignVar = () => {
    a = Math.floor(listBlogs.length / 3);
    b = listBlogs.length - 3 * Math.floor(listBlogs.length / 3);
    return false;
  };

  useEffect(() => {
    fetch(
      "https://mocki.io/v1/9f78daae-b0b3-4e80-90e0-ff3472bbb055?fbclid=IwAR0P010WN0LeqCPU8cHHTXH3GadDuW3vt6cj_wH8XNT_ICc3TVWsZ_WcaDI"
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data.pageProps.dataBlog.Data.ListBlogFeatured.Items);
        setListBlogs(data.pageProps.dataBlog.Data.ListBlogs.Items);
        setListBlogTopView(data.pageProps.dataBlog.Data.ListBlogTopView.Items);
      });
  }, []);

  return (
    <div className="BlogFilm">
      <div className="mainSize">
        <div className="titleContainer">
          <h1>Blog Điện Ảnh</h1>
          <p>
            Theo dõi các bộ sưu tập bao gồm Review phim - Top phim hay của Ví
            MoMo luôn được cập nhật tại đây!
          </p>
        </div>

        <div className="ListBlogFeatured">
          <div className="top">
            {blogData?.map((item, index) => {
              return (
                index <= 1 && (
                  <div
                    key={index}
                    style={{ backgroundImage: `url(${item.Avatar})` }}
                  >
                    <div className="viewPoint">
                      <span className="viewCont">
                        <i className="fa-sharp fa-solid fa-eye"></i>
                        <span>{item.TotalViewsFormat}</span>
                      </span>
                    </div>
                    <div className="content">
                      <h1>{item.Title}</h1>
                      <p>
                        {item.ShortContent.length > 100
                          ? item.ShortContent.slice(0, 200) + "..."
                          : item.ShortContent}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="bottom">
            {blogData?.map((item, index) => {
              return (
                index >= 1 && (
                  <div
                    key={index}
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: `url(${item.Avatar})`,
                    }}
                  >
                    <div className="viewPointBot">
                      <span className="viewCont">
                        <i className="fa-sharp fa-solid fa-eye"></i>
                        <span>{item.TotalViewsFormat}</span>
                      </span>
                    </div>
                    <div className="content">
                      <h1>{item.Title}</h1>
                      <p>
                        {item.ShortContent.length > 100
                          ? item.ShortContent.slice(0, 200) + "..."
                          : item.ShortContent}
                      </p>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="BodyContent">
          {assignVar()}
          <div className="ListBlogs">
            {listBlogs?.map((item, index) => {
              if (index < (tmp > a ? tmp * 3 + b : tmp * 3)) {
                return (
                  <div className="BlogItem" key={index}>
                    <div>
                      <img src={item.Avatar} alt="Anh Vũ" />
                    </div>
                    <div className="ItemInfo">
                      <h3>{item.CategoryChildName}</h3>
                      <h4 onClick={() => setPopupBlog(true)}>{item.Title}</h4>
                      <span className="viewCont">
                        <i className="fa-sharp fa-solid fa-eye"></i>
                        <span>{item.TotalViewsFormat} lượt xem</span>
                      </span>
                      <p>
                        {item.ShortContent.length > 200
                          ? item.ShortContent.slice(0, 150) + "..."
                          : item.ShortContent}
                      </p>
                    </div>
                  </div>
                );
              }
            })}
            <div className="MoreContainer">
              {tmp <= a && a !== 0 && (
                // <a onClick={() => setTmp(tmp + 1)}>Xem Thêm</a>
                <button onClick={() => setTmp(tmp + 1)} className="btn-donate">
                  Xem Thêm
                </button>
              )}
              {tmp > a && (
                // <a onClick={() => setTmp(1)}>Thu Gọn</a>
                <button onClick={() => setTmp(1)} className="btn-donate">
                  Thu Gọn
                </button>
              )}
            </div>
          </div>

          <div className="ListBlogTopView">
            <h3>Xem nhiều nhất</h3>
            <div className="TopViewContainer">
              {listBlogTopView?.map((n, i) => {
                return (
                  <div key={i} className="TopViewItem">
                    <img src={n.Avatar} alt="Anh Vũ" />
                    <div className="ItemInfo">
                      <h4>{n.CategoryChildName}</h4>
                      <p>{n.Title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="FilmReContainer">
          <div className="FilmReTitle">
            <h1>Top phim hay</h1>
          </div>
          <div className="Film1Container">
            {lsFilm?.map((item, index) => {
              return (
                index <= 4 && (
                  <div
                    key={index}
                    className="FilmReItem"
                    style={{ backgroundImage: `url(${item.imagePortrait})` }}
                  >
                    <div>
                      <h2>
                        <a onClick={() => HandleClick(item.id)} href="#">
                          {item.name}
                        </a>
                      </h2>
                      {/* <a href={`/Film/${item.id}#FilmBanner`}></a> */}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      <div></div>

      {popupBlog && (
        <div onClick={() => setPopupBlog(false)} className="BlackPopup">
          <div
            className="PopupBlogFilm"
            onClick={(Event) => Event.stopPropagation()}
          >
            <h3>BlogFilm</h3>
            <div className="PopupInfoContainer">
              <img
                src="https://static.mservice.io/blogscontents/momo-upload-api-220602101731-637897618513827056.jpg"
                alt=""
              />
              <div className="timeInfo">
                <div>
                  <h4>Review phim</h4>
                  <p>
                    4 phút đọc ·{" "}
                    <span>
                      <i className="fa-sharp fa-solid fa-eye"></i> 13.7k
                    </span>
                  </p>
                </div>
                <div>
                  <span>
                    Chia sẽ <i className="fa-solid fa-share"></i>
                  </span>
                </div>
              </div>

              <div className="Content">
                <div className="mainSizeBlog">
                  <h1>
                    Review Fantastic Beasts: The Secrets of Dumbledore sinh động
                    hóa thế giới phù thủy
                  </h1>
                  <p className="Describe">
                    Trong pha thay người vào phút 90, vai diễn Grindelwald dấy
                    lên sự nghi ngờ từ phía người hâm mộ. Tuy nhiên, phim vẫn
                    ghi điểm nhờ khả năng diễn xuất của nam tài tử gốc Đan Mạch.
                  </p>
                  <p>
                    Harry Potter là tác phẩm nổi tiếng vào những năm đầu thế kỉ
                    21 và loạt phim về chàng phù thủy trẻ tuổi gặt hái nhiều
                    thành công từ doanh thu đến giới phê bình. Kéo theo đó là
                    những dự án ăn theo tác phẩm gốc. Fantastic Beasts and Where
                    to Find Them ra mắt vào năm 2016, phim lấy bối cảnh những sự
                    kiện diễn ra trước khi cốt truyện chính bắt đầu. Phim giới
                    thiệu đến khán giả về hệ sinh thái các loài sinh vật huyền
                    bí trong thế giới phép thuật. Đến năm 2022, phần phim thứ ba
                    ra mắt với nội dung tiếp nối Fantastic Beasts: Crimes of
                    Grindelwald. Trong phim, tên phù thủy hắc ám sử dụng máu
                    loài kỳ lân để khơi mào cuộc chiến tiêu diệt người thường.
                    Thầy Albus Dumbledore (Jude Law) triệu tập Newt Scamander
                    (Eddie Redmayne) cùng những người bạn ra tay ngăn chặn âm
                    mưu của Gellert Grindelwald (Mads Mikkelsen).
                  </p>

                  <div className="ContentInfo">
                    <h3>Mở rộng quy mô thế giới phép thuật</h3>
                    <p>
                      Loạt phim Fantastic Beasts thể hiện thế giới phép thuật
                      một cách trực quan hơn khi đưa ra nhiều khung hình nguy
                      nga, tráng lệ của địa danh nổi tiếng trong giới. Đặc biệt,
                      Fantastic Beasts: Secret of Dumbledore “chiêu đãi” khán
                      giả hình ảnh của Hogwarts, ngôi trường Harry Potter từng
                      theo học, hay Bhutan cổ kính-nơi tổ chức lễ bầu cử người
                      lãnh đạo tất cả phù thủy. Số lượng loài sinh vật được mở
                      rộng quy mô khi phim giới thiệu đến khán giả những kỳ lân,
                      bọ cạp khổng lồ, bọ cánh đỏ,... Mọi loài vật đều mang vai
                      trò, sức nặng riêng ảnh hưởng đến mạch phim.
                    </p>
                    <img
                      src="https://static.mservice.io/blogscontents/momo-upload-api-220602100302-637897609824033957.jpg"
                      alt=""
                    />
                    <p>
                      Cùng với kỹ xảo điện ảnh, phim khắc họa chân thực thế giới
                      phù thủy bao gồm cả hệ sinh thái đa dạng. Bên cạnh đó, các
                      trường đoạn chiến đấu mãn nhãn là điểm cộng lớn của phim.
                      Các nhân vật sử dụng các chiêu thức, quyền pháp kết hợp
                      với đũa phép để chiến đấu nhiều hơn thay vì đứng yên chĩa
                      đũa vào nhau và hô thần chú. Ngoài ra, trường đoạn
                      Dumbledore đấu với Grindelwald trong vùng không gian song
                      song mang lại nhiều cảm xúc cho khán giả. Phân đoạn không
                      chỉ phô diễn những đòn “trút giận” lên đối thủ, mà còn thể
                      hiện mối quan hệ giữa hai người bạn cũ của nhau. Mad
                      Mikkelsen, người thay thế tuyệt vời
                    </p>
                    <img
                      src="https://static.mservice.io/blogscontents/momo-upload-api-220602100308-637897609883919999.jpg"
                      alt=""
                    />
                    <p>
                      Sau khi ra mắt, ngôi sao loạt phim Hannibal chinh phục
                      người hâm mộ Harry Potter nói chung và Fantastic Beasts
                      nói riêng. Grindelwald do tài tử hóa thân gợi nhớ về một
                      Hannibal Lecter máu lạnh, nụ cười nham hiểm. Vì vậy, gã
                      phù thủy do nam diễn viên thủ vai mang một phong cách sang
                      trọng, lịch lãm hơn hẳn phiên bản của Johnny Depp. Mỗi
                      phân cảnh Mad Mikkelsen xuất hiện, đều mang một vẻ bí
                      hiểm, “chết chóc”. Người hâm mộ yên tâm khi kịch bản phim
                      do chính tác giả J.K Rowling thực hiện. Mối quan hệ bí ẩn
                      giữa Dumbledore và Grindelwald luôn trong viễn cảnh tác
                      giả đặt ra. Mặt khác, những người trông chờ vào một cuộc
                      chiến huyền thoại giữa hai phù thủy quyền năng đều thất
                      vọng, khi phim tập trung xây dựng mối quan hệ mờ ám giữa
                      Albus Dumbledore và Gellert Grindelwald nhiều hơn. Nhưng
                      điều này không ảnh hưởng đến trải nghiệm xem phim của
                      người xem đại chúng lẫn khán giả hâm mộ phim. Cốt truyện
                      có cải thiện vượt bậc Nội dung phim là bước tiến so với
                      Fantastic Beasts: Crimes of Grindelwald. Ở phần tiền
                      nhiệm, khán giả “phát ngán” khi phản diện luyên thuyên hết
                      phim, vai trò của tuyến nhân vật chính, sinh vật bị bỏ
                      ngỏ. Trong phần 3, phim khai thác nhiều khía cạnh, văn hóa
                      của thế giới phép thuật, nhằm tránh phát triển nội dung
                      lan man, xoay quanh mâu thuẫn giữa thầy Dumbledore và
                      Grindelwald.
                    </p>
                    <img
                      src="https://static.mservice.io/blogscontents/momo-upload-api-220602100315-637897609955651038.jpg"
                      alt=""
                    />
                    <p>
                      Mặt khác màu phim trau chuốt kỹ lưỡng, giúp các phân đoạn
                      chiến đấu mãn nhãn. Tông màu xanh ngọc bích ảm đạm tôn lên
                      những khoảnh khắc trầm lắng trong phim. Điều này còn giúp
                      phim không chỉ mang tính giải trí, mà còn tính nghệ thuật
                      cao, khi từng khung hình được trau chuốt chỉn chu, tỉ mỉ.
                      Fantastic Beasts: The Secrets of Dumbledore mang nhiều ký
                      ức, hồi tưởng về những phần phim Harry Potter đầu tiên.
                      Phim mang tính giải trí cao, phù hợp với mọi đối tượng
                      khán giả từ người hâm mộ lâu năm, đón chờ những điều mới
                      lạ hay khán giả đại chúng chỉ muốn xem phim giải trí với
                      người thân, bạn bè.Trên đây là những đánh giá, nhận xét về
                      phim Fantastic Beasts: The Secrets of Dumbledore, các bạn
                      hãy mua vé ra rạp và thưởng thức siêu phẩm này nhé!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    CurrentFilmState: state.CurrentFilmState,
  };
};

export default connect(mapStateToProps, null)(BlogFilm);
