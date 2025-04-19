import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="container">
                    <h1>صدای نسل آینده: متحد علیه بی‌عدالتی جهانی</h1>
                    <p className="hero-subtitle">
                        برای ساختن دنیایی عادلانه‌تر، صدای خود را متحد کنیم
                    </p>
                    <div className="cta-buttons">
                        <Link to="/truth" className="btn-primary">حقایق را کشف کنید</Link>
                        <Link to="/take-action" className="btn-secondary">به جنبش بپیوندید</Link>
                    </div>
                </div>
            </section>

            <section className="featured-sections">
                <div className="container">
                    <h2 className="section-title">بخش‌های ویژه</h2>
                    <div className="featured-grid">
                        <div className="featured-card">
                            <h3>پرونده فلسطین</h3>
                            <p>آخرین تحولات و حقایق درباره مظلومیت مردم فلسطین</p>
                            <Link to="/truth/palestine">بیشتر بخوانید</Link>
                        </div>
                        <div className="featured-card">
                            <h3>صدای دانش‌آموزان</h3>
                            <p>داستان‌ها و دیدگاه‌های دانش‌آموزان از سراسر جهان</p>
                            <Link to="/why-it-matters">مشاهده دیدگاه‌ها</Link>
                        </div>
                        <div className="featured-card">
                            <h3>اقدام عملی</h3>
                            <p>چگونه می‌توانیم تغییر ایجاد کنیم؟</p>
                            <Link to="/take-action">مشارکت کنید</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="interactive-map">
                <div className="container">
                    <h2 className="section-title">نقشه تعاملی تأثیرات</h2>
                    {/* Interactive map component will be added here */}
                </div>
            </section>
        </div>
    );
}

export default Home; 