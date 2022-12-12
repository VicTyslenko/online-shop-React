import React from 'react'
import './Sidebar.scss'
// import Logo from '../img/logo_sidebar';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="logo">
                {/* <img src={Logo} alt="" /> */}
                <h2 className="logo-title">Shops</h2>
            </div>
        </div>
    )
}

export default Sidebar