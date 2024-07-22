import React from 'react'
import './SemiHero.css'

function SemiHero({ type, imageSource }) {
    return (
        <div className='semi-hero'>
            <img src={imageSource} alt='' />
            <div className='background-layout'></div>
            <div className='header'>
                <h1>{type}</h1>
            </div>
        </div>
    )
}

export default SemiHero