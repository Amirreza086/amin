import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const apiService = {
    // Auth endpoints
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    
    // Content endpoints
    getArticles: () => api.get('/articles'),
    getArticle: (id) => api.get(`/articles/${id}`),
    
    // Campaign endpoints
    getCampaigns: () => api.get('/campaigns'),
    joinCampaign: (campaignId) => api.post(`/campaigns/${campaignId}/join`),
    
    // Resources endpoints
    getResources: () => api.get('/resources'),
    
    // User actions
    submitStory: (story) => api.post('/stories', story),
    submitFeedback: (feedback) => api.post('/feedback', feedback)
};

export default api; 