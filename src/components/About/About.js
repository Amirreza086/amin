import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <div className="hero-section">
                <h1>درباره ما</h1>
                <p>آشنایی با اهداف و چشم‌انداز ما</p>
            </div>

            <div className="container">
                <section className="mission-section">
                    <h2>مأموریت ما</h2>
                    <p>ایجاد آگاهی و اتحاد میان دانش‌آموزان جهان برای مقابله با بی‌عدالتی و سیاست‌های استکباری</p>
                </section>

                <section className="vision-section">
                    <h2>چشم‌انداز ما</h2>
                    <div className="vision-grid">
                        <div className="vision-card">
                            <h3>آگاهی‌بخشی</h3>
                            <p>گسترش آگاهی درباره مسائل جهانی و حقوق بشر</p>
                        </div>
                        <div className="vision-card">
                            <h3>همبستگی</h3>
                            <p>ایجاد شبکه جهانی دانش‌آموزان آگاه و متعهد</p>
                        </div>
                        <div className="vision-card">
                            <h3>اقدام</h3>
                            <p>حرکت به سوی تغییرات مثبت و پایدار</p>
                        </div>
                    </div>
                </section>

                <section className="principles-section">
                    <h2>اصول ما</h2>
                    <ul className="principles-list">
                        <li>استقلال و عدم وابستگی</li>
                        <li>صلح‌طلبی و نفی خشونت</li>
                        <li>احترام به تنوع فرهنگی</li>
                        <li>تعهد به حقیقت و عدالت</li>
                    </ul>
                </section>

                <section className="team-section">
                    <h2>تیم ما</h2>
                    <div className="team-description">
                        <p>گروهی از دانش‌آموزان و معلمان متعهد به عدالت و آگاهی‌بخشی</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About; 