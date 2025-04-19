import React from 'react';
import './WhyItMatters.css';

const WhyItMatters = () => {
    return (
        <div className="why-it-matters-page">
            <div className="hero-section">
                <h1>چرا این به ما مربوط است؟</h1>
                <p>صدای ما، آینده ما</p>
            </div>

            <div className="container">
                <section className="impact-section">
                    <h2>تأثیر بی‌عدالتی جهانی</h2>
                    <div className="impact-grid">
                        <div className="impact-card">
                            <h3>صلح جهانی</h3>
                            <p>چگونه بی‌عدالتی در یک نقطه از جهان، امنیت همه را تهدید می‌کند</p>
                        </div>
                        <div className="impact-card">
                            <h3>حقوق انسانی</h3>
                            <p>ارتباط مستقیم بین عدالت جهانی و حقوق اساسی انسان‌ها</p>
                        </div>
                        <div className="impact-card">
                            <h3>آینده مشترک</h3>
                            <p>چرا سرنوشت همه ما به هم گره خورده است</p>
                        </div>
                    </div>
                </section>

                <section className="stories-section">
                    <h2>داستان‌های دانش‌آموزان جهان</h2>
                    <div className="stories-grid">
                        {/* Stories will be dynamically loaded here */}
                    </div>
                </section>

                <section className="values-section">
                    <h2>ارزش‌های مشترک انسانی</h2>
                    <div className="values-content">
                        <div className="value-item">
                            <h3>عدالت</h3>
                            <p>حق همه انسان‌ها برای زندگی در جهانی عادلانه</p>
                        </div>
                        <div className="value-item">
                            <h3>آزادی</h3>
                            <p>اهمیت آزادی و استقلال برای همه ملت‌ها</p>
                        </div>
                        <div className="value-item">
                            <h3>همدردی</h3>
                            <p>درک متقابل و حمایت از یکدیگر</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default WhyItMatters; 