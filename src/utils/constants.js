export const ROUTES = {
    HOME: '/',
    TRUTH: '/truth',
    WHY_IT_MATTERS: '/why-it-matters',
    TAKE_ACTION: '/take-action',
    RESOURCES: '/resources',
    ABOUT: '/about',
    CONTACT: '/contact'
};

export const LANGUAGES = {
    FA: 'fa',
    EN: 'en',
    AR: 'ar'
};

export const SOCIAL_LINKS = {
    TELEGRAM: 'https://t.me/your_channel',
    TWITTER: 'https://twitter.com/your_account',
    INSTAGRAM: 'https://instagram.com/your_account'
};

export const API_ENDPOINTS = {
    BASE_URL: process.env.REACT_APP_API_BASE_URL,
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        LOGOUT: '/auth/logout'
    },
    CONTENT: {
        ARTICLES: '/articles',
        CAMPAIGNS: '/campaigns',
        RESOURCES: '/resources'
    }
};

export const ERROR_MESSAGES = {
    REQUIRED_FIELD: 'این فیلد الزامی است',
    INVALID_EMAIL: 'ایمیل وارد شده معتبر نیست',
    INVALID_PASSWORD: 'رمز عبور باید حداقل ۸ کاراکتر باشد',
    SERVER_ERROR: 'خطا در ارتباط با سرور',
    NETWORK_ERROR: 'خطا در اتصال به اینترنت'
};

export const SUCCESS_MESSAGES = {
    REGISTRATION_SUCCESS: 'ثبت نام با موفقیت انجام شد',
    LOGIN_SUCCESS: 'ورود با موفقیت انجام شد',
    SUBMISSION_SUCCESS: 'اطلاعات با موفقیت ثبت شد'
};

export const BREAKPOINTS = {
    xs: 320,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
}; 