module.exports = {

"[project]/src/app/api/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/app/refund-policy/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/api.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const RefundPolicy = ()=>{
    const [refundPolicyData, setRefundPolicyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].REFUNDPOLICY.GET_REFUNDPOLICY);
                const data = await response.json();
                setRefundPolicyData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-4 md:p-8 2xl:p-16 mt-28 pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-12 2xl:p-16 mt-20 md:mt-0 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl md:text-4xl 2xl:text-6xl font-bold mb-6 text-center md:text-left text-gray-800",
                    children: "Refund Policy"
                }, void 0, false, {
                    fileName: "[project]/src/app/refund-policy/page.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-8",
                    children: refundPolicyData.content && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-700",
                        dangerouslySetInnerHTML: {
                            __html: refundPolicyData.content
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/refund-policy/page.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/refund-policy/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/refund-policy/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/refund-policy/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = RefundPolicy;
}}),

};

//# sourceMappingURL=src_app_a15188b1._.js.map