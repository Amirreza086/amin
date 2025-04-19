import React, { useState } from 'react';
import './TakeAction.css';

const TakeAction = () => {
    const [activeTab, setActiveTab] = useState('awareness');

    return (
        <div className="take-action-page">
            <div className="hero-section">
                <h1>اقدام کنیم!</h1>
                <p>هر تغییر کوچک، گامی به سوی عدالت است</p>
            </div>

            <div className="container">
                <div className="action-tabs">
                    <button 
                        className={`tab-button ${activeTab === 'awareness' ? 'active' : ''}`}
                        onClick={() => setActiveTab('awareness')}
                    >
                        آگاهی‌بخشی
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'network' ? 'active' : ''}`}
                        onClick={() => setActiveTab('network')}
                    >
                        شبکه‌سازی
                    </button>
                    <button 
                        className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
                        onClick={() => setActiveTab('support')}
                    >
                        حمایت و همبستگی
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'awareness' && (
                        <div className="awareness-content">
                            <h2>مواد آموزشی قابل اشتراک</h2>
                            <div className="shareable-content">
                                {/* Shareable content items */}
                            </div>
                            <h2>راهنمای گفتگو</h2>
                            <div className="discussion-guide">
                                {/* Discussion guide content */}
                            </div>
                        </div>
                    )}

                    {activeTab === 'network' && (
                        <div className="network-content">
                            <h2>انجمن گفتگو</h2>
                            <div className="forum-preview">
                                {/* Forum preview */}
                            </div>
                            <h2>رویدادهای آینده</h2>
                            <div className="events-list">
                                {/* Events list */}
                            </div>
                        </div>
                    )}

                    {activeTab === 'support' && (
                        <div className="support-content">
                            <h2>کمپین‌های فعال</h2>
                            <div className="campaigns-grid">
                                {/* Active campaigns */}
                            </div>
                            <h2>راه‌های حمایت</h2>
                            <div className="support-methods">
                                {/* Support methods */}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TakeAction; 