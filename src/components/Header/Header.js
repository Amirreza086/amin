import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/" className="logo">
                        صدای نسل آینده
                    </Link>
                    
                    <button 
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><Link to="/">صفحه اصلی</Link></li>
                            <li><Link to="/truth">شناخت حقیقت</Link></li>
                            <li><Link to="/why-it-matters">چرا مهم است؟</Link></li>
                            <li><Link to="/take-action">اقدام کنیم!</Link></li>
                            <li><Link to="/resources">منابع</Link></li>
                            <li><Link to="/about">درباره ما</Link></li>
                            <li><Link to="/contact">تماس با ما</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header; 