// Google Analytics integration
export const initGA = (trackingId) => {
    if (typeof window.gtag === 'undefined') {
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
            window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', trackingId);
    }
};

// Track page views
export const trackPageView = (path) => {
    if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_TRACKING_ID, {
            page_path: path
        });
    }
};

// Track events
export const trackEvent = (category, action, label = null, value = null) => {
    if (window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value
        });
    }
};

// Track user engagement
export const trackEngagement = {
    articleRead: (articleId, title) => {
        trackEvent('Article', 'read', title, articleId);
    },
    campaignJoin: (campaignId, name) => {
        trackEvent('Campaign', 'join', name, campaignId);
    },
    resourceDownload: (resourceId, name) => {
        trackEvent('Resource', 'download', name, resourceId);
    },
    shareContent: (contentType, contentId) => {
        trackEvent('Share', contentType, contentId);
    }
}; 