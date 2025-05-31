import React from 'react';
import logo from '../../images/iteration-1-images/logo.svg'
import './Header.css';

export default function Header({onBack}) {
    return (
      <header className="header">
         <img src={logo} alt="Teknolojik Yemekler Logo" className="site-logo" />
         <div className="site-breadcrumb">
            <span className="breadcrumb-item" onClick={onBack}>Anasayfa</span>
            <span className="breadcrumb-separator">–</span>
            <span className="breadcrumb-item active">Sipariş Oluştur</span>
        </div>
        </header>
    )
}