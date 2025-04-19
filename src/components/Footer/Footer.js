import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>درباره ما</h3>
                        <p>صدای نسل آینده، پلتفرمی برای آگاهی‌بخشی و اتحاد دانش‌آموزان جهان</p>
                    </div>
                    
                    <div className="footer-section">
                        <h3>لینک‌های سریع</h3>
                        <ul>
                            <li><Link to="/truth">شناخت حقیقت</Link></li>
                            <li><Link to="/take-action">اقدام کنیم!</Link></li>
                            <li><Link to="/resources">منابع</Link></li>
                            <li><Link to="/contact">تماس با ما</Link></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>تماس با ما</h3>
                        <p>ایمیل: info@example.com</p>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} صدای نسل آینده. تمامی حقوق محفوظ است.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 