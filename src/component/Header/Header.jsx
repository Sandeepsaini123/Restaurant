import React from 'react'
import './Header.css'
import img1 from '../../../public/bgfood.jpg'

const Header = () => {
  return (
    <>
    <div className="header">
        <div className="header-contents">
            <h2>order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest 
                ingredients and culinary expertise.our mission is </p>
                <button>view menu</button>
            {/* <img src={img1} alt="" /> */}
        </div>
    </div>
    
    </>
  )
}

export default Header