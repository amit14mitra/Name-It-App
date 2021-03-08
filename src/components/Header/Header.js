import React from 'react'
import './Header.css'
const Header=({headerText, headerExpanded})=>{
    return (
        <div className='head-container'>
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
            className={`head-img ${headerExpanded?
            'head-img-expanded':'head-img-contracted'}`} 
            alt='headImage'/>
            <h2 className={`head-text ${headerExpanded?
            'head-text-expanded':'head-text-contracted'}`}>{headerText}</h2>
        </div>
    )
}

export default Header