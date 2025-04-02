export const BASE_URL = "http://localhost:3000";
export const API_BASE_URL = `${BASE_URL}/api`;

export const API_ENDPOINTS = {
    HOME: {
        GET_HOME: `${API_BASE_URL}/home/getHome`,
    },
    SERVICE: {
        GET_SERVICE: `${API_BASE_URL}/service/getService`,
    },
    BUSINESSTAX: {
        GET_BUSINESSTAX: `${API_BASE_URL}/business-tax/getBusinessTax`,
    },
    ONLINETAX: {
        GET_ONLINETAX: `${API_BASE_URL}/online-tax-return/getOnlineTaxReturn`,
    },
    CONTACTUS: {
        GET_CONTACTUS: `${API_BASE_URL}/contact-us/getContactUs`,
    },
    ABOUTUS: {
        GET_ABOUTUS: `${API_BASE_URL}/about-us/getAboutUs`,
    },
    TEMRS: {
        GET_TEMRS: `${API_BASE_URL}/terms-conditions/getTermsConditions`,
    },
    PRIVACYPOLICY: {
        GET_PRIVACYPOLICY: `${API_BASE_URL}/privacy-policy/getPrivacyPolicy`,
    },
    REFUNDPOLICY: {
        GET_REFUNDPOLICY: `${API_BASE_URL}/refund-policy/getRefundPolicy`,
    },
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        SIGNUP: `${API_BASE_URL}/auth/signup`,
    },
} as const;