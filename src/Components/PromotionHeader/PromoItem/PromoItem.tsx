import FilmReInheri from '../../CompoInheri/FilmReInheri/FilmReInheri'
import './PromoItem.scss'

export default function PromoItem() {
  return (
    <div className='PromoItem'>
      <div className="mainSize">
        <div className='PromotionContainer'>
          <h1>Xúc Xắc Xúc Xẻ - Tới Rạp Nhận Quà</h1>
          <div className='content'>
            <p>Tung xúc xắc nhận quà xịn xuất sắc!</p>
            <i>“Tháng Giêng ăn Tết ở nhà, Tháng Hi rỗi rãi Xi-nê rinh quà!”</i>
            <p>Biết ông Ga không? Ngay Galaxy Cinema có chỗ vừa ăn vừa chơi vừa xem phim hả hê luôn kìa. Chơi xong bê luôn quà về nhà, đã dữ chưa!</p>
            <p>Khởi động lực cổ tay để cùng “người thương” gieo xúc xắc tại Galaxy và rinh thưởng, hoặc biết đâu nhờ xúc xắc mà vô tình lại gieo được quẻ nhân duyên tốt đẹp ngày Lễ Tình Nhân.</p>
            <p>Rồi đó! Lẹ lẹ đến ngay Galaxy gần nhất để lắc xí ngầu may mắn liền đi nào!</p>
          </div>
          <div className='ImgContent'>
            <img src="https://www.galaxycine.vn/media/2023/2/6/1135x660-100_1675669804733.jpg" alt="Hoàng Anh Vũ" />
          </div>
          <div className='contentItem'>
            <h3>Thời gian:</h3>
            <ul>
              <li>09.02.2023 - 25.02.2023</li>
            </ul>
          </div>
          <div className='contentItem'>
            <h3>Thể lệ:</h3>
            <ul>
              <li>Khách hàng mua vé xem phim bất kỳ + Combo 2 Big Extra trở lên: nhận 01 lượt tung xúc xắc trúng thưởng.</li>
              <li>Mỗi giao dịch tượng trưng với 01 lượt tung. Khách hàng có bao nhiêu lượt giao dịch Combo 2 Big Extra trở lên sẽ tương ứng với bấy nhiêu lần tung xúc xắc.</li>
            </ul>
            <i>*Combo 2 trở lên bao gồm: Combo 2 Big Extra/ Family Combo 1 Big/ Family Combo 2 Big.</i>
          </div>
          <div className='contentItem'>
            <h3>Điều kiện:</h3>
            <ul>
              <li>Áp dụng cho tất cả khách hàng tại các hệ thống rạp Galaxy trên toàn quốc.</li>
              <li>Áp dụng cho giao dịch trực tiếp tại quầy và thanh toán online.</li>
              <li>Khách hàng cung cấp vé + hóa đơn bắp nước tại quầy để nhận quà.</li>
              <li>Đối với các giải thưởng đặc biệt, phương thức nhận quà sẽ được in trên phiếu.</li>
              <li>Chương trình có thể kết thúc sớm nếu số lượng quà tặng được phát hết.</li>
              <li>Trong mọi trường hợp, quyết định của Galaxy Cinema là quyết định cuối cùng.</li>
            </ul>
          </div>


        </div>





        <div className='FilmRecomment'>
          <FilmReInheri />
        </div>
      </div>
    </div>
  )
}