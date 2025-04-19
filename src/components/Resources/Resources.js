import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div className="resources-page">
            <div className="hero-section">
                <h1>منابع</h1>
                <p>مجموعه‌ای از منابع معتبر برای مطالعه بیشتر</p>
            </div>

            <div className="container">
                <section className="resource-section">
                    <h2>سازمان‌های حقوق بشری</h2>
                    <div className="resources-grid">
                        {/* Organizations list */}
                    </div>
                </section>

                <section className="resource-section">
                    <h2>اسناد و گزارش‌ها</h2>
                    <div className="documents-list">
                        {/* Documents list */}
                    </div>
                </section>

                <section className="resource-section">
                    <h2>کتابخانه رسانه‌ای</h2>
                    <div className="media-library">
                        <div className="media-category">
                            <h3>کتاب‌ها</h3>
                            {/* Books list */}
                        </div>
                        <div className="media-category">
                            <h3>مستندها</h3>
                            {/* Documentaries list */}
                        </div>
                        <div className="media-category">
                            <h3>مقالات</h3>
                            {/* Articles list */}
                        </div>
                    </div>
                </section>

                <section className="resource-section">
                    <h2>واژه‌نامه</h2>
                    <div className="glossary">
                        {/* Glossary terms */}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Resources; 