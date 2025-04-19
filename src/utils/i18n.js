import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    fa: {
        translation: {
            nav: {
                home: 'صفحه اصلی',
                truth: 'شناخت حقیقت',
                whyItMatters: 'چرا مهم است؟',
                takeAction: 'اقدام کنیم!',
                resources: 'منابع',
                about: 'درباره ما',
                contact: 'تماس با ما'
            },
            // Add more translation keys as needed
        }
    },
    en: {
        translation: {
            nav: {
                home: 'Home',
                truth: 'Understanding Truth',
                whyItMatters: 'Why It Matters',
                takeAction: 'Take Action',
                resources: 'Resources',
                about: 'About Us',
                contact: 'Contact'
            }
            // Add more translation keys as needed
        }
    },
    ar: {
        translation: {
            nav: {
                home: 'الصفحة الرئيسية',
                truth: 'فهم الحقيقة',
                whyItMatters: 'لماذا يهم؟',
                takeAction: 'فلنتحرك',
                resources: 'المصادر',
                about: 'من نحن',
                contact: 'اتصل بنا'
            }
            // Add more translation keys as needed
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fa', // default language
        fallbackLng: 'fa',
        interpolation: {
            escapeValue: false
        },
        direction: {
            fa: 'rtl',
            ar: 'rtl',
            en: 'ltr'
        }
    });

export default i18n; 