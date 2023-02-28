import './PromotionHeader.scss'
import { useNavigate } from 'react-router-dom'
import FilmReInheri from '../CompoInheri/FilmReInheri/FilmReInheri'

export default function PromotionHeader() {

    const nav = useNavigate();

  return (
    <div className='PromotionHeader'>
        <div className="mainSize">
            <div className="PromotionContainer">
                <h2>KHUYẾN MÃI MỚI</h2>
                <div className='PromoCont'>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/d/o/doc.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a onClick={() => nav('/PromoItem')} href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/2019/1/4/300-x-450_1546584007533.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a onClick={() => nav('/PromoItem')} href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/3/0/300x450_43.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a onClick={() => nav('/PromoItem')} href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/3/0/300x450_132.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a onClick={() => nav('/PromoItem')} href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/3/0/300_25.jpg)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a onClick={() => nav('/PromoItem')} href="#">Chi Tiết</a>
                        </div>
                    </div>
                    <div className='PromoItem' style={{background: 'url(https://cdn.galaxycine.vn/media/2/0/200_12.jpg  )', backgroundPosition: 'center', backgroundSize: 'contain'}}>
                        <div className='ItemInfo'>
                            <a onClick={() => nav('/PromoItem')} href="#">Chi Tiết</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='FilmRecomment'>
                <FilmReInheri />
            </div>
        </div>
    </div>
  )
}