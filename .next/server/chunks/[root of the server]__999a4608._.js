module.exports = {

"[project]/.next-internal/server/app/api/contact/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/api.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_BASE_URL": (()=>API_BASE_URL),
    "API_ENDPOINTS": (()=>API_ENDPOINTS),
    "BASE_URL": (()=>BASE_URL)
});
const BASE_URL = "http://localhost:3000";
const API_BASE_URL = `${BASE_URL}/api`;
const API_ENDPOINTS = {
    HOME: {
        GET_HOME: `${API_BASE_URL}/home/getHome`
    },
    SERVICE: {
        GET_SERVICE: `${API_BASE_URL}/service/getService`
    },
    BUSINESSTAX: {
        GET_BUSINESSTAX: `${API_BASE_URL}/business-tax/getBusinessTax`
    },
    ONLINETAX: {
        GET_ONLINETAX: `${API_BASE_URL}/online-tax-return/getOnlineTaxReturn`
    },
    CONTACTUS: {
        GET_CONTACTUS: `${API_BASE_URL}/contact-us/getContactUs`
    },
    CONTACTFORM: {
        SUBMIT_CONTACTFORM: `${API_BASE_URL}/contact-form/submit`
    },
    ABOUTUS: {
        GET_ABOUTUS: `${API_BASE_URL}/about-us/getAboutUs`
    },
    TEMRS: {
        GET_TEMRS: `${API_BASE_URL}/terms-conditions/getTermsConditions`
    },
    PRIVACYPOLICY: {
        GET_PRIVACYPOLICY: `${API_BASE_URL}/privacy-policy/getPrivacyPolicy`
    },
    REFUNDPOLICY: {
        GET_REFUNDPOLICY: `${API_BASE_URL}/refund-policy/getRefundPolicy`
    },
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        SIGNUP: `${API_BASE_URL}/auth/signup`
    }
};
}}),
"[project]/src/app/api/contact/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/api.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, subject, message } = body;
        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !subject || !message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "All fields are required."
            }, {
                status: 400
            });
        }
        // Prepare the data to match your backend API expectations
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            subject,
            message
        };
        // Simulate email sending or saving to a database
        console.log("formData :", formData);
        // Submit to your backend API
        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].CONTACTFORM.SUBMIT_CONTACTFORM, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to submit contact form');
        }
        const data = await response.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: data.message || "Form submitted successfully!"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("❌ Error processing form submission:", error); // ✅ Fix: Log the error
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Internal server error."
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__999a4608._.js.map