import React from 'react'
import './Brands.css'

function Brands() {
    const data = [
        "images/Brands/APA.png",
        "images/Brands/NHIF.png",
        "images/Brands/MetLife.png",
        "images/Brands/Allianz.png"
    ]

    return (
        <div className='brands'>
            <div className="brands-container">
                <div className="content">
                    <h1>Your Health, Our Priority</h1>
                    <p>Covering Your Wellness, Our Reliable Partnerships</p>
                    <p>We proudly accept insurance plans from a range of trusted providers.</p>
                </div>
                <div className="images">
                    <img src={data[0]} alt="" className='resize' />
                    <img src={data[2]} alt="" />
                    <img src={data[3]} alt="" />
                    <img src={data[1]} alt="" className='resize' />
                </div>
            </div>
        </div>
    )
}

export default Brands