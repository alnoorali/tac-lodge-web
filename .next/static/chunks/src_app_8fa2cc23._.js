(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_8fa2cc23._.js", {

"[project]/src/app/api/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/termsandconditions/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TermsAndConditions = ()=>{
    _s();
    const [termsData, setTermsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TermsAndConditions.useEffect": ()=>{
            const fetchData = {
                "TermsAndConditions.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].TEMRS.GET_TEMRS);
                        const data = await response.json();
                        setTermsData(data);
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    }
                }
            }["TermsAndConditions.useEffect.fetchData"];
            fetchData();
        }
    }["TermsAndConditions.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4 md:p-8 2xl:p-16 mt-28 pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 2xl:p-16 mt-20 md:mt-0 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-4xl 2xl:text-6xl text-center md:text-left font-bold mb-4 text-gray-800 md:mt-6 ",
                    children: "Terms and Conditions"
                }, void 0, false, {
                    fileName: "[project]/src/app/termsandconditions/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                termsData.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-700 text-sm md:text-base 2xl:text-lg leading-relaxed mt-6",
                    dangerouslySetInnerHTML: {
                        __html: termsData.content
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/termsandconditions/page.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/termsandconditions/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/termsandconditions/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_s(TermsAndConditions, "Ic2ak0oGyuiQMNbDCuYzdFiI+3Y=");
_c = TermsAndConditions;
const __TURBOPACK__default__export__ = TermsAndConditions;
var _c;
__turbopack_context__.k.register(_c, "TermsAndConditions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_8fa2cc23._.js.map