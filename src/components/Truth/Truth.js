import React from 'react';
import './Truth.css';

const Truth = () => {
    return (
        <div className="truth-page">
            <div className="hero-section">
                <h1>شناخت حقیقت</h1>
            </div>

            <div className="container">
                <section className="truth-section">
                    <h2>استکبار یعنی چه؟</h2>
                    <div className="content">
                        <p>استکبار به معنای خودبزرگ‌بینی و سلطه‌جویی است که در سیاست جهانی نمود پیدا می‌کند...</p>
                        {/* محتوای بیشتر */}
                    </div>
                </section>

                <section className="truth-section">
                    <h2>پرونده فلسطین: زخمی که ادامه دارد</h2>
                    <div className="timeline">
                        {/* تایم‌لاین تاریخی */}
                    </div>
                    <div className="current-situation">
                        <h3>وضعیت امروز</h3>
                        {/* محتوای مربوط به وضعیت فعلی */}
                    </div>
                </section>

                <section className="truth-section">
                    <h2>ردپای استکبار در جهان</h2>
                    <div className="case-studies">
                        {/* مطالعات موردی */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Truth; 