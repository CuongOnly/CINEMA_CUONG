import React from 'react'
import './TickkerItem.scss'

export default function TickkerItem() {
  return (
    <div className='TickkerItem'>
        <div className='topContainer'>
            <span className='topLeft'></span>
            <span className='topMid'></span>
            <span className='topRight'></span>
            <span className='bottomLeft'></span>
            <span className='bottomRight'></span>

            <div className='Title'>
                <h3>Galaxy Cà Mau</h3>
                <h1>Sword Art Online The Movie...</h1>
            </div>

            <div className='BannerFilm'>
                <img src="https://cdn.galaxycine.vn/media/2023/2/17/antman-3-5_1676600944892.jpg?fbclid=IwAR3eYrRg-A-cITAzgW8a6qFGdjXABqEF_YWNjhOY8vU0PR6db1x2Wt5vIi0" alt="" />
            </div>

            <div className='seatInfo'>
                <div className='screen'>
                    <h5>RẠP</h5>
                    <h4>18</h4>
                </div>
                <div className='row'>
                    <h5>HÀNG</h5>
                    <h4>H</h4>
                </div>
                <div className='seat'>
                    <h5>GHẾ</h5>
                    <h4>24</h4>
                </div>
            </div>

            <div className='seatInfo'>
                <div className='Date'>
                    <h5 className='DateTime'>Ngày</h5>
                    <h4>1/13/17</h4>
                </div>
                <div className='Time'>
                    <h5 className='DateTime'>Giờ</h5>
                    <h4>19:30</h4>
                </div>
            </div>





        </div>
        <div className='botContainer'>
            <img src={require('./core.png')} alt="Hoàng Anh Vũ" />
        </div>
    </div>
  )
}
