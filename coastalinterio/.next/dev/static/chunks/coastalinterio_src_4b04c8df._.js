(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helper to convert image paths to jsDelivr CDN URLs for GitHub repository assets.
 */ __turbopack_context__.s([
    "getCdnUrl",
    ()=>getCdnUrl
]);
function getCdnUrl(path) {
    if (!path) return path;
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return cleanPath;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const NAV_LINKS = [
    "Home",
    "About",
    "Services",
    "Philosophy",
    "Process",
    "Portfolio",
    "Team",
    "Contact"
];
function Navbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 40);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 1000,
            padding: isScrolled ? "0.6rem 2rem" : "1.25rem 2.5rem",
            backgroundColor: isScrolled ? "rgba(20, 19, 18, 0.96)" : "transparent",
            backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
            borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.07)" : "none",
            transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box"
        },
        className: "jsx-f89dfb353173520d" + " " + "navbar-main",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                style: {
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0
                },
                className: "jsx-f89dfb353173520d",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "relative",
                        width: isScrolled ? "68px" : "84px",
                        height: isScrolled ? "68px" : "84px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        flexShrink: 0,
                        transition: "width 0.4s ease, height 0.4s ease",
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.15)"
                    },
                    className: "jsx-f89dfb353173520d",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/nuspacelogo.png"),
                        alt: "Nuspace Creations",
                        fill: true,
                        sizes: "100px",
                        style: {
                            objectFit: "cover",
                            objectPosition: "center"
                        },
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "2.25rem",
                    alignItems: "center"
                },
                className: "jsx-f89dfb353173520d" + " " + "desktop-links",
                children: [
                    NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${link.toLowerCase()}`,
                            style: {
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.72rem",
                                fontWeight: 500,
                                color: "#ffffff",
                                textDecoration: "none",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                opacity: 0.82,
                                transition: "all 0.25s ease"
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.opacity = "1";
                                e.currentTarget.style.color = "#ce3a55";
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.opacity = "0.82";
                                e.currentTarget.style.color = "#ffffff";
                            },
                            className: "jsx-f89dfb353173520d",
                            children: link
                        }, link, false, {
                            fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        style: {
                            padding: "0.7rem 1.4rem",
                            fontSize: "0.72rem",
                            borderRadius: "9999px",
                            letterSpacing: "0.1em",
                            flexShrink: 0
                        },
                        className: "jsx-f89dfb353173520d" + " " + "btn-primary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-f89dfb353173520d",
                                children: "Start Your Project"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                "aria-label": isMenuOpen ? "Close menu" : "Open menu",
                style: {
                    cursor: "pointer",
                    display: "none",
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "50%",
                    width: "44px",
                    height: "44px",
                    padding: 0,
                    zIndex: 1001,
                    transition: "all 0.25s ease"
                },
                className: "jsx-f89dfb353173520d" + " " + "mobile-toggle",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%"
                    },
                    className: "jsx-f89dfb353173520d",
                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 22,
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 145,
                        columnNumber: 35
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 22,
                        color: "#ffffff"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 145,
                        columnNumber: 69
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                    lineNumber: 144,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100dvh",
                    backgroundColor: "#141312",
                    zIndex: 999,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.35rem",
                    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                    overflowY: "auto",
                    padding: "2rem 1.5rem"
                },
                className: "jsx-f89dfb353173520d",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: "80px",
                            height: "80px",
                            borderRadius: "14px",
                            overflow: "hidden",
                            marginBottom: "0.15rem",
                            boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                            border: "1px solid rgba(255,255,255,0.12)"
                        },
                        className: "jsx-f89dfb353173520d",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/nuspacelogo.png"),
                            alt: "Nuspace Creations",
                            fill: true,
                            sizes: "80px",
                            style: {
                                objectFit: "cover"
                            }
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                            lineNumber: 183,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 171,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            textTransform: "uppercase",
                            letterSpacing: "0.32em",
                            fontSize: "0.6rem",
                            color: "#C5A059",
                            fontWeight: 600
                        },
                        className: "jsx-f89dfb353173520d",
                        children: "NUSPACE CREATIONS — BENGALURU"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem"
                        },
                        className: "jsx-f89dfb353173520d",
                        children: NAV_LINKS.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `#${link.toLowerCase()}`,
                                onClick: ()=>setIsMenuOpen(false),
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "1.65rem",
                                    fontWeight: 400,
                                    color: "#FAF8F5",
                                    textDecoration: "none",
                                    letterSpacing: "0.03em",
                                    transition: "color 0.25s ease"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = "#C5A059",
                                onMouseLeave: (e)=>e.currentTarget.style.color = "#FAF8F5",
                                className: "jsx-f89dfb353173520d",
                                children: link
                            }, link, false, {
                                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                                lineNumber: 206,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 204,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        onClick: ()=>setIsMenuOpen(false),
                        style: {
                            marginTop: "0.5rem",
                            padding: "0.85rem 2.2rem",
                            fontSize: "0.78rem"
                        },
                        className: "jsx-f89dfb353173520d" + " " + "btn-primary",
                        children: "Start Your Project"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "0.68rem",
                            color: "rgba(255,255,255,0.4)",
                            letterSpacing: "0.04em",
                            textAlign: "center"
                        },
                        className: "jsx-f89dfb353173520d",
                        children: "+91 98865 27878 · nuspacebangalore@gmail.com"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
                lineNumber: 150,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f89dfb353173520d",
                children: "@media (width<=1024px){.desktop-links.jsx-f89dfb353173520d{display:none!important}.mobile-toggle.jsx-f89dfb353173520d{display:block!important}.navbar-main.jsx-f89dfb353173520d{padding:.6rem 1.25rem!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Navbar.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(Navbar, "PYTXP+Ba4zUSToikH9IFTduq6jI=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// ── 3 Luxury Full-Bleed Background Slides (Ken Burns Zoom) ──
const HERO_SLIDES = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_01.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_03.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/bedroom/bedroom_01.jpeg")
];
// ── Floating thumbnail strip (cleaned up with zero person images) ──
const FLOATING_THUMBS = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_02.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/bedroom/bedroom_02.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/kitchen/kitchen_03.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_01.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/dining/dining_01.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/renovation/renovation_02.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/wardrobe/wardrobe_01.jpeg"),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/commercial/commercial_02.jpeg")
];
function Hero() {
    _s();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const primaryCtaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-advance slides every 6 seconds
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const timer = setInterval({
                "Hero.useEffect.timer": ()=>{
                    setCurrentSlide({
                        "Hero.useEffect.timer": (s)=>(s + 1) % HERO_SLIDES.length
                    }["Hero.useEffect.timer"]);
                }
            }["Hero.useEffect.timer"], 6000);
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Magnetic hover effect for Primary CTA Button
    const handleMouseMove = (e)=>{
        const btn = primaryCtaRef.current;
        if (!btn) return;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0) scale(1.03)`;
    };
    const handleMouseLeave = ()=>{
        const btn = primaryCtaRef.current;
        if (!btn) return;
        btn.style.transform = "translate3d(0, 0, 0) scale(1)";
    };
    // GSAP entrance animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-gold-line", {
                        scaleX: 0,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 0.1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-badge", {
                        y: -25,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 0.3
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-title-text", {
                        y: 45,
                        opacity: 0,
                        duration: 1.5,
                        stagger: 0.12,
                        ease: "power4.out",
                        delay: 0.45
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-subtext", {
                        y: 25,
                        opacity: 0,
                        duration: 1.3,
                        ease: "power3.out",
                        delay: 0.7
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-cta-group", {
                        y: 20,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 0.9
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-stats", {
                        y: 20,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power3.out",
                        delay: 1.1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-thumb", {
                        y: 25,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.06,
                        ease: "power3.out",
                        delay: 1.25
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".hero-scroll-cue", {
                        opacity: 0,
                        y: -10,
                        duration: 1,
                        ease: "power2.out",
                        delay: 1.5
                    });
                }
            }["Hero.useEffect.ctx"], heroRef);
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        ref: heroRef,
        style: {
            position: "relative",
            minHeight: "100vh",
            width: "100%",
            backgroundColor: "#141312",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8rem 1.5rem 6rem"
        },
        className: "jsx-7822f63c25d3f694",
        children: [
            HERO_SLIDES.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        inset: 0,
                        zIndex: 1,
                        opacity: idx === currentSlide ? 1 : 0,
                        transition: "opacity 1.8s ease-in-out"
                    },
                    className: "jsx-7822f63c25d3f694" + " " + `kenburns-slide ${idx === currentSlide ? "active" : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: "Nuspace Creations luxury interior background",
                        fill: true,
                        priority: idx === 0,
                        sizes: "100vw",
                        style: {
                            objectFit: "cover",
                            objectPosition: "center"
                        }
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, src, false, {
                    fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    background: "radial-gradient(ellipse at center, rgba(20,19,18,0.55) 0%, rgba(20,19,18,0.85) 75%, rgba(20,19,18,0.96) 100%)"
                },
                className: "jsx-7822f63c25d3f694"
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1240px",
                    margin: "0 auto",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    zIndex: 10,
                    position: "relative",
                    gap: "1.5rem"
                },
                className: "jsx-7822f63c25d3f694",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "60px",
                            height: "1px",
                            backgroundColor: "#C5A059",
                            boxShadow: "0 0 12px rgba(197, 160, 89, 0.6)",
                            marginBottom: "0.25rem"
                        },
                        className: "jsx-7822f63c25d3f694" + " " + "hero-gold-line"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.6rem",
                            padding: "0.4rem 1.25rem",
                            borderRadius: "9999px",
                            backgroundColor: "rgba(20, 19, 18, 0.8)",
                            border: "1px solid rgba(197, 160, 89, 0.4)",
                            backdropFilter: "blur(12px)",
                            maxWidth: "100%"
                        },
                        className: "jsx-7822f63c25d3f694" + " " + "hero-badge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 12,
                                color: "#C5A059",
                                strokeWidth: 1.5,
                                style: {
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.68rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.22em",
                                    textTransform: "uppercase",
                                    color: "#FAF8F5"
                                },
                                className: "jsx-7822f63c25d3f694" + " " + "hero-badge-text",
                                children: "NUSPACE CREATIONS · EST. 2015 · BENGALURU"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            color: "#ffffff",
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.6rem, 6vw, 5.4rem)",
                            fontWeight: 400,
                            lineHeight: 1.08,
                            letterSpacing: "0.01em",
                            maxWidth: "1050px",
                            margin: 0
                        },
                        className: "jsx-7822f63c25d3f694",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "block"
                                },
                                className: "jsx-7822f63c25d3f694" + " " + "hero-title-text",
                                children: "Spaces Designed for Living."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "block",
                                    fontStyle: "italic",
                                    fontWeight: 300,
                                    color: "rgba(250,248,245,0.9)",
                                    fontSize: "0.85em"
                                },
                                className: "jsx-7822f63c25d3f694" + " " + "hero-title-text",
                                children: "Crafted for Life."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "rgba(250,248,245,0.82)",
                            fontSize: "clamp(0.98rem, 1.8vw, 1.2rem)",
                            fontWeight: 300,
                            maxWidth: "680px",
                            lineHeight: 1.75,
                            margin: "0 auto"
                        },
                        className: "jsx-7822f63c25d3f694" + " " + "hero-subtext",
                        children: "Bespoke residential & commercial interiors crafted with architectural precision, custom woodwork, and timeless material balance across Bengaluru."
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "1.1rem",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "0.5rem"
                        },
                        className: "jsx-7822f63c25d3f694" + " " + "hero-cta-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#portfolio",
                                ref: primaryCtaRef,
                                onMouseMove: handleMouseMove,
                                onMouseLeave: handleMouseLeave,
                                style: {
                                    transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s",
                                    willChange: "transform"
                                },
                                className: "jsx-7822f63c25d3f694" + " " + "btn-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-7822f63c25d3f694",
                                        children: "View Portfolio"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 15,
                                        strokeWidth: 1.5
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "jsx-7822f63c25d3f694" + " " + "btn-outline-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "jsx-7822f63c25d3f694",
                                    children: "Book Consultation"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "2rem",
                            width: "100%",
                            maxWidth: "880px",
                            borderTop: "1px solid rgba(255,255,255,0.12)",
                            borderBottom: "1px solid rgba(255,255,255,0.12)",
                            padding: "0.85rem 0"
                        },
                        className: "jsx-7822f63c25d3f694" + " " + "hero-stats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-7822f63c25d3f694" + " " + "hero-stat-strip",
                            children: [
                                "350+ Projects Delivered",
                                "Est. 2015",
                                "Bengaluru-Based",
                                "End-to-End Execution"
                            ].map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-7822f63c25d3f694" + " " + "hero-stat-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-sans)",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                letterSpacing: "0.18em",
                                                textTransform: "uppercase",
                                                color: "rgba(255, 255, 255, 0.82)"
                                            },
                                            className: "jsx-7822f63c25d3f694",
                                            children: item
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this),
                                        idx < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-7822f63c25d3f694" + " " + "hero-stat-divider"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                            lineNumber: 295,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, item, true, {
                                    fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                    lineNumber: 282,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.6rem",
                            overflowX: "auto",
                            paddingBottom: "0.25rem",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            maxWidth: "100%"
                        },
                        className: "jsx-7822f63c25d3f694",
                        children: FLOATING_THUMBS.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    width: "84px",
                                    height: "56px",
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    flexShrink: 0,
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    transition: "transform 0.3s ease, border-color 0.3s ease",
                                    cursor: "pointer"
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.transform = "scale(1.06)";
                                    e.currentTarget.style.borderColor = "#8B263E";
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                                },
                                onClick: ()=>{
                                    setCurrentSlide(i % HERO_SLIDES.length);
                                },
                                className: "jsx-7822f63c25d3f694" + " " + "hero-thumb",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: src,
                                    alt: "Nuspace interior sample",
                                    fill: true,
                                    sizes: "84px",
                                    style: {
                                        objectFit: "cover"
                                    },
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this)
                            }, i, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: "0.5rem",
                            marginTop: "0.25rem"
                        },
                        className: "jsx-7822f63c25d3f694",
                        children: HERO_SLIDES.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentSlide(i),
                                "aria-label": `Slide ${i + 1}`,
                                style: {
                                    width: i === currentSlide ? "1.6rem" : "0.4rem",
                                    height: "4px",
                                    borderRadius: "9999px",
                                    backgroundColor: i === currentSlide ? "#8B263E" : "rgba(255,255,255,0.35)",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease"
                                },
                                className: "jsx-7822f63c25d3f694"
                            }, i, false, {
                                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                                lineNumber: 355,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#about",
                "aria-label": "Scroll to content",
                style: {
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.3rem",
                    color: "rgba(255, 255, 255, 0.6)",
                    textDecoration: "none",
                    transition: "opacity 0.3s ease"
                },
                className: "jsx-7822f63c25d3f694" + " " + "hero-scroll-cue",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.62rem",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase"
                        },
                        className: "jsx-7822f63c25d3f694",
                        children: "SCROLL"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 16,
                        strokeWidth: 1.5,
                        className: "scroll-chevron-anim"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Hero.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7822f63c25d3f694",
                children: ".kenburns-slide.jsx-7822f63c25d3f694{transition:transform 20s linear,opacity 1.8s ease-in-out;transform:scale(1)}.kenburns-slide.active.jsx-7822f63c25d3f694{transform:scale(1.14)}.hero-stat-strip.jsx-7822f63c25d3f694{flex-wrap:wrap;justify-content:space-around;align-items:center;gap:.75rem;display:flex}.hero-stat-item.jsx-7822f63c25d3f694{align-items:center;gap:1rem;display:flex}.hero-stat-divider.jsx-7822f63c25d3f694{background-color:#8b263e;border-radius:50%;width:4px;height:4px}@keyframes scrollPulse{0%,to{opacity:.5;transform:translateY(0)}50%{opacity:1;transform:translateY(6px)}}.scroll-chevron-anim{animation:2s ease-in-out infinite scrollPulse}@media (width<=640px){.hero-badge.jsx-7822f63c25d3f694{gap:.4rem!important;padding:.35rem .85rem!important}.hero-badge-text.jsx-7822f63c25d3f694{letter-spacing:.12em!important;white-space:nowrap!important;font-size:.58rem!important}.hero-cta-group.jsx-7822f63c25d3f694{flex-direction:column;width:100%}.hero-cta-group.jsx-7822f63c25d3f694 a.jsx-7822f63c25d3f694{justify-content:center;width:100%;max-width:300px}.hero-stat-divider.jsx-7822f63c25d3f694{display:none}.hero-stat-strip.jsx-7822f63c25d3f694{text-align:center;grid-template-columns:1fr 1fr;gap:.6rem .5rem;display:grid}.hero-stat-item.jsx-7822f63c25d3f694{justify-content:center}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Hero.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(Hero, "Rj/SCad4zwOdXcxog97wmgbhbDs=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const stats = [
    {
        label: "FOUNDED",
        value: "2015",
        sub: "10+ Years Experience",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
    },
    {
        label: "DELIVERED",
        value: "350+",
        sub: "Luxury Residences & Studios",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        label: "FLAGSHIP",
        value: "Bengaluru",
        sub: "Indiranagar Practice",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
    },
    {
        label: "EXECUTION",
        value: "End-to-End",
        sub: "Design to Turnkey Handover",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"]
    }
];
const designPillars = [
    {
        id: "01",
        name: "PEOPLE"
    },
    {
        id: "02",
        name: "SPACE"
    },
    {
        id: "03",
        name: "MATERIAL"
    },
    {
        id: "04",
        name: "LIGHT"
    },
    {
        id: "05",
        name: "FUNCTION"
    }
];
function useInView(threshold = 0.08) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function About() {
    _s1();
    const { ref: sectionRef, inView } = useInView(0.08);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: sectionRef,
        style: {
            position: "relative",
            padding: "clamp(4.5rem, 8vw, 9rem) 1.5rem",
            backgroundColor: "#FAF8F5",
            overflow: "hidden"
        },
        className: "jsx-10babf834069fd47",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "45vw",
                    height: "45vw",
                    maxWidth: "600px",
                    maxHeight: "600px",
                    background: "radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, rgba(250, 248, 245, 0) 70%)",
                    pointerEvents: "none"
                },
                className: "jsx-10babf834069fd47"
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/About.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                    gap: "clamp(3rem, 6vw, 5.5rem)",
                    alignItems: "center"
                },
                className: "jsx-10babf834069fd47",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateX(-30px)",
                            transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
                        },
                        className: "jsx-10babf834069fd47",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    aspectRatio: "4 / 4.8",
                                    borderRadius: "1.75rem",
                                    overflow: "hidden",
                                    boxShadow: "0 30px 60px -15px rgba(28, 27, 26, 0.18), 0 0 0 1px rgba(197, 160, 89, 0.25)",
                                    backgroundColor: "#141312"
                                },
                                className: "jsx-10babf834069fd47",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_01.jpeg"),
                                        alt: "Nuspace Creations Interior Design Studio Lounge Bengaluru",
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, 600px",
                                        style: {
                                            objectFit: "cover"
                                        },
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 103,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to top, rgba(20, 19, 18, 0.85) 0%, rgba(20, 19, 18, 0.1) 40%, rgba(0,0,0,0) 100%)"
                                        },
                                        className: "jsx-10babf834069fd47"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "1.25rem",
                                            right: "1.25rem",
                                            backgroundColor: "rgba(20, 19, 18, 0.75)",
                                            backdropFilter: "blur(12px)",
                                            padding: "0.5rem 0.9rem",
                                            borderRadius: "2rem",
                                            border: "1px solid rgba(197, 160, 89, 0.4)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.4rem"
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 13,
                                                color: "#C5A059"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 137,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.68rem",
                                                    fontWeight: 700,
                                                    letterSpacing: "0.14em",
                                                    color: "#FAF8F5",
                                                    textTransform: "uppercase"
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: "EST. 2015"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 138,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            bottom: "1.25rem",
                                            left: "1.25rem",
                                            right: "1.25rem",
                                            backgroundColor: "rgba(20, 19, 18, 0.88)",
                                            backdropFilter: "blur(16px)",
                                            padding: "1.1rem 1.35rem",
                                            borderRadius: "1.25rem",
                                            color: "#ffffff",
                                            border: "1px solid rgba(197, 160, 89, 0.3)",
                                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    marginBottom: "0.35rem"
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "0.68rem",
                                                            letterSpacing: "0.22em",
                                                            textTransform: "uppercase",
                                                            color: "#C5A059",
                                                            fontWeight: 700
                                                        },
                                                        className: "jsx-10babf834069fd47",
                                                        children: "NUSPACE CREATIONS STUDIO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: "0.65rem",
                                                            color: "rgba(255,255,255,0.6)",
                                                            fontWeight: 500
                                                        },
                                                        className: "jsx-10babf834069fd47",
                                                        children: "BENGALURU, INDIA"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 167,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "var(--font-serif)",
                                                    fontSize: "1.15rem",
                                                    fontStyle: "italic",
                                                    fontWeight: 400,
                                                    color: "#FAF8F5"
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: "Craftsmanship & Spatial Architecture"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 175,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 152,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "-1.5rem",
                                    right: "-1rem",
                                    backgroundColor: "#1C1B1A",
                                    color: "#FAF8F5",
                                    padding: "1rem 1.4rem",
                                    borderRadius: "1.25rem",
                                    border: "1px solid rgba(197, 160, 89, 0.4)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.85rem",
                                    zIndex: 2
                                },
                                className: "jsx-10babf834069fd47" + " " + "about-floating-badge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "2.5rem",
                                            height: "2.5rem",
                                            borderRadius: "50%",
                                            backgroundColor: "rgba(139, 38, 62, 0.15)",
                                            border: "1px solid #8B263E",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 18,
                                            color: "#C5A059"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/About.tsx",
                                            lineNumber: 213,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 200,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-10babf834069fd47",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "1.1rem",
                                                    fontWeight: 700,
                                                    fontFamily: "var(--font-serif)",
                                                    color: "#C5A059",
                                                    lineHeight: 1.1
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: "10+ Years"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 216,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: "0.68rem",
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase",
                                                    color: "rgba(255,255,255,0.7)",
                                                    marginTop: "0.15rem"
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: "Architectural Mastery"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 219,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 215,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateY(30px)",
                            transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s"
                        },
                        className: "jsx-10babf834069fd47",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1.25rem"
                                },
                                className: "jsx-10babf834069fd47",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2.5rem",
                                            height: "1px",
                                            backgroundColor: "#C5A059"
                                        },
                                        className: "jsx-10babf834069fd47"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 238,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            color: "#8B263E",
                                            letterSpacing: "0.26em",
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            textTransform: "uppercase"
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: "ABOUT NUSPACE CREATIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 237,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                                    lineHeight: "1.1",
                                    color: "#1C1B1A",
                                    marginBottom: "1.5rem",
                                    fontWeight: 500,
                                    letterSpacing: "-0.01em"
                                },
                                className: "jsx-10babf834069fd47",
                                children: [
                                    "Spaces That ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-10babf834069fd47"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 265,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontStyle: "italic",
                                            color: "#8B263E",
                                            fontWeight: 400
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: "Feel Like You."
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 266,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "clamp(1.02rem, 1.8vw, 1.12rem)",
                                    color: "#1C1B1A",
                                    lineHeight: "1.8",
                                    marginBottom: "1.5rem",
                                    opacity: 0.88,
                                    fontWeight: 400
                                },
                                className: "jsx-10babf834069fd47",
                                children: "Nuspace Creations is a Bengaluru-based boutique interior practice founded in 2015. We craft bespoke residential and commercial environments that seamlessly balance architectural functionality, luxury aesthetics, and client identity."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: "#1C1B1A",
                                    borderRadius: "1.35rem",
                                    padding: "1.5rem 1.6rem",
                                    marginBottom: "2.2rem",
                                    border: "1px solid rgba(197, 160, 89, 0.3)",
                                    boxShadow: "0 15px 35px rgba(28, 27, 26, 0.08)"
                                },
                                className: "jsx-10babf834069fd47",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.14em",
                                            textTransform: "uppercase",
                                            color: "#C5A059",
                                            marginBottom: "0.85rem"
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: "OUR DESIGN JOURNEY COLLABORATION"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 295,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.92rem",
                                            color: "rgba(255, 255, 255, 0.78)",
                                            lineHeight: "1.6",
                                            marginBottom: "1.1rem"
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: "Every space we create is sculpted through a harmony of five foundational pillars:"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 309,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: "0.5rem 0.65rem",
                                            alignItems: "center"
                                        },
                                        className: "jsx-10babf834069fd47",
                                        children: designPillars.map((pillar, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: "0.5rem"
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                                                            border: "1px solid rgba(197, 160, 89, 0.35)",
                                                            padding: "0.45rem 0.85rem",
                                                            borderRadius: "0.75rem",
                                                            display: "inline-flex",
                                                            alignItems: "center",
                                                            gap: "0.4rem",
                                                            transition: "all 0.3s ease"
                                                        },
                                                        className: "jsx-10babf834069fd47" + " " + "pillar-badge",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "0.62rem",
                                                                    color: "#8B263E",
                                                                    fontWeight: 700
                                                                },
                                                                className: "jsx-10babf834069fd47",
                                                                children: pillar.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontSize: "0.74rem",
                                                                    color: "#FAF8F5",
                                                                    fontWeight: 600,
                                                                    letterSpacing: "0.12em"
                                                                },
                                                                className: "jsx-10babf834069fd47",
                                                                children: pillar.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                                lineNumber: 340,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 37
                                                    }, this),
                                                    idx < designPillars.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: "#C5A059",
                                                            fontSize: "0.8rem",
                                                            fontWeight: 600,
                                                            opacity: 0.8
                                                        },
                                                        className: "jsx-10babf834069fd47",
                                                        children: "+"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, pillar.id, true, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 323,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 285,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "repeat(4, 1fr)",
                                    gap: "1rem",
                                    borderTop: "1px solid rgba(28, 27, 26, 0.12)",
                                    paddingTop: "1.75rem"
                                },
                                className: "jsx-10babf834069fd47" + " " + "about-stats-grid",
                                children: stats.map((stat, idx)=>{
                                    const IconComponent = stat.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "0.35rem",
                                            backgroundColor: "#FAF6F0",
                                            padding: "1rem 0.85rem",
                                            borderRadius: "1rem",
                                            border: "1px solid rgba(197, 160, 89, 0.2)",
                                            transition: "transform 0.3s ease, border-color 0.3s ease"
                                        },
                                        className: "jsx-10babf834069fd47" + " " + "about-stat-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "2.35rem",
                                                    height: "2.35rem",
                                                    borderRadius: "0.65rem",
                                                    backgroundColor: "#1C1B1A",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginBottom: "0.25rem"
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                    size: 16,
                                                    color: "#C5A059",
                                                    strokeWidth: 1.75,
                                                    className: "jsx-10babf834069fd47"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 382,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-serif)",
                                                    fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                                                    fontWeight: 600,
                                                    color: "#8B263E",
                                                    lineHeight: 1
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: stat.value
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 396,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-sans)",
                                                    fontSize: "0.64rem",
                                                    fontWeight: 700,
                                                    color: "#1C1B1A",
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    opacity: 0.85
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 407,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.64rem",
                                                    color: "#1C1B1A",
                                                    opacity: 0.6,
                                                    lineHeight: 1.2
                                                },
                                                className: "jsx-10babf834069fd47",
                                                children: stat.sub
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                                lineNumber: 420,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                                        lineNumber: 368,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/About.tsx",
                                lineNumber: 355,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/About.tsx",
                        lineNumber: 227,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/About.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "10babf834069fd47",
                children: ".about-stat-card.jsx-10babf834069fd47:hover{transform:translateY(-4px);border-color:#8b263e66!important}.pillar-badge.jsx-10babf834069fd47:hover{background-color:#8b263e33!important;border-color:#c5a059!important}@media (width<=768px){.about-floating-badge.jsx-10babf834069fd47{margin-top:1.25rem!important;position:relative!important;bottom:auto!important;right:auto!important}.about-stats-grid.jsx-10babf834069fd47{grid-template-columns:repeat(2,1fr)!important;gap:1rem!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/About.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s1(About, "TvtgYSVxh+790Ge8QBklIBrn0wk=", false, function() {
    return [
        useInView
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Services.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/key.js [app-client] (ecmascript) <export default as Key>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const services = [
    {
        id: "residential",
        number: "01",
        title: "Residential & Commercial Design",
        description: "Bespoke, end-to-end interior design and execution for luxury homes, private villas, corporate offices, and boutique commercial environments.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        accent: "#8B263E",
        highlights: [
            "Bespoke Villa Interiors",
            "Corporate Executive Offices",
            "Retail & Hospitality Design"
        ],
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_01.jpeg")
    },
    {
        id: "renovation",
        number: "02",
        title: "Renovation & Remodeling",
        description: "Transform existing spaces with innovative spatial planning, optimized floor layouts, modern architectural aesthetics, and high-end surface finishes.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
        accent: "#6b4f3a",
        highlights: [
            "Structural Layout Overhaul",
            "Modern Facelift & Finishes",
            "Space Optimisation"
        ],
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/renovation/renovation_02.jpeg")
    },
    {
        id: "turnkey",
        number: "03",
        title: "Turnkey Project Management",
        description: "Complete hands-off project management — Concept → Planning → Procurement → Execution → Quality Control → Timely Handover. One team, zero chaos.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$key$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Key$3e$__["Key"],
        accent: "#3a5e6b",
        highlights: [
            "Single Point of Accountability",
            "Transparent BOQ & Costing",
            "On-time Delivery Tracking"
        ],
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/turnkey/turnkey_03.jpeg")
    },
    {
        id: "interior",
        number: "04",
        title: "End-to-End Interior Solutions",
        description: "Comprehensive solutions including space planning, custom furniture manufacturing, modular kitchens, wardrobes, lighting design, and full décor styling.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        accent: "#4a6b3a",
        highlights: [
            "Custom Modular Furniture",
            "Bespoke Teak & Veneer Joinery",
            "Lighting & Styling"
        ],
        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_01.jpeg")
    }
];
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function Services() {
    _s1();
    const { ref: sectionRef, inView } = useInView(0.1);
    const scrollToContact = (e)=>{
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        ref: sectionRef,
        style: {
            position: "relative",
            padding: "clamp(4.5rem, 8vw, 8.5rem) 1.5rem",
            backgroundColor: "#FDFBF7",
            color: "#141312",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,160,89,0.08) 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1350px",
                    margin: "0 auto",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "4rem",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateY(30px)",
                            transition: "opacity 0.8s ease, transform 0.8s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.28em",
                                            textTransform: "uppercase",
                                            color: "#8B263E"
                                        },
                                        children: "WHAT WE DO"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                    color: "#141312",
                                    marginBottom: "1rem",
                                    fontWeight: 500,
                                    lineHeight: 1.15
                                },
                                children: "Interior Solutions, Engineered for Living"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4A4744",
                                    fontSize: "1rem",
                                    maxWidth: "640px",
                                    margin: "0 auto",
                                    lineHeight: 1.7
                                },
                                children: "From initial spatial planning to custom furniture craftsmanship and turnkey site delivery."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 290px), 1fr))",
                            gap: "1.5rem",
                            marginBottom: "3.5rem"
                        },
                        children: services.map((service, idx)=>{
                            const Icon = service.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceCard, {
                                service: service,
                                Icon: Icon,
                                delay: idx * 100,
                                inView: inView,
                                onCardClick: scrollToContact
                            }, service.id, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            opacity: inView ? 1 : 0,
                            transition: "opacity 1s ease 0.6s"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#contact",
                            onClick: scrollToContact,
                            className: "btn-primary",
                            style: {
                                borderRadius: "9999px",
                                padding: "1.05rem 2.5rem",
                                fontSize: "0.85rem",
                                letterSpacing: "0.12em",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.6rem",
                                textDecoration: "none",
                                backgroundColor: "#8B263E",
                                color: "#ffffff",
                                boxShadow: "0 12px 32px rgba(139,38,62,0.28)",
                                transition: "transform 0.3s ease, boxShadow 0.3s ease"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "DISCUSS YOUR PROJECT REQUIREMENTS"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                    size: 18,
                                    strokeWidth: 1.5
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Services.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Services.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s1(Services, "TvtgYSVxh+790Ge8QBklIBrn0wk=", false, function() {
    return [
        useInView
    ];
});
_c = Services;
function ServiceCard({ service, Icon, delay, inView, onCardClick }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#contact",
        onClick: onCardClick,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            position: "relative",
            borderRadius: "1.25rem",
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
            border: hovered ? "1px solid #C5A059" : "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: hovered ? "0 22px 45px -10px rgba(197, 160, 89, 0.22)" : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
            transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(40px)",
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay}ms`,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            minHeight: "440px",
            textDecoration: "none",
            color: "inherit"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${service.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: hovered ? 0.16 : 0.07,
                    transform: hovered ? "scale(1.06)" : "scale(1)",
                    transition: "opacity 0.55s ease, transform 0.55s ease"
                }
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.98) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    padding: "2.25rem 1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "1.25rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "var(--font-serif)",
                                            fontSize: "3.5rem",
                                            fontWeight: 300,
                                            lineHeight: 1,
                                            color: "transparent",
                                            WebkitTextStroke: hovered ? "1.5px #8B263E" : "1.5px #C5A059",
                                            transition: "all 0.3s ease"
                                        },
                                        children: service.number
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "2.75rem",
                                            height: "2.75rem",
                                            borderRadius: "50%",
                                            backgroundColor: "#F7F4EE",
                                            border: "1px solid rgba(0, 0, 0, 0.08)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                                            transition: "transform 0.3s ease, backgroundColor 0.3s ease",
                                            transform: hovered ? "scale(1.08)" : "scale(1)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 20,
                                            strokeWidth: 1.5,
                                            color: "#8B263E"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "1.55rem",
                                    color: "#141312",
                                    marginBottom: "0.9rem",
                                    lineHeight: 1.25,
                                    fontWeight: 500
                                },
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.9rem",
                                    color: "#4A4744",
                                    lineHeight: 1.65,
                                    marginBottom: "1.25rem"
                                },
                                children: service.description
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 343,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "0.4rem",
                                    marginBottom: "1.5rem"
                                },
                                children: service.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.7rem",
                                            color: "#3A3734",
                                            fontWeight: 500,
                                            backgroundColor: "#F7F4EE",
                                            border: "1px solid rgba(0, 0, 0, 0.08)",
                                            borderRadius: "9999px",
                                            padding: "0.25rem 0.65rem",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.35rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    width: "4px",
                                                    height: "4px",
                                                    borderRadius: "50%",
                                                    backgroundColor: "#8B263E",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                                lineNumber: 379,
                                                columnNumber: 17
                                            }, this),
                                            h
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 355,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginTop: "1.5rem",
                            padding: "0.55rem 1.15rem",
                            borderRadius: "9999px",
                            backgroundColor: hovered ? "#8B263E" : "#F4F0E8",
                            border: hovered ? "1px solid #8B263E" : "1px solid rgba(0, 0, 0, 0.12)",
                            color: hovered ? "#FFFFFF" : "#141312",
                            fontSize: "0.72rem",
                            fontWeight: 600,
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                            width: "fit-content",
                            boxShadow: hovered ? "0 6px 20px rgba(139, 38, 62, 0.3)" : "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Explore Service"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                size: 14,
                                strokeWidth: 1.75,
                                style: {
                                    transform: hovered ? "translate(2px, -2px)" : "none",
                                    transition: "transform 0.3s ease"
                                }
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Services.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Services.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Services.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_s2(ServiceCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = ServiceCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Services");
__turbopack_context__.k.register(_c1, "ServiceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/TrustedPartners.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrustedPartners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const partners = [
    {
        name: "Greenply",
        category: "Plywood & Veneers",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/greenply.svg"),
        scale: 1.05
    },
    {
        name: "CenturyPly",
        category: "Plywood & Laminates",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/centuryply.png"),
        scale: 1.05
    },
    {
        name: "Merino",
        category: "Surface Laminates",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/merinologo.jpg.webp"),
        bg: "#E11D24",
        scale: 1.0
    },
    {
        name: "Greenlam",
        category: "Architectural Cladding",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/greenlam.png"),
        scale: 1.05
    },
    {
        name: "Hettich",
        category: "German Hardware",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/hettich.svg"),
        scale: 1.1
    },
    {
        name: "Action Tesa",
        category: "HDMR & MDF Boards",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/actiontesa.png"),
        scale: 1.05
    },
    {
        name: "Häfele",
        category: "Architectural Fittings",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/hafele.svg"),
        scale: 1.1
    },
    {
        name: "Ebco",
        category: "Furniture Accessories",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/ebco.avif"),
        bg: "#0B1E36",
        scale: 1.05
    },
    {
        name: "Asian Paints",
        category: "Paints & Coatings",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/asianpaints.avif"),
        scale: 1.1
    },
    {
        name: "Saint-Gobain",
        category: "High Performance Glass",
        logo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/images/partners/saintgobain.png"),
        scale: 1.0
    }
];
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function TrustedPartners() {
    _s1();
    const { ref, inView } = useInView(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "partners",
        ref: ref,
        style: {
            padding: "clamp(4.5rem, 8vw, 8.5rem) 0",
            backgroundColor: "#FAF8F5",
            position: "relative",
            overflow: "hidden",
            borderTop: "1px solid rgba(28, 27, 26, 0.08)",
            borderBottom: "1px solid rgba(28, 27, 26, 0.08)"
        },
        className: "jsx-272647e4398bd4ce",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1350px",
                    margin: "0 auto",
                    padding: "0 1.5rem"
                },
                className: "jsx-272647e4398bd4ce",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "3.5rem",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(24px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease"
                    },
                    className: "jsx-272647e4398bd4ce",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "1rem"
                            },
                            className: "jsx-272647e4398bd4ce",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    },
                                    className: "jsx-272647e4398bd4ce"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.72rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.28em",
                                        textTransform: "uppercase",
                                        color: "#8B263E",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.4rem"
                                    },
                                    className: "jsx-272647e4398bd4ce",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            size: 14,
                                            strokeWidth: 1.5,
                                            color: "#8B263E"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this),
                                        "MATERIAL & HARDWARE STANDARDS"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    },
                                    className: "jsx-272647e4398bd4ce"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-serif)",
                                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                                color: "#1C1B1A",
                                fontWeight: 500,
                                marginBottom: "1rem",
                                lineHeight: 1.12
                            },
                            className: "jsx-272647e4398bd4ce",
                            children: "Our Trusted Partners"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "rgba(28, 27, 26, 0.72)",
                                fontSize: "1rem",
                                maxWidth: "680px",
                                margin: "0 auto",
                                lineHeight: 1.7
                            },
                            className: "jsx-272647e4398bd4ce",
                            children: "Collaborating with India's leading material and hardware brands to deliver uncompromising quality, architectural endurance, and luxury finishes."
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-272647e4398bd4ce" + " " + "partners-continuous-marquee",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-272647e4398bd4ce" + " " + "marquee-track",
                    children: [
                        ...partners,
                        ...partners,
                        ...partners
                    ].map((partner, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-272647e4398bd4ce" + " " + "marquee-item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PartnerCard, {
                                partner: partner
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "272647e4398bd4ce",
                children: ".partners-continuous-marquee.jsx-272647e4398bd4ce{width:100%;padding:.5rem 0;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,#0000 0%,#000 8% 92%,#0000 100%);mask-image:linear-gradient(90deg,#0000 0%,#000 8% 92%,#0000 100%)}.marquee-track.jsx-272647e4398bd4ce{will-change:transform;gap:1.25rem;width:max-content;animation:32s linear infinite marquee-flow;display:flex}.marquee-track.jsx-272647e4398bd4ce:hover{animation-play-state:paused}.marquee-item.jsx-272647e4398bd4ce{flex-shrink:0;width:210px}@media (width<=768px){.marquee-item.jsx-272647e4398bd4ce{width:165px}.marquee-track.jsx-272647e4398bd4ce{gap:.85rem;animation-duration:24s}}@keyframes marquee-flow{0%{transform:translate(0)}to{transform:translate(-33.3333%)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s1(TrustedPartners, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        useInView
    ];
});
_c = TrustedPartners;
function PartnerCard({ partner }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cardBg = partner.bg || "#FFFFFF";
    const isDark = cardBg !== "#FFFFFF";
    const isMerino = partner.name === "Merino";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            backgroundColor: cardBg,
            borderRadius: "1rem",
            border: hovered ? "1px solid #8B263E" : isDark ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.08)",
            height: "96px",
            padding: isMerino ? "0.35rem 0.6rem" : "0.75rem 1.15rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: hovered ? "0 14px 32px -6px rgba(139, 38, 62, 0.28)" : isDark ? "0 4px 14px rgba(0, 0, 0, 0.3)" : "0 4px 14px rgba(0, 0, 0, 0.04)",
            transform: hovered ? "translateY(-4px) scale(1.03)" : "scale(1)",
            transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
            cursor: "pointer"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: partner.scale ? `scale(${partner.scale})` : "none"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: partner.logo,
                alt: `${partner.name} - Nuspace Creations Trusted Material Partner`,
                fill: true,
                unoptimized: true,
                sizes: "220px",
                style: {
                    objectFit: "contain"
                }
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
                lineNumber: 241,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
            lineNumber: 230,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/coastalinterio/src/components/TrustedPartners.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s2(PartnerCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = PartnerCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "TrustedPartners");
__turbopack_context__.k.register(_c1, "PartnerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Philosophy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Philosophy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const principles = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        number: "01",
        title: "Timeless",
        description: "We design for longevity — not trend cycles. Every material, proportion, and palette choice is made to endure beautifully across decades."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
        number: "02",
        title: "Personal",
        description: "Every space is a portrait of its owner. We listen deeply to your lifestyle, identity, and aspirations before a single line is drawn."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        number: "03",
        title: "Functional",
        description: "True luxury is space that works beautifully. Form always follows function — flow, storage, light, and scale are choreographed precisely."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        number: "04",
        title: "Precise",
        description: "Material selections, joinery tolerances, lighting angles — every detail passes our rigorous quality standard before it reaches your space."
    }
];
function useInView(threshold = 0.12) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function Philosophy() {
    _s1();
    const { ref, inView } = useInView(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "philosophy",
        ref: ref,
        style: {
            padding: "clamp(5rem, 9vw, 9rem) 1.5rem 0",
            backgroundColor: "#141312",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.18,
                    filter: "contrast(110%) brightness(85%)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/living_room/living_room_01.jpeg"),
                    alt: "Moody Interior Atmosphere",
                    fill: true,
                    sizes: "100vw",
                    style: {
                        objectFit: "cover",
                        objectPosition: "center"
                    }
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(180deg, rgba(20,19,18,0.94) 0%, rgba(20,19,18,0.85) 50%, rgba(20,19,18,0.98) 100%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1280px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "4.5rem",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateY(32px)",
                            transition: "opacity 0.9s ease, transform 0.9s ease"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.28em",
                                            textTransform: "uppercase",
                                            color: "#8B263E"
                                        },
                                        children: "DESIGN PHILOSOPHY"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                    fontWeight: 500,
                                    lineHeight: 1.1,
                                    color: "#FAF8F5",
                                    marginBottom: "1.5rem"
                                },
                                children: [
                                    "Designed for Living.",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        style: {
                                            fontStyle: "italic",
                                            color: "rgba(250,248,245,0.7)"
                                        },
                                        children: "Crafted for Life."
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontStyle: "italic",
                                    color: "#FAF8F5",
                                    fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
                                    maxWidth: "700px",
                                    margin: "0 auto 1.5rem",
                                    opacity: 0.9,
                                    lineHeight: 1.6
                                },
                                children: "“We don't design rooms. We design the way you'll remember them.”"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "0.95rem",
                                    maxWidth: "580px",
                                    margin: "0 auto",
                                    lineHeight: 1.7
                                },
                                children: "Our four founding principles guide every decision — from your first conversation to the final handover."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                            gap: "1.75rem",
                            marginBottom: "5rem"
                        },
                        children: principles.map((p, idx)=>{
                            const Icon = p.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhilosophyCard, {
                                p: p,
                                Icon: Icon,
                                delay: idx * 150,
                                inView: inView
                            }, p.number, false, {
                                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    zIndex: 2,
                    backgroundColor: "#100F0E",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    padding: "5rem 1.5rem",
                    textAlign: "center",
                    opacity: inView ? 1 : 0,
                    transition: "opacity 1s ease 0.6s"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "860px",
                        margin: "0 auto"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                            style: {
                                fontFamily: "var(--font-serif)",
                                fontStyle: "italic",
                                fontSize: "clamp(1.3rem, 2.8vw, 2.1rem)",
                                color: "rgba(255,255,255,0.92)",
                                lineHeight: 1.55,
                                margin: 0,
                                fontWeight: 300
                            },
                            children: "“A Nuspace Creations project is not a renovation — it is an orchestration of light, material, and lived experience.”"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                marginTop: "1.5rem",
                                color: "#8B263E",
                                fontSize: "0.76rem",
                                fontWeight: 600,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase"
                            },
                            children: "— NUSPACE CREATIONS, EST. 2015 BENGALURU"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s1(Philosophy, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        useInView
    ];
});
_c = Philosophy;
function PhilosophyCard({ p, Icon, delay, inView }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            backgroundColor: hovered ? "rgba(255, 255, 255, 0.07)" : "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(16px)",
            border: hovered ? "1px solid rgba(139, 38, 62, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "1.25rem",
            padding: "2.75rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(35px)",
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay}ms`,
            cursor: "default",
            boxShadow: hovered ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            color: hovered ? "#8B263E" : "rgba(255, 255, 255, 0.7)",
                            transition: "color 0.3s ease, transform 0.3s ease",
                            transform: hovered ? "scale(1.08)" : "scale(1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 30,
                            strokeWidth: 1.5,
                            color: hovered ? "#8B263E" : "#FAF8F5"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-serif)",
                            fontSize: "2.5rem",
                            fontWeight: 300,
                            color: "transparent",
                            WebkitTextStroke: hovered ? "1px #8B263E" : "1px rgba(255,255,255,0.2)",
                            transition: "all 0.3s ease"
                        },
                        children: p.number
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: "1px",
                    backgroundColor: hovered ? "rgba(139, 38, 62, 0.5)" : "rgba(255, 255, 255, 0.12)",
                    transition: "background-color 0.3s ease",
                    width: "100%"
                }
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    color: "#ffffff",
                    margin: 0,
                    lineHeight: 1.15
                },
                children: p.title
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "rgba(255, 255, 255, 0.72)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    margin: 0
                },
                children: p.description
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Philosophy.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_s2(PhilosophyCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = PhilosophyCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Philosophy");
__turbopack_context__.k.register(_c1, "PhilosophyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/VisionMission.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisionMission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const missionPoints = [
    "Functionality & Spatial Efficiency",
    "Timeless Contemporary Aesthetics",
    "Bespoke Material & Joinery Craftsmanship",
    "Sustainable & Conscious Design",
    "Uncompromising Quality & Integrity",
    "Timely Execution & Delivery Precision"
];
function VisionMission() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisionMission.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "VisionMission.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".vm-box", {
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 80%"
                        },
                        y: 40,
                        opacity: 0,
                        duration: 1.2,
                        stagger: 0.2,
                        ease: "power3.out"
                    });
                }
            }["VisionMission.useEffect.ctx"], containerRef);
            return ({
                "VisionMission.useEffect": ()=>ctx.revert()
            })["VisionMission.useEffect"];
        }
    }["VisionMission.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "vision-mission",
        ref: containerRef,
        style: {
            padding: "7rem 1.5rem",
            backgroundColor: "#FAF8F5",
            position: "relative"
        },
        className: "jsx-406577cfb19e5d80",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1280px",
                    margin: "0 auto"
                },
                className: "jsx-406577cfb19e5d80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                            gap: "2.5rem"
                        },
                        className: "jsx-406577cfb19e5d80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: "#ffffff",
                                    borderRadius: "1.5rem",
                                    padding: "3.5rem 2.5rem",
                                    boxShadow: "0 20px 40px -10px rgba(28, 27, 26, 0.06)",
                                    border: "1px solid rgba(28, 27, 26, 0.09)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.75rem",
                                    position: "relative",
                                    transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease"
                                },
                                className: "jsx-406577cfb19e5d80" + " " + "vm-box vm-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "1rem"
                                        },
                                        className: "jsx-406577cfb19e5d80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "3.5rem",
                                                    height: "3.5rem",
                                                    borderRadius: "50%",
                                                    backgroundColor: "rgba(139, 38, 62, 0.1)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#8B263E"
                                                },
                                                className: "jsx-406577cfb19e5d80",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-sans)",
                                                    fontSize: "0.75rem",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.2em",
                                                    textTransform: "uppercase",
                                                    color: "#8B263E"
                                                },
                                                className: "jsx-406577cfb19e5d80",
                                                children: "OUR VISION"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "var(--font-serif)",
                                            fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                                            fontWeight: 500,
                                            color: "#1C1B1A",
                                            lineHeight: 1.2,
                                            margin: 0
                                        },
                                        className: "jsx-406577cfb19e5d80",
                                        children: "Redefining the Way Spaces Are Experienced."
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: "#1C1B1A",
                                            opacity: 0.82,
                                            fontSize: "1.02rem",
                                            lineHeight: 1.8,
                                            margin: 0
                                        },
                                        className: "jsx-406577cfb19e5d80",
                                        children: "At Nuspace Creations, our vision is to combine creative innovation, functional clarity, and meticulous architectural precision to deliver transformative spaces that celebrate individuality and elevate modern living across Bengaluru."
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    backgroundColor: "#1C1B1A",
                                    color: "#ffffff",
                                    borderRadius: "1.5rem",
                                    padding: "3.5rem 2.5rem",
                                    boxShadow: "0 30px 60px -15px rgba(0,0,0,0.25)",
                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.75rem",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease"
                                },
                                className: "jsx-406577cfb19e5d80" + " " + "vm-box vm-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            zIndex: 0,
                                            opacity: 0.16,
                                            pointerEvents: "none"
                                        },
                                        className: "jsx-406577cfb19e5d80",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/work/turnkey/turnkey_03.jpeg"),
                                            alt: "Turnkey Craftsmanship Background",
                                            fill: true,
                                            sizes: "(max-width: 768px) 100vw, 600px",
                                            style: {
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(135deg, rgba(28,27,26,0.92) 0%, rgba(20,19,18,0.85) 100%)",
                                            zIndex: 1,
                                            pointerEvents: "none"
                                        },
                                        className: "jsx-406577cfb19e5d80"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            zIndex: 2,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1.75rem"
                                        },
                                        className: "jsx-406577cfb19e5d80",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "1rem"
                                                },
                                                className: "jsx-406577cfb19e5d80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: "3.5rem",
                                                            height: "3.5rem",
                                                            borderRadius: "50%",
                                                            backgroundColor: "rgba(139, 38, 62, 0.25)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            color: "#ffffff"
                                                        },
                                                        className: "jsx-406577cfb19e5d80",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "var(--font-sans)",
                                                            fontSize: "0.75rem",
                                                            fontWeight: 600,
                                                            letterSpacing: "0.2em",
                                                            textTransform: "uppercase",
                                                            color: "#8B263E"
                                                        },
                                                        className: "jsx-406577cfb19e5d80",
                                                        children: "OUR MISSION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "var(--font-serif)",
                                                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                                                    fontWeight: 500,
                                                    color: "#FAF8F5",
                                                    lineHeight: 1.2,
                                                    margin: 0
                                                },
                                                className: "jsx-406577cfb19e5d80",
                                                children: "Turning Ideas Into Exceptional Spaces."
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "grid",
                                                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                                    gap: "0.9rem",
                                                    marginTop: "0.25rem"
                                                },
                                                className: "jsx-406577cfb19e5d80",
                                                children: missionPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.65rem",
                                                            fontSize: "0.88rem",
                                                            color: "rgba(255,255,255,0.88)"
                                                        },
                                                        className: "jsx-406577cfb19e5d80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                size: 16,
                                                                color: "#8B263E",
                                                                style: {
                                                                    flexShrink: 0
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-406577cfb19e5d80",
                                                                children: point
                                                            }, void 0, false, {
                                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                        lineNumber: 230,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "3.5rem",
                            backgroundColor: "#ffffff",
                            borderRadius: "1.25rem",
                            padding: "2.25rem 2rem",
                            boxShadow: "0 15px 35px -10px rgba(28, 27, 26, 0.05)",
                            border: "1px solid rgba(139, 38, 62, 0.18)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "0.75rem"
                        },
                        className: "jsx-406577cfb19e5d80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                size: 24,
                                color: "#8B263E",
                                style: {
                                    opacity: 0.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontStyle: "italic",
                                    fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                                    color: "#1C1B1A",
                                    maxWidth: "820px",
                                    margin: 0,
                                    lineHeight: 1.6
                                },
                                className: "jsx-406577cfb19e5d80",
                                children: "“Nuspace Creations transformed our home into a sanctuary. The architectural precision, custom joinery, and spatial harmony exceeded every expectation.”"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.72rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "#8B263E",
                                    marginTop: "0.25rem"
                                },
                                className: "jsx-406577cfb19e5d80",
                                children: "— Verified Client, Indiranagar Penthouse Project"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "406577cfb19e5d80",
                children: ".vm-card.jsx-406577cfb19e5d80:hover{transform:translateY(-6px);border-color:#8b263e80!important;box-shadow:0 30px 60px -15px #8b263e2e!important}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/VisionMission.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(VisionMission, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = VisionMission;
var _c;
__turbopack_context__.k.register(_c, "VisionMission");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/hard-hat.js [app-client] (ecmascript) <export default as HardHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
const steps = [
    {
        number: "01",
        title: "Consultation & Site Visit",
        description: "Initial client meeting, in-depth site measurements, requirement gathering, and budget discussion.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
        items: [
            "Client Meeting",
            "Site Measurements",
            "Requirement Gathering",
            "Budget Discussion"
        ],
        accent: "#8B263E"
    },
    {
        number: "02",
        title: "Concept & Design Development",
        description: "Architectural space planning, mood boards, 2D floor plans, 3D visualizations, and design approval.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"],
        items: [
            "Space Planning",
            "Mood Boards",
            "2D Layouts",
            "3D Visualizations"
        ],
        accent: "#C5A059"
    },
    {
        number: "03",
        title: "Material Selection & Costing",
        description: "Selecting premium veneers, marbles, finishes, transparent BOQ breakdown, final quotation, and project scheduling.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        items: [
            "Material Selection",
            "Transparent BOQ",
            "Final Quotation",
            "Project Scheduling"
        ],
        accent: "#8B263E"
    },
    {
        number: "04",
        title: "Production & Procurement",
        description: "Precision custom furniture manufacturing, raw material procurement, and strict workshop quality inspections.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Factory$3e$__["Factory"],
        items: [
            "Custom Manufacturing",
            "Material Procurement",
            "Quality Inspections",
            "Factory Checks"
        ],
        accent: "#C5A059"
    },
    {
        number: "05",
        title: "Site Execution",
        description: "On-site civil work, electrical, plumbing, false ceiling, flooring, painting, and modular installations.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardHat$3e$__["HardHat"],
        items: [
            "Civil & Plumbing",
            "Electrical & Ceiling",
            "Flooring & Painting",
            "Modular Installations"
        ],
        accent: "#8B263E"
    },
    {
        number: "06",
        title: "Finishing & Styling",
        description: "Architectural lighting, décor placement, accessories, final touch-ups, and thorough deep cleaning.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        items: [
            "Architectural Lighting",
            "Décor & Accessories",
            "Final Touch-ups",
            "Deep Cleaning"
        ],
        accent: "#C5A059"
    },
    {
        number: "07",
        title: "Quality Check & Handover",
        description: "Comprehensive 100-point inspection, snag rectification, guided client walkthrough, and formal project handover.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        items: [
            "Final Inspection",
            "Snag Rectification",
            "Client Walkthrough",
            "Project Handover"
        ],
        accent: "#8B263E"
    }
];
function useInView(threshold = 0.08) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function Process() {
    _s1();
    const { ref: sectionRef, inView } = useInView(0.08);
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToStep = (index)=>{
        setActiveStep(index);
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.clientWidth;
            sliderRef.current.scrollTo({
                left: cardWidth * index,
                behavior: "smooth"
            });
        }
    };
    const handleScroll = ()=>{
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const cardWidth = sliderRef.current.clientWidth;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== activeStep && newIndex >= 0 && newIndex < steps.length) {
                setActiveStep(newIndex);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        ref: sectionRef,
        style: {
            padding: "clamp(4.5rem, 8vw, 8.5rem) 1.5rem",
            backgroundColor: "#F7F4EE",
            color: "#141312",
            position: "relative",
            overflow: "hidden"
        },
        className: "jsx-28153ea7084092d2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,160,89,0.12) 0%, transparent 70%)",
                    pointerEvents: "none"
                },
                className: "jsx-28153ea7084092d2"
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1350px",
                    margin: "0 auto",
                    position: "relative"
                },
                className: "jsx-28153ea7084092d2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "3.5rem",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateY(30px)",
                            transition: "opacity 0.8s ease, transform 0.8s ease"
                        },
                        className: "jsx-28153ea7084092d2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "0.85rem"
                                },
                                className: "jsx-28153ea7084092d2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        },
                                        className: "jsx-28153ea7084092d2"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.28em",
                                            textTransform: "uppercase",
                                            color: "#8B263E"
                                        },
                                        className: "jsx-28153ea7084092d2",
                                        children: "THE 7-STEP WORKFLOW"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        },
                                        className: "jsx-28153ea7084092d2"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                    color: "#141312",
                                    fontWeight: 500,
                                    marginBottom: "0.85rem",
                                    lineHeight: 1.12
                                },
                                className: "jsx-28153ea7084092d2",
                                children: "From First Conversation to Final Handover"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4A4744",
                                    fontSize: "0.98rem",
                                    maxWidth: "640px",
                                    margin: "0 auto",
                                    lineHeight: 1.65
                                },
                                className: "jsx-28153ea7084092d2",
                                children: "Our transparent 7-stage project execution framework matches architectural precision, timeline discipline, and zero surprises."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "3.5rem",
                            position: "relative",
                            padding: "0 2rem"
                        },
                        className: "jsx-28153ea7084092d2" + " " + "desktop-stepper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "22px",
                                    left: "4rem",
                                    right: "4rem",
                                    height: "1.5px",
                                    backgroundColor: "rgba(197, 160, 89, 0.35)",
                                    zIndex: 0
                                },
                                className: "jsx-28153ea7084092d2"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "22px",
                                    left: "4rem",
                                    width: `${activeStep / (steps.length - 1) * 88}%`,
                                    height: "2.5px",
                                    backgroundColor: "#C5A059",
                                    boxShadow: "0 0 10px rgba(197, 160, 89, 0.5)",
                                    transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                    zIndex: 1
                                },
                                className: "jsx-28153ea7084092d2"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            steps.map((s, idx)=>{
                                const isActive = idx === activeStep;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setActiveStep(idx),
                                    style: {
                                        zIndex: 2,
                                        backgroundColor: "#F7F4EE",
                                        padding: "0 0.5rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        cursor: "pointer"
                                    },
                                    className: "jsx-28153ea7084092d2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "2.75rem",
                                                height: "2.75rem",
                                                borderRadius: "50%",
                                                backgroundColor: isActive ? "#8B263E" : "#FFFFFF",
                                                border: isActive ? "1.5px solid #C5A059" : "1px solid rgba(0, 0, 0, 0.15)",
                                                color: isActive ? "#FFFFFF" : "#141312",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.8rem",
                                                fontWeight: 600,
                                                fontFamily: "var(--font-sans)",
                                                boxShadow: isActive ? "0 4px 16px rgba(139, 38, 62, 0.35)" : "0 2px 8px rgba(0,0,0,0.06)",
                                                transition: "all 0.3s ease",
                                                transform: isActive ? "scale(1.12)" : "scale(1)"
                                            },
                                            className: "jsx-28153ea7084092d2",
                                            children: s.number
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.68rem",
                                                fontWeight: isActive ? 600 : 500,
                                                color: isActive ? "#141312" : "#6B6764",
                                                letterSpacing: "0.08em",
                                                textAlign: "center",
                                                maxWidth: "95px",
                                                textTransform: "uppercase",
                                                transition: "color 0.3s ease"
                                            },
                                            className: "jsx-28153ea7084092d2",
                                            children: s.title.split("&")[0]
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                            lineNumber: 285,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.number, true, {
                                    fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-28153ea7084092d2" + " " + "mobile-slider-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: "1rem"
                                },
                                className: "jsx-28153ea7084092d2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.78rem",
                                            fontWeight: 600,
                                            color: "#8B263E",
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase"
                                        },
                                        className: "jsx-28153ea7084092d2",
                                        children: [
                                            "Step ",
                                            activeStep + 1,
                                            " of ",
                                            steps.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            gap: "0.5rem"
                                        },
                                        className: "jsx-28153ea7084092d2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollToStep(Math.max(0, activeStep - 1)),
                                                disabled: activeStep === 0,
                                                "aria-label": "Previous step",
                                                style: {
                                                    width: "2.2rem",
                                                    height: "2.2rem",
                                                    borderRadius: "50%",
                                                    border: "1px solid rgba(0,0,0,0.15)",
                                                    backgroundColor: activeStep === 0 ? "rgba(0,0,0,0.03)" : "#FFFFFF",
                                                    color: activeStep === 0 ? "rgba(0,0,0,0.2)" : "#141312",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    cursor: activeStep === 0 ? "default" : "pointer",
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
                                                },
                                                className: "jsx-28153ea7084092d2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                    size: 18,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>scrollToStep(Math.min(steps.length - 1, activeStep + 1)),
                                                disabled: activeStep === steps.length - 1,
                                                "aria-label": "Next step",
                                                style: {
                                                    width: "2.2rem",
                                                    height: "2.2rem",
                                                    borderRadius: "50%",
                                                    border: "1px solid rgba(0,0,0,0.15)",
                                                    backgroundColor: activeStep === steps.length - 1 ? "rgba(0,0,0,0.03)" : "#FFFFFF",
                                                    color: activeStep === steps.length - 1 ? "rgba(0,0,0,0.2)" : "#141312",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    cursor: activeStep === steps.length - 1 ? "default" : "pointer",
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
                                                },
                                                className: "jsx-28153ea7084092d2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                    size: 18,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                                lineNumber: 348,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: sliderRef,
                                onScroll: handleScroll,
                                style: {
                                    display: "flex",
                                    overflowX: "auto",
                                    scrollSnapType: "x mandatory",
                                    scrollbarWidth: "none",
                                    msOverflowStyle: "none",
                                    gap: "1rem",
                                    paddingBottom: "0.5rem",
                                    WebkitOverflowScrolling: "touch"
                                },
                                className: "jsx-28153ea7084092d2",
                                children: steps.map((step)=>{
                                    const Icon = step.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            minWidth: "100%",
                                            scrollSnapAlign: "start",
                                            boxSizing: "border-box"
                                        },
                                        className: "jsx-28153ea7084092d2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessStepCard, {
                                            step: step,
                                            Icon: Icon,
                                            delay: 0,
                                            inView: inView
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                            lineNumber: 397,
                                            columnNumber: 19
                                        }, this)
                                    }, step.number, false, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 389,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "0.4rem",
                                    marginTop: "1.25rem"
                                },
                                className: "jsx-28153ea7084092d2",
                                children: steps.map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scrollToStep(idx),
                                        "aria-label": `Go to step ${idx + 1}`,
                                        style: {
                                            width: idx === activeStep ? "1.5rem" : "0.45rem",
                                            height: "6px",
                                            borderRadius: "9999px",
                                            backgroundColor: idx === activeStep ? "#8B263E" : "rgba(0, 0, 0, 0.2)",
                                            border: "none",
                                            padding: 0,
                                            cursor: "pointer",
                                            transition: "all 0.3s ease"
                                        },
                                        className: "jsx-28153ea7084092d2"
                                    }, idx, false, {
                                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 403,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                            gap: "1.5rem"
                        },
                        className: "jsx-28153ea7084092d2" + " " + "desktop-grid",
                        children: steps.map((step, index)=>{
                            const Icon = step.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProcessStepCard, {
                                step: step,
                                Icon: Icon,
                                delay: index * 80,
                                inView: inView
                            }, step.number, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 436,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "28153ea7084092d2",
                children: "@media (width<=1023px){.desktop-stepper.jsx-28153ea7084092d2,.desktop-grid.jsx-28153ea7084092d2{display:none!important}.mobile-slider-container.jsx-28153ea7084092d2{display:block!important}}@media (width>=1024px){.mobile-slider-container.jsx-28153ea7084092d2{display:none!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Process.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s1(Process, "eDZrwaHvn5EFH8cjO3aMUptHttk=", false, function() {
    return [
        useInView
    ];
});
_c = Process;
function ProcessStepCard({ step, Icon, delay, inView }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            backgroundColor: "#FFFFFF",
            borderRadius: "1.25rem",
            padding: "2.25rem 1.75rem",
            border: hovered ? "1px solid #C5A059" : "1px solid rgba(0, 0, 0, 0.08)",
            boxShadow: hovered ? "0 20px 45px -10px rgba(197, 160, 89, 0.22)" : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "1.1rem",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(30px)",
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay}ms`,
            minHeight: "380px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    opacity: hovered ? 0.15 : 0.06,
                    color: "#141312",
                    pointerEvents: "none",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 90,
                    strokeWidth: 1
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/Process.tsx",
                    lineNumber: 516,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    position: "relative",
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: "var(--font-serif)",
                            fontSize: "3.2rem",
                            fontWeight: 300,
                            lineHeight: 1,
                            color: "transparent",
                            WebkitTextStroke: hovered ? "1.5px #8B263E" : "1.5px #C5A059",
                            transition: "all 0.3s ease"
                        },
                        children: step.number
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "50%",
                            backgroundColor: "#F7F4EE",
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#8B263E",
                            transition: "transform 0.3s ease",
                            transform: hovered ? "scale(1.08)" : "scale(1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 17,
                            strokeWidth: 1.5,
                            color: "#8B263E"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Process.tsx",
                            lineNumber: 549,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 520,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.45rem",
                    fontWeight: 500,
                    color: "#141312",
                    margin: 0,
                    lineHeight: 1.25,
                    position: "relative",
                    zIndex: 1
                },
                children: step.title
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 553,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "0.88rem",
                    color: "#4A4744",
                    lineHeight: 1.65,
                    margin: 0,
                    position: "relative",
                    zIndex: 1
                },
                children: step.description
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderTop: "1px solid rgba(0, 0, 0, 0.07)",
                    paddingTop: "1rem",
                    marginTop: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    position: "relative",
                    zIndex: 1
                },
                children: step.items.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "0.7rem",
                            color: "#3A3734",
                            fontWeight: 500,
                            backgroundColor: "#FDFBF7",
                            border: "1px solid rgba(0, 0, 0, 0.08)",
                            borderRadius: "9999px",
                            padding: "0.25rem 0.65rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: "4px",
                                    height: "4px",
                                    borderRadius: "50%",
                                    backgroundColor: "#8B263E",
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                                lineNumber: 610,
                                columnNumber: 13
                            }, this),
                            item
                        ]
                    }, idx, true, {
                        fileName: "[project]/coastalinterio/src/components/Process.tsx",
                        lineNumber: 595,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Process.tsx",
                lineNumber: 582,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Process.tsx",
        lineNumber: 482,
        columnNumber: 5
    }, this);
}
_s2(ProcessStepCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = ProcessStepCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Process");
__turbopack_context__.k.register(_c1, "ProcessStepCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/data/portfolio_manifest.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"living_room":["/work/living_room/living_room_01.jpeg","/work/living_room/living_room_02.jpeg","/work/living_room/living_room_03.jpeg","/work/living_room/living_room_04.jpeg","/work/living_room/living_room_05.jpeg","/work/living_room/living_room_06.jpeg","/work/living_room/living_room_07.jpeg","/work/living_room/living_room_08.jpeg","/work/living_room/living_room_09.jpeg","/work/living_room/living_room_10.jpeg","/work/living_room/living_room_11.jpeg","/work/living_room/living_room_12.jpeg","/work/living_room/living_room_13.jpeg","/work/living_room/living_room_14.jpeg","/work/living_room/living_room_15.jpeg","/work/living_room/living_room_16.jpeg","/work/living_room/living_room_17.jpeg","/work/living_room/living_room_18.jpeg"],"bedroom":["/work/bedroom/bedroom_01.jpeg","/work/bedroom/bedroom_02.jpeg","/work/bedroom/bedroom_03.jpeg","/work/bedroom/bedroom_04.jpeg","/work/bedroom/bedroom_05.jpeg","/work/bedroom/bedroom_06.jpeg","/work/bedroom/bedroom_07.jpeg","/work/bedroom/bedroom_08.jpeg","/work/bedroom/bedroom_09.jpeg","/work/bedroom/bedroom_10.jpeg","/work/bedroom/bedroom_11.jpeg","/work/bedroom/bedroom_12.jpeg","/work/bedroom/bedroom_13.jpeg","/work/bedroom/bedroom_14.jpeg","/work/bedroom/bedroom_15.jpeg","/work/bedroom/bedroom_16.jpeg","/work/bedroom/bedroom_17.jpeg","/work/bedroom/bedroom_18.jpeg"],"kitchen":["/work/kitchen/kitchen_01.jpeg","/work/kitchen/kitchen_02.jpeg","/work/kitchen/kitchen_03.jpeg","/work/kitchen/kitchen_04.jpeg","/work/kitchen/kitchen_05.jpeg","/work/kitchen/kitchen_07.jpeg","/work/kitchen/kitchen_08.jpeg","/work/kitchen/kitchen_09.jpeg","/work/kitchen/kitchen_10.jpeg","/work/kitchen/kitchen_11.jpeg","/work/kitchen/kitchen_12.jpeg","/work/kitchen/kitchen_13.jpeg","/work/kitchen/kitchen_14.jpeg"],"dining":["/work/dining/dining_01.jpeg","/work/dining/dining_02.jpeg","/work/dining/dining_03.jpeg","/work/dining/dining_04.jpeg","/work/dining/dining_05.jpeg","/work/dining/dining_06.jpeg","/work/dining/dining_07.jpeg","/work/dining/dining_08.jpeg","/work/dining/dining_09.jpeg","/work/dining/dining_10.jpeg","/work/dining/dining_11.jpeg"],"wardrobe":["/work/wardrobe/wardrobe_01.jpeg","/work/wardrobe/wardrobe_02.jpeg","/work/wardrobe/wardrobe_03.jpeg","/work/wardrobe/wardrobe_04.jpeg","/work/wardrobe/wardrobe_05.jpeg","/work/wardrobe/wardrobe_06.jpeg","/work/wardrobe/wardrobe_07.jpeg","/work/wardrobe/wardrobe_08.jpeg","/work/wardrobe/wardrobe_09.jpeg","/work/wardrobe/wardrobe_10.jpeg","/work/wardrobe/wardrobe_11.jpeg"],"commercial":["/work/commercial/commercial_01.jpeg","/work/commercial/commercial_02.jpeg","/work/commercial/commercial_03.jpeg","/work/commercial/commercial_04.jpeg","/work/commercial/commercial_05.jpeg","/work/commercial/commercial_06.jpeg","/work/commercial/commercial_07.jpeg","/work/commercial/commercial_08.jpeg","/work/commercial/commercial_09.jpeg","/work/commercial/commercial_10.jpeg","/work/commercial/commercial_11.jpeg","/work/commercial/commercial_12.jpeg","/work/commercial/commercial_13.jpeg","/work/commercial/commercial_14.jpeg"],"renovation":["/work/renovation/renovation_01.jpeg","/work/renovation/renovation_02.jpeg","/work/renovation/renovation_03.jpeg","/work/renovation/renovation_04.jpeg","/work/renovation/renovation_05.jpeg","/work/renovation/renovation_06.jpeg","/work/renovation/renovation_07.jpeg","/work/renovation/renovation_08.jpeg","/work/renovation/renovation_09.jpeg"],"turnkey":["/work/turnkey/turnkey_01.jpeg","/work/turnkey/turnkey_02.jpeg","/work/turnkey/turnkey_03.jpeg","/work/turnkey/turnkey_04.jpeg","/work/turnkey/turnkey_05.jpeg","/work/turnkey/turnkey_06.jpeg","/work/turnkey/turnkey_07.jpeg","/work/turnkey/turnkey_08.jpeg","/work/turnkey/turnkey_09.jpeg","/work/turnkey/turnkey_10.jpeg","/work/turnkey/turnkey_11.jpeg"]});}),
"[project]/coastalinterio/src/components/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$data$2f$portfolio_manifest$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/data/portfolio_manifest.json (json)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const CATEGORIES = [
    {
        id: "all",
        label: "All Work"
    },
    {
        id: "living_room",
        label: "Living Room"
    },
    {
        id: "bedroom",
        label: "Bedroom"
    },
    {
        id: "kitchen",
        label: "Kitchen"
    },
    {
        id: "dining",
        label: "Dining"
    },
    {
        id: "wardrobe",
        label: "Wardrobe"
    },
    {
        id: "commercial",
        label: "Commercial"
    },
    {
        id: "renovation",
        label: "Renovation"
    },
    {
        id: "turnkey",
        label: "Turnkey"
    }
];
const ALL_PHOTOS = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$data$2f$portfolio_manifest$2e$json__$28$json$29$__["default"]).flatMap(_c = ([cat, paths])=>paths.map((path, idx)=>({
            id: `${cat}_${idx + 1}`,
            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])(path),
            category: cat,
            label: cat.replace("_", " ").replace(/\b\w/g, (c)=>c.toUpperCase())
        })));
_c1 = ALL_PHOTOS;
function Portfolio() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [lightbox, setLightbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(24);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const filtered = activeCategory === "all" ? ALL_PHOTOS : ALL_PHOTOS.filter((p)=>p.category === activeCategory);
    const visible = filtered.slice(0, visibleCount);
    // Animate cards on category change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            if (!gridRef.current) return;
            const cards = gridRef.current.querySelectorAll(".pf-card");
            __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cards, {
                opacity: 0,
                y: 30,
                scale: 0.96
            }, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.55,
                stagger: 0.04,
                ease: "power3.out"
            });
        }
    }["Portfolio.useEffect"], [
        activeCategory,
        visibleCount
    ]);
    // Section entrance animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Portfolio.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".pf-header", {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 80%"
                        },
                        y: 40,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power4.out"
                    });
                }
            }["Portfolio.useEffect.ctx"], sectionRef);
            return ({
                "Portfolio.useEffect": ()=>ctx.revert()
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], []);
    // Lightbox keyboard close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Portfolio.useEffect": ()=>{
            const close = {
                "Portfolio.useEffect.close": (e)=>{
                    if (e.key === "Escape") setLightbox(null);
                }
            }["Portfolio.useEffect.close"];
            window.addEventListener("keydown", close);
            return ({
                "Portfolio.useEffect": ()=>window.removeEventListener("keydown", close)
            })["Portfolio.useEffect"];
        }
    }["Portfolio.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        ref: sectionRef,
        style: {
            padding: "7rem 1.5rem",
            backgroundColor: "#FAF8F5",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1400px",
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pf-header",
                        style: {
                            textAlign: "center",
                            marginBottom: "3.5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "0.85rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.28em",
                                            textTransform: "uppercase",
                                            color: "#8B263E"
                                        },
                                        children: "OUR WORK"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(2.4rem, 5vw, 4rem)",
                                    color: "#1C1B1A",
                                    fontWeight: 500,
                                    marginBottom: "0.75rem"
                                },
                                children: "Spaces We've Transformed"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(28,27,26,0.7)",
                                    fontSize: "1rem",
                                    maxWidth: "560px",
                                    margin: "0 auto",
                                    lineHeight: 1.65
                                },
                                children: "Every project is a bespoke story of craft, material, and light — delivered across Bengaluru since 2015."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "portfolio-cat-tabs",
                        style: {
                            display: "flex",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            marginBottom: "2.5rem",
                            maxWidth: "100%",
                            overflowX: "auto",
                            paddingBottom: "0.5rem",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        },
                        children: CATEGORIES.map((cat)=>{
                            const isActive = cat.id === activeCategory;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setActiveCategory(cat.id);
                                    setVisibleCount(24);
                                },
                                style: {
                                    padding: "0.55rem 1.15rem",
                                    borderRadius: "9999px",
                                    border: isActive ? "1px solid #CE2029" : "1px solid rgba(28,27,26,0.18)",
                                    backgroundColor: isActive ? "#CE2029" : "transparent",
                                    color: isActive ? "#ffffff" : "#1C1B1A",
                                    fontFamily: "var(--font-sans)",
                                    fontSize: "0.72rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.12em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    transition: "all 0.25s ease",
                                    flexShrink: 0,
                                    whiteSpace: "nowrap"
                                },
                                children: cat.label
                            }, cat.id, false, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 139,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: gridRef,
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "0.85rem"
                        },
                        children: visible.map((photo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pf-card",
                                onClick: ()=>setLightbox(photo.src),
                                style: {
                                    position: "relative",
                                    aspectRatio: "4 / 3",
                                    borderRadius: "0.85rem",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    backgroundColor: "#e8e4df"
                                },
                                onMouseEnter: (e)=>{
                                    const overlay = e.currentTarget.querySelector(".pf-overlay");
                                    if (overlay) overlay.style.opacity = "1";
                                    const img = e.currentTarget.querySelector("img");
                                    if (img) img.style.transform = "scale(1.06)";
                                },
                                onMouseLeave: (e)=>{
                                    const overlay = e.currentTarget.querySelector(".pf-overlay");
                                    if (overlay) overlay.style.opacity = "0";
                                    const img = e.currentTarget.querySelector("img");
                                    if (img) img.style.transform = "scale(1)";
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: photo.src,
                                        alt: photo.label,
                                        fill: true,
                                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px",
                                        style: {
                                            objectFit: "cover",
                                            transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)"
                                        },
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pf-overlay",
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to top, rgba(20,19,18,0.75) 0%, transparent 60%)",
                                            opacity: 0,
                                            transition: "opacity 0.35s ease",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            padding: "1.25rem"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-sans)",
                                                fontSize: "0.72rem",
                                                fontWeight: 600,
                                                letterSpacing: "0.15em",
                                                textTransform: "uppercase",
                                                color: "#ffffff"
                                            },
                                            children: photo.label
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, photo.id, true, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    visibleCount < filtered.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginTop: "3rem"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-primary",
                                onClick: ()=>setVisibleCount((c)=>c + 16),
                                style: {
                                    padding: "0.9rem 2.5rem",
                                    borderRadius: "9999px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Load More Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginTop: "0.75rem",
                                    fontSize: "0.8rem",
                                    color: "rgba(28,27,26,0.5)"
                                },
                                children: [
                                    "Showing ",
                                    visible.length,
                                    " of ",
                                    filtered.length,
                                    " photos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: "4rem",
                            background: "linear-gradient(135deg, #8B263E, #5c1828)",
                            borderRadius: "1.5rem",
                            padding: "3rem 2.5rem",
                            textAlign: "center",
                            color: "#ffffff"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                                    fontWeight: 500,
                                    marginBottom: "0.85rem"
                                },
                                children: "Ready to Begin Your Project?"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: "1rem",
                                    marginBottom: "2rem",
                                    maxWidth: "500px",
                                    margin: "0 auto 2rem"
                                },
                                children: "Discuss your space with our design team. Free initial consultation — Bengaluru wide."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "btn-outline-white",
                                style: {
                                    padding: "0.9rem 2.5rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    borderRadius: "9999px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Book Free Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                                lineNumber: 276,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            lightbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setLightbox(null),
                style: {
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.92)",
                    zIndex: 9000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setLightbox(null),
                        style: {
                            position: "absolute",
                            top: "1.25rem",
                            right: "1.25rem",
                            background: "rgba(255,255,255,0.1)",
                            border: "none",
                            borderRadius: "50%",
                            width: "2.75rem",
                            height: "2.75rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            color: "#ffffff"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>e.stopPropagation(),
                        style: {
                            position: "relative",
                            width: "min(90vw, 1100px)",
                            height: "min(80vh, 750px)",
                            borderRadius: "1rem",
                            overflow: "hidden"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: lightbox,
                            alt: "Nuspace Creations project",
                            fill: true,
                            sizes: "90vw",
                            style: {
                                objectFit: "contain"
                            },
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                            lineNumber: 333,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                        lineNumber: 323,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Portfolio.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_s(Portfolio, "9KIo0ejdkgKEu+lSD/PHqqbvqLg=");
_c2 = Portfolio;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ALL_PHOTOS$Object.entries(manifest).flatMap");
__turbopack_context__.k.register(_c1, "ALL_PHOTOS");
__turbopack_context__.k.register(_c2, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Team.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Team
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/src/lib/cdn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function Team() {
    _s1();
    const { ref: containerRef, inView } = useInView(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "team",
        ref: containerRef,
        style: {
            padding: "clamp(4rem, 8vw, 8rem) 1.5rem",
            backgroundColor: "#1C1B1A",
            color: "#ffffff",
            position: "relative"
        },
        className: "jsx-a46b1fddfe096834",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: "1140px",
                    margin: "0 auto"
                },
                className: "jsx-a46b1fddfe096834",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center",
                            marginBottom: "4rem",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateY(30px)",
                            transition: "opacity 0.8s ease, transform 0.8s ease"
                        },
                        className: "jsx-a46b1fddfe096834",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    marginBottom: "1rem"
                                },
                                className: "jsx-a46b1fddfe096834",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        },
                                        className: "jsx-a46b1fddfe096834"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.28em",
                                            textTransform: "uppercase",
                                            color: "#8B263E"
                                        },
                                        className: "jsx-a46b1fddfe096834",
                                        children: "FOUNDER & LEADERSHIP"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            width: "2rem",
                                            height: "2px",
                                            backgroundColor: "#8B263E"
                                        },
                                        className: "jsx-a46b1fddfe096834"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                    color: "#FAF8F5",
                                    fontWeight: 500,
                                    marginBottom: "1rem",
                                    lineHeight: 1.1
                                },
                                className: "jsx-a46b1fddfe096834",
                                children: "Meet the Founder"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "1rem",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                    lineHeight: 1.65
                                },
                                className: "jsx-a46b1fddfe096834",
                                children: "The vision, philosophy, and dedication behind Nuspace Creations."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "#141312",
                            borderRadius: "1.75rem",
                            overflow: "hidden",
                            border: "1px solid rgba(255, 255, 255, 0.12)",
                            boxShadow: "0 25px 50px -15px rgba(0,0,0,0.5)",
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                            gap: "0",
                            opacity: inView ? 1 : 0,
                            transform: inView ? "none" : "translateY(35px)",
                            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
                            marginBottom: "3.5rem"
                        },
                        className: "jsx-a46b1fddfe096834" + " " + "founder-card-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "relative",
                                    aspectRatio: "4 / 4.8",
                                    minHeight: "380px",
                                    backgroundColor: "#252321",
                                    overflow: "hidden"
                                },
                                className: "jsx-a46b1fddfe096834",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/founder.jpeg"),
                                        alt: "Prashant - Founder & CEO, Nuspace Creations",
                                        fill: true,
                                        sizes: "(max-width: 768px) 100vw, 550px",
                                        style: {
                                            objectFit: "cover",
                                            objectPosition: "top center"
                                        },
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to top, rgba(20, 19, 18, 0.95) 0%, transparent 55%)"
                                        },
                                        className: "jsx-a46b1fddfe096834"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            bottom: "1.25rem",
                                            left: "1.25rem",
                                            backgroundColor: "rgba(139, 38, 62, 0.9)",
                                            backdropFilter: "blur(10px)",
                                            padding: "0.45rem 1.1rem",
                                            borderRadius: "9999px",
                                            fontSize: "0.68rem",
                                            color: "#ffffff",
                                            fontWeight: 600,
                                            letterSpacing: "0.18em",
                                            textTransform: "uppercase",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.4rem"
                                        },
                                        className: "jsx-a46b1fddfe096834",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this),
                                            "FOUNDER & CEO"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "3.5rem 3rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: "1.25rem"
                                },
                                className: "jsx-a46b1fddfe096834" + " " + "founder-bio-box",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a46b1fddfe096834",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: "var(--font-serif)",
                                                    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    margin: 0,
                                                    lineHeight: 1.1
                                                },
                                                className: "jsx-a46b1fddfe096834",
                                                children: "Prashant"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "var(--font-sans)",
                                                    fontSize: "0.78rem",
                                                    fontWeight: 600,
                                                    color: "#8B263E",
                                                    letterSpacing: "0.2em",
                                                    textTransform: "uppercase",
                                                    display: "block",
                                                    marginTop: "0.4rem"
                                                },
                                                className: "jsx-a46b1fddfe096834",
                                                children: "Founder & CEO, Nuspace Creations"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                            color: "rgba(255, 255, 255, 0.8)",
                                            fontSize: "0.98rem",
                                            lineHeight: 1.75
                                        },
                                        className: "jsx-a46b1fddfe096834",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0
                                                },
                                                className: "jsx-a46b1fddfe096834",
                                                children: "Prashant founded Nuspace Creations in 2015 with a simple belief — that a space should feel like the person living in it, not like a showroom."
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    margin: 0
                                                },
                                                className: "jsx-a46b1fddfe096834",
                                                children: "Over the last decade, that belief has shaped 350+ homes and commercial spaces across Bengaluru, each one built around a single principle: design that is timeless, deeply personal, and executed without compromise. His approach blends architectural precision with an obsessive attention to material, light, and craftsmanship — turning ideas into spaces people don't just live in, but feel at home in."
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            marginTop: "1rem",
                                            padding: "1.25rem 1.5rem",
                                            borderRadius: "1rem",
                                            backgroundColor: "rgba(139, 38, 62, 0.12)",
                                            borderLeft: "3px solid #8B263E"
                                        },
                                        className: "jsx-a46b1fddfe096834",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "var(--font-serif)",
                                                fontStyle: "italic",
                                                fontSize: "1.05rem",
                                                color: "#FAF8F5",
                                                margin: 0,
                                                lineHeight: 1.5
                                            },
                                            className: "jsx-a46b1fddfe096834",
                                            children: "“Every space we build should outlive trends — and still feel personal, decades from now.”"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "#141312",
                            borderRadius: "1.25rem",
                            padding: "1.5rem 2rem",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "1.25rem",
                            opacity: inView ? 1 : 0,
                            transition: "opacity 0.9s ease 0.4s"
                        },
                        className: "jsx-a46b1fddfe096834",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.25rem"
                                },
                                className: "jsx-a46b1fddfe096834",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "relative",
                                            width: "54px",
                                            height: "54px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            border: "2px solid #8B263E",
                                            flexShrink: 0
                                        },
                                        className: "jsx-a46b1fddfe096834",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$src$2f$lib$2f$cdn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCdnUrl"])("/shanmukha.png"),
                                            alt: "Shanmukha - Principal Designer",
                                            fill: true,
                                            sizes: "60px",
                                            style: {
                                                objectFit: "cover"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a46b1fddfe096834",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontFamily: "var(--font-serif)",
                                                    fontSize: "1.2rem",
                                                    fontWeight: 500,
                                                    color: "#ffffff",
                                                    margin: 0
                                                },
                                                className: "jsx-a46b1fddfe096834",
                                                children: "Shanmukha"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 281,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: "0.75rem",
                                                    color: "#8B263E",
                                                    fontWeight: 600,
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase"
                                                },
                                                className: "jsx-a46b1fddfe096834",
                                                children: "Principal Designer"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(255,255,255,0.65)",
                                    fontSize: "0.88rem",
                                    margin: 0,
                                    maxWidth: "520px",
                                    lineHeight: 1.5
                                },
                                className: "jsx-a46b1fddfe096834",
                                children: "Design execution & creative direction led by Principal Designer Shanmukha, ensuring spatial harmony and bespoke joinery across every project."
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                                lineNumber: 290,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/Team.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/Team.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a46b1fddfe096834",
                children: "@media (width<=768px){.founder-bio-box.jsx-a46b1fddfe096834{padding:2.25rem 1.5rem!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Team.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s1(Team, "3bXLmGVRcRHM1gSZlOpVwSVNzmE=", false, function() {
    return [
        useInView
    ];
});
_c = Team;
var _c;
__turbopack_context__.k.register(_c, "Team");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Trust.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Trust
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/paintbrush.js [app-client] (ecmascript) <export default as Paintbrush>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/piggy-bank.js [app-client] (ecmascript) <export default as PiggyBank>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const trustFeatures = [
    {
        title: "End-to-End Turnkey Execution",
        description: "We manage every stage from initial civil work to final styling, furniture placement, and key delivery.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
        color: "#8B263E"
    },
    {
        title: "100% Bespoke Interiors",
        description: "No templated layouts or cookie-cutter designs. Every single space is uniquely tailored to your individual lifestyle.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paintbrush$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paintbrush$3e$__["Paintbrush"],
        color: "#a03d52"
    },
    {
        title: "Photorealistic 3D Visuals",
        description: "Experience your future space in high-definition 3D before a single hammer is raised or materials are cut.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        color: "#1c4f6b"
    },
    {
        title: "Precision Workshop Quality",
        description: "Custom modular joinery and teak/veneer furniture crafted with zero compromise on tolerances or material purity.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        color: "#6b4226"
    },
    {
        title: "Guaranteed Timely Delivery",
        description: "Disciplined scheduling with clear milestone tracking and on-time handover guaranteed across Bengaluru.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        color: "#3a6b3a"
    },
    {
        title: "Transparent BOQ Costing",
        description: "No hidden fees or unexpected costs mid-way. Detailed itemized estimates for complete financial peace of mind.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$piggy$2d$bank$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PiggyBank$3e$__["PiggyBank"],
        color: "#5a4b8b"
    }
];
function useInView(threshold = 0.1) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.disconnect();
                    }
                }
            }["useInView.useEffect"], {
                threshold
            });
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function Trust() {
    _s1();
    const { ref: sectionRef, inView } = useInView(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "trust",
        ref: sectionRef,
        style: {
            padding: "clamp(4rem, 8vw, 8rem) 1.5rem",
            backgroundColor: "#141312",
            color: "#ffffff",
            position: "relative",
            overflow: "hidden"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1280px",
                margin: "0 auto",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "4.5rem",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(30px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "1rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.72rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.28em",
                                        textTransform: "uppercase",
                                        color: "#8B263E"
                                    },
                                    children: "THE NUSPACE GUARANTEE"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-serif)",
                                fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                                color: "#FAF8F5",
                                fontWeight: 500,
                                lineHeight: "1.15"
                            },
                            children: [
                                "Why Clients Choose ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                                    lineNumber: 114,
                                    columnNumber: 44
                                }, this),
                                " Nuspace Creations"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                            lineNumber: 105,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                        gap: "1.5rem"
                    },
                    children: trustFeatures.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustFeatureBox, {
                            feature: feature,
                            delay: idx * 100,
                            inView: inView
                        }, idx, false, {
                            fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                            lineNumber: 127,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coastalinterio/src/components/Trust.tsx",
            lineNumber: 76,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/coastalinterio/src/components/Trust.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s1(Trust, "TvtgYSVxh+790Ge8QBklIBrn0wk=", false, function() {
    return [
        useInView
    ];
});
_c = Trust;
function TrustFeatureBox({ feature, delay, inView }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const Icon = feature.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            backgroundColor: hovered ? `${feature.color}15` : "rgba(255,255,255,0.03)",
            padding: "2.5rem 2rem",
            borderRadius: "1.25rem",
            border: hovered ? `1px solid ${feature.color}50` : "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(35px)",
            opacity: inView ? 1 : 0,
            transitionDelay: `${delay}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: "#1C1B1A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color: "#8B263E",
                    transition: "transform 0.3s ease",
                    transform: hovered ? "scale(1.1)" : "scale(1)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 20,
                    strokeWidth: 1.5,
                    color: "#8B263E"
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    marginBottom: "0.85rem",
                    fontWeight: 500,
                    lineHeight: 1.25
                },
                children: feature.title
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                lineNumber: 185,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.68)",
                    lineHeight: "1.65",
                    margin: 0
                },
                children: feature.description
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/Trust.tsx",
                lineNumber: 198,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/Trust.tsx",
        lineNumber: 153,
        columnNumber: 9
    }, this);
}
_s2(TrustFeatureBox, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c1 = TrustFeatureBox;
var _c, _c1;
__turbopack_context__.k.register(_c, "Trust");
__turbopack_context__.k.register(_c1, "TrustFeatureBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const faqs = [
    {
        question: "How long does a full home interior project take?",
        answer: "Typically, a full residential or commercial project takes between 45 to 90 days, depending on spatial scope, material selection, and custom modular workshop fabrication timelines."
    },
    {
        question: "Do you offer 3D design visualizations before execution?",
        answer: "Yes! Photorealistic 3D visualisations and 2D floor plans are a core part of our design workflow at Nuspace Creations. You approve every material texture and lighting detail before site execution."
    },
    {
        question: "What location does Nuspace Creations serve?",
        answer: "Nuspace Creations is based in Bengaluru, Karnataka (Abbigere studio). We execute luxury residential, villa, penthouse, and commercial turnkey interiors across all prime areas in Bengaluru."
    },
    {
        question: "Can I customize furniture, wardrobes, and kitchens?",
        answer: "Absoluty. We specialize in 100% bespoke craftsmanship. From custom teak joinery to modular kitchen cabinets and custom upholstered headboards, every element is made for your space."
    },
    {
        question: "What is your pricing and BOQ structure?",
        answer: "Our pricing is 100% transparent. We provide an itemized Bill of Quantities (BOQ) covering materials, civil work, electricals, and finishing with zero hidden charges."
    },
    {
        question: "What services are included in your turnkey management?",
        answer: "Our turnkey management covers initial consultation, 3D designs, material selection, off-site workshop manufacturing, site civil work, false ceiling, lighting, painting, and final deep cleaning with handover."
    },
    {
        question: "Do you offer post-completion support and warranty?",
        answer: "Yes, Nuspace Creations offers comprehensive warranties on custom joinery and hardware. We also provide post-completion walkthroughs and maintenance support for complete client peace of mind."
    }
];
function FAQ() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        style: {
            padding: "8rem 2rem",
            backgroundColor: "#FAF8F5"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "800px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        textAlign: "center",
                        marginBottom: "4rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "1rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                    lineNumber: 59,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.25em",
                                        textTransform: "uppercase",
                                        color: "#8B263E"
                                    },
                                    children: "FREQUENTLY ASKED QUESTIONS"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-serif)",
                                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                                color: "#1C1B1A",
                                fontWeight: 500
                            },
                            children: "Everything You Need to Know"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                            lineNumber: 75,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    },
                    children: faqs.map((faq, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderBottom: "1px solid rgba(28, 27, 26, 0.1)",
                                paddingBottom: "0.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpenIndex(openIndex === idx ? null : idx),
                                    style: {
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "1.25rem 0",
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "var(--font-serif)",
                                                fontSize: "1.35rem",
                                                fontWeight: 500,
                                                color: openIndex === idx ? "#8B263E" : "#1C1B1A",
                                                transition: "color 0.3s ease"
                                            },
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                            lineNumber: 111,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                                                transition: "transform 0.3s ease",
                                                color: openIndex === idx ? "#8B263E" : "#1C1B1A"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                                lineNumber: 129,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                            lineNumber: 122,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                    lineNumber: 97,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        maxHeight: openIndex === idx ? "200px" : "0",
                                        opacity: openIndex === idx ? 1 : 0,
                                        overflow: "hidden",
                                        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.95rem",
                                            color: "rgba(28, 27, 26, 0.75)",
                                            lineHeight: "1.7",
                                            paddingBottom: "1.5rem",
                                            margin: 0
                                        },
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                        lineNumber: 141,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                            lineNumber: 90,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
            lineNumber: 48,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/coastalinterio/src/components/FAQ.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_s(FAQ, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/gsap/dist/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$dist$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ContactForm() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [whatsappLink, setWhatsappLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        projectType: "Residential",
        location: "",
        budget: "",
        timeline: "",
        message: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactForm.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ContactForm.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".contact-left", {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%"
                        },
                        x: -40,
                        opacity: 0,
                        duration: 1.4,
                        ease: "power4.out"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".contact-right", {
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%"
                        },
                        x: 40,
                        opacity: 0,
                        duration: 1.4,
                        ease: "power4.out"
                    });
                }
            }["ContactForm.useEffect.ctx"], sectionRef);
            return ({
                "ContactForm.useEffect": ()=>ctx.revert()
            })["ContactForm.useEffect"];
        }
    }["ContactForm.useEffect"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const messageText = `Hi Nuspace Creations,\n\nI would like to enquire about an interior design project.\n\n📌 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n✉️ *Email:* ${formData.email}\n🏠 *Project Type:* ${formData.projectType}\n📍 *Location:* ${formData.location || "N/A"}\n💰 *Budget:* ${formData.budget || "N/A"}\n📝 *Details:* ${formData.message || "N/A"}`;
        const waUrl = `https://wa.me/919886527878?text=${encodeURIComponent(messageText)}`;
        setWhatsappLink(waUrl);
        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    source: "Main Contact Form"
                })
            });
        } catch (err) {
            console.error("Form submission error:", err);
        } finally{
            setIsSubmitting(false);
            setSubmitted(true);
            if ("TURBOPACK compile-time truthy", 1) {
                window.open(waUrl, "_blank", "noopener,noreferrer");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        ref: sectionRef,
        style: {
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            backgroundColor: "#1C1B1A",
            color: "#ffffff",
            position: "relative"
        },
        className: "jsx-c351b47515e34f55",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: "1 1 450px",
                    backgroundColor: "#141312",
                    padding: "7rem 4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRight: "1px solid rgba(255, 255, 255, 0.08)"
                },
                className: "jsx-c351b47515e34f55" + " " + "contact-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "480px",
                        margin: "0 auto",
                        width: "100%"
                    },
                    className: "jsx-c351b47515e34f55",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.75rem",
                                marginBottom: "1.5rem"
                            },
                            className: "jsx-c351b47515e34f55",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: "2rem",
                                        height: "2px",
                                        backgroundColor: "#8B263E"
                                    },
                                    className: "jsx-c351b47515e34f55"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 114,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        letterSpacing: "0.25em",
                                        textTransform: "uppercase",
                                        color: "#8B263E"
                                    },
                                    className: "jsx-c351b47515e34f55",
                                    children: "CONNECT WITH NUSPACE"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "var(--font-serif)",
                                fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                                lineHeight: "1.12",
                                marginBottom: "1.5rem",
                                color: "#FAF8F5"
                            },
                            className: "jsx-c351b47515e34f55",
                            children: [
                                "Let's Create ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                    className: "jsx-c351b47515e34f55"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 138,
                                    columnNumber: 38
                                }, this),
                                " Your Space."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                            lineNumber: 129,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "rgba(255,255,255,0.75)",
                                fontSize: "1.05rem",
                                lineHeight: 1.7,
                                marginBottom: "3rem"
                            },
                            className: "jsx-c351b47515e34f55",
                            children: "Tell us about your project and let's start turning your vision into a space designed for the way you live and experience it."
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                            lineNumber: 141,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                                marginBottom: "3rem"
                            },
                            className: "jsx-c351b47515e34f55",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+919886527878",
                                    style: {
                                        textDecoration: "none",
                                        color: "#ffffff",
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "flex-start"
                                    },
                                    className: "jsx-c351b47515e34f55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "3rem",
                                                height: "3rem",
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(139, 38, 62, 0.2)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#8B263E",
                                                flexShrink: 0
                                            },
                                            className: "jsx-c351b47515e34f55",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 171,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 158,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c351b47515e34f55",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.75rem",
                                                        color: "rgba(255,255,255,0.5)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.15em",
                                                        display: "block"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "Call Us Directly"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        fontSize: "1.15rem",
                                                        color: "#ffffff"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "+91 98865 27878"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 173,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/919886527878?text=Hi%20Nuspace%20Decor,%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    style: {
                                        textDecoration: "none",
                                        color: "#ffffff",
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "flex-start"
                                    },
                                    className: "jsx-c351b47515e34f55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "3rem",
                                                height: "3rem",
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(37, 211, 102, 0.2)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#25D366",
                                                flexShrink: 0
                                            },
                                            className: "jsx-c351b47515e34f55",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 186,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c351b47515e34f55",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.75rem",
                                                        color: "rgba(255,255,255,0.5)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.15em",
                                                        display: "block"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "WhatsApp Instant Chat"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        fontSize: "1.15rem",
                                                        color: "#25D366"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "+91 98865 27878"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 201,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "flex-start"
                                    },
                                    className: "jsx-c351b47515e34f55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "3rem",
                                                height: "3rem",
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(139, 38, 62, 0.2)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#8B263E",
                                                flexShrink: 0
                                            },
                                            className: "jsx-c351b47515e34f55",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 222,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 209,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c351b47515e34f55",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.75rem",
                                                        color: "rgba(255,255,255,0.5)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.15em",
                                                        display: "block"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "Email Inquiries"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.25rem"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:nuspacebangalore@gmail.com",
                                                            style: {
                                                                fontSize: "1rem",
                                                                color: "#ffffff",
                                                                textDecoration: "none"
                                                            },
                                                            className: "jsx-c351b47515e34f55",
                                                            children: "nuspacebangalore@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:nuspacedecor@gmail.com",
                                                            style: {
                                                                fontSize: "1rem",
                                                                color: "rgba(255,255,255,0.85)",
                                                                textDecoration: "none"
                                                            },
                                                            className: "jsx-c351b47515e34f55",
                                                            children: "nuspacedecor@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 224,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 208,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "flex-start"
                                    },
                                    className: "jsx-c351b47515e34f55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "3rem",
                                                height: "3rem",
                                                borderRadius: "50%",
                                                backgroundColor: "rgba(255,255,255,0.06)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#ffffff",
                                                flexShrink: 0
                                            },
                                            className: "jsx-c351b47515e34f55",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 248,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 235,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-c351b47515e34f55",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: "0.75rem",
                                                        color: "rgba(255,255,255,0.5)",
                                                        textTransform: "uppercase",
                                                        letterSpacing: "0.15em",
                                                        display: "block"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "Studio Location"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: "0.95rem",
                                                        color: "rgba(255,255,255,0.85)",
                                                        margin: 0,
                                                        lineHeight: 1.5
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "Vinayaka Layout, Abbigere, Bengaluru, Karnataka – 560090"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 250,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 234,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "1.25rem",
                                        alignItems: "center",
                                        paddingTop: "1rem",
                                        borderTop: "1px solid rgba(255,255,255,0.08)"
                                    },
                                    className: "jsx-c351b47515e34f55",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            size: 18,
                                            color: "rgba(255,255,255,0.4)"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 260,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontSize: "0.8rem",
                                                color: "rgba(255,255,255,0.5)",
                                                letterSpacing: "0.05em"
                                            },
                                            className: "jsx-c351b47515e34f55",
                                            children: [
                                                "GSTIN: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    style: {
                                                        color: "rgba(255,255,255,0.8)"
                                                    },
                                                    className: "jsx-c351b47515e34f55",
                                                    children: "29DVLPP6022C1ZH"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 40
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                            lineNumber: 261,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                    lineNumber: 259,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: "1 1 550px",
                    padding: "7rem 4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#1C1B1A"
                },
                className: "jsx-c351b47515e34f55" + " " + "contact-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: "600px",
                        margin: "0 auto",
                        width: "100%"
                    },
                    className: "jsx-c351b47515e34f55",
                    children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "rgba(139, 38, 62, 0.15)",
                            border: "1px solid #8B263E",
                            borderRadius: "1.5rem",
                            padding: "4rem 3rem",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1.5rem"
                        },
                        className: "jsx-c351b47515e34f55",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 48,
                                color: "#8B263E"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 296,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "2rem",
                                    color: "#ffffff",
                                    margin: 0
                                },
                                className: "jsx-c351b47515e34f55",
                                children: "Project Inquiry Received!"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 297,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: "1.05rem",
                                    lineHeight: 1.6
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    "Thank you for contacting Nuspace Creations. Your enquiry details have been automatically sent to ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-c351b47515e34f55",
                                        children: "nuspacebangalore@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 301,
                                        columnNumber: 130
                                    }, this),
                                    " and ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-c351b47515e34f55",
                                        children: "nuspacedecor@gmail.com"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 301,
                                        columnNumber: 178
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 300,
                                columnNumber: 29
                            }, this),
                            whatsappLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: whatsappLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    backgroundColor: "#25D366",
                                    borderColor: "#25D366",
                                    color: "#ffffff",
                                    padding: "0.85rem 1.75rem",
                                    fontSize: "0.9rem",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.5rem"
                                },
                                className: "jsx-c351b47515e34f55" + " " + "btn-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 321,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c351b47515e34f55",
                                        children: "Continue on WhatsApp (+91 98865 27878)"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 322,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 304,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSubmitted(false),
                                style: {
                                    color: "#ffffff",
                                    borderColor: "rgba(255,255,255,0.3)",
                                    marginTop: "0.5rem"
                                },
                                className: "jsx-c351b47515e34f55" + " " + "btn-secondary",
                                children: "Submit Another Inquiry"
                            }, void 0, false, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 325,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                        lineNumber: 283,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gap: "1.5rem"
                        },
                        className: "jsx-c351b47515e34f55",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 1"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Full Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 336,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        required: true,
                                        placeholder: "Your Name",
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 337,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 335,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 1"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Phone Number *"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 348,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "tel",
                                        required: true,
                                        placeholder: "+91 98865 27878",
                                        value: formData.phone,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                phone: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 349,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 347,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 1"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Email Address *"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 360,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        required: true,
                                        placeholder: "name@example.com",
                                        value: formData.email,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                email: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 361,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 359,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 1"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Project Type"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 372,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: formData.projectType,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                projectType: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "#141312",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Residential",
                                                className: "jsx-c351b47515e34f55",
                                                children: "Residential"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 378,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Commercial",
                                                className: "jsx-c351b47515e34f55",
                                                children: "Commercial"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 379,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Renovation",
                                                className: "jsx-c351b47515e34f55",
                                                children: "Renovation"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 380,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Turnkey Project",
                                                className: "jsx-c351b47515e34f55",
                                                children: "Turnkey Project"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 381,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Other",
                                                className: "jsx-c351b47515e34f55",
                                                children: "Other"
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                                lineNumber: 382,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 373,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 371,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 1"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Location / Area in Bengaluru"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 387,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g. Indiranagar, Sadashivanagar",
                                        value: formData.location,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                location: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 388,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 386,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 1"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Approximate Budget"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 398,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "e.g. ₹15L - ₹30L+",
                                        value: formData.budget,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                budget: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 399,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 397,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 2"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        style: {
                                            display: "block",
                                            fontSize: "0.75rem",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.15em",
                                            marginBottom: "0.5rem",
                                            color: "rgba(255,255,255,0.8)"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Project Details / Message"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 409,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 4,
                                        placeholder: "Tell us about your space, timeline, and vision...",
                                        value: formData.message,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                message: e.target.value
                                            }),
                                        style: {
                                            width: "100%",
                                            padding: "1rem 1.25rem",
                                            borderRadius: "0.75rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            color: "#ffffff",
                                            fontFamily: "var(--font-sans)",
                                            resize: "none",
                                            outline: "none"
                                        },
                                        className: "jsx-c351b47515e34f55"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 410,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 408,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                style: {
                                    gridColumn: "span 2",
                                    padding: "1.2rem",
                                    justifyContent: "center",
                                    marginTop: "0.5rem",
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? "not-allowed" : "pointer"
                                },
                                className: "jsx-c351b47515e34f55" + " " + "btn-primary",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-c351b47515e34f55",
                                        children: isSubmitting ? "Sending Inquiry..." : "Start a Conversation"
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 432,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 433,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 419,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    gridColumn: "span 2",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.5rem",
                                    color: "rgba(255,255,255,0.4)"
                                },
                                className: "jsx-c351b47515e34f55",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 437,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: "0.75rem"
                                        },
                                        className: "jsx-c351b47515e34f55",
                                        children: "Your privacy is guaranteed. No unsolicited marketing."
                                    }, void 0, false, {
                                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                        lineNumber: 438,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                                lineNumber: 436,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                        lineNumber: 334,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                    lineNumber: 281,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
                lineNumber: 270,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c351b47515e34f55",
                children: "@media (width<=768px){.contact-left.jsx-c351b47515e34f55,.contact-right.jsx-c351b47515e34f55{padding:3.5rem 1.5rem!important}.contact-form-grid.jsx-c351b47515e34f55{grid-template-columns:1fr!important}.contact-form-grid.jsx-c351b47515e34f55>div.jsx-c351b47515e34f55,.contact-form-grid.jsx-c351b47515e34f55 button.jsx-c351b47515e34f55{grid-column:span 1!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coastalinterio/src/components/ContactForm.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
_s(ContactForm, "lwgvvUiqIJUcAqTP7hDYMohuY08=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
"use client";
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            backgroundColor: "#141312",
            color: "#ffffff",
            position: "relative",
            padding: "6rem 2rem 3rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: "1280px",
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "4rem",
                        marginBottom: "6rem"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.75rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "38px",
                                                height: "38px",
                                                borderRadius: "50%",
                                                backgroundColor: "#8B263E",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "#ffffff",
                                                fontWeight: 700,
                                                fontFamily: "var(--font-cormorant)",
                                                fontSize: "0.95rem",
                                                letterSpacing: "0.05em"
                                            },
                                            children: "NC"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontFamily: "var(--font-cormorant)",
                                                        fontSize: "1.5rem",
                                                        fontWeight: 700,
                                                        margin: 0,
                                                        lineHeight: 1
                                                    },
                                                    children: "NUSPACE CREATIONS"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "var(--font-sans)",
                                                        fontSize: "7px",
                                                        fontWeight: 600,
                                                        letterSpacing: "0.4em",
                                                        textTransform: "uppercase",
                                                        color: "#8B263E"
                                                    },
                                                    children: "DREAMS TO PERFECTION"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: "rgba(255, 255, 255, 0.65)",
                                        fontSize: "0.925rem",
                                        lineHeight: "1.7",
                                        margin: 0
                                    },
                                    children: "Bespoke interior design studio specializing in luxury residential & commercial spaces across Bengaluru. Est. 2015."
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 56,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.2em",
                                        color: "#8B263E"
                                    },
                                    children: "Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.75rem"
                                    },
                                    children: [
                                        "Home",
                                        "About",
                                        "Services",
                                        "Philosophy",
                                        "Process",
                                        "Portfolio",
                                        "Team",
                                        "Contact"
                                    ].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `#${link.toLowerCase()}`,
                                                style: {
                                                    color: "rgba(255, 255, 255, 0.7)",
                                                    textDecoration: "none",
                                                    fontSize: "0.9rem",
                                                    transition: "color 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = "#8B263E",
                                                onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)",
                                                children: link
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 37
                                            }, this)
                                        }, link, false, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.2em",
                                        color: "#8B263E"
                                    },
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    style: {
                                        listStyle: "none",
                                        padding: 0,
                                        margin: 0,
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.75rem"
                                    },
                                    children: [
                                        "Residential & Commercial",
                                        "Renovation & Remodeling",
                                        "Turnkey Project Management",
                                        "End-to-End Interiors"
                                    ].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#services",
                                                style: {
                                                    color: "rgba(255, 255, 255, 0.7)",
                                                    textDecoration: "none",
                                                    fontSize: "0.9rem",
                                                    transition: "color 0.3s ease"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = "#8B263E",
                                                onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)",
                                                children: service
                                            }, void 0, false, {
                                                fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                lineNumber: 90,
                                                columnNumber: 37
                                            }, this)
                                        }, service, false, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 89,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                            lineNumber: 83,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "1.25rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    style: {
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.2em",
                                        color: "#8B263E"
                                    },
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.85rem",
                                        fontSize: "0.875rem",
                                        color: "rgba(255,255,255,0.75)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "0.75rem",
                                                alignItems: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 14,
                                                    color: "#8B263E"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+919886527878",
                                                    style: {
                                                        color: "#ffffff",
                                                        textDecoration: "none"
                                                    },
                                                    children: "+91 98865 27878"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 109,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "0.75rem",
                                                alignItems: "flex-start"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 14,
                                                    color: "#8B263E",
                                                    style: {
                                                        marginTop: "3px",
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.25rem"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:nuspacebangalore@gmail.com",
                                                            style: {
                                                                color: "#ffffff",
                                                                textDecoration: "none"
                                                            },
                                                            children: "nuspacebangalore@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "mailto:nuspacedecor@gmail.com",
                                                            style: {
                                                                color: "rgba(255,255,255,0.85)",
                                                                textDecoration: "none"
                                                            },
                                                            children: "nuspacedecor@gmail.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: "flex",
                                                gap: "0.75rem",
                                                alignItems: "flex-start"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 14,
                                                    color: "#8B263E",
                                                    style: {
                                                        marginTop: "3px",
                                                        flexShrink: 0
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Vinayaka Layout, Abbigere, Bengaluru, Karnataka – 560090"
                                                }, void 0, false, {
                                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "0.5rem",
                                                fontSize: "0.75rem",
                                                color: "rgba(255,255,255,0.4)"
                                            },
                                            children: "GSTIN: 29DVLPP6022C1ZH"
                                        }, void 0, false, {
                                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                            lineNumber: 124,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        paddingTop: "2rem",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        fontSize: "0.8rem",
                        color: "rgba(255, 255, 255, 0.4)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " Nuspace Creations. All Rights Reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                            lineNumber: 145,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                gap: "1.5rem"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Est. 2015 Bengaluru"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 149,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Bespoke Interior Studio"
                                }, void 0, false, {
                                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                                    lineNumber: 150,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                            lineNumber: 148,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/Footer.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/coastalinterio/src/components/Footer.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/coastalinterio/src/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/coastalinterio/src/components/FloatingElements.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingElements
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coastalinterio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function FloatingElements() {
    _s();
    const [showScrollToTop, setShowScrollToTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloatingElements.useEffect": ()=>{
            const handleScroll = {
                "FloatingElements.useEffect.handleScroll": ()=>{
                    setShowScrollToTop(window.scrollY > 600);
                }
            }["FloatingElements.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "FloatingElements.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["FloatingElements.useEffect"];
        }
    }["FloatingElements.useEffect"], []);
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    const whatsappUrl = "https://wa.me/919886527878?text=Hi%20Nuspace%20Creations,%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.";
    const phoneUrl = "tel:+919886527878";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Chat on WhatsApp with Nuspace Creations",
                style: {
                    position: "fixed",
                    bottom: "2.5rem",
                    right: "2.5rem",
                    width: "3.75rem",
                    height: "3.75rem",
                    backgroundColor: "#25D366",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 15px 35px rgba(37, 211, 102, 0.4)",
                    zIndex: 999,
                    cursor: "pointer",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none"
                },
                onMouseEnter: (e)=>e.currentTarget.style.transform = "scale(1.1)",
                onMouseLeave: (e)=>e.currentTarget.style.transform = "scale(1)",
                className: "jsx-7e042395a8fcf645" + " " + "whatsapp-float-btn whatsapp-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 24 24",
                        fill: "#ffffff",
                        xmlns: "http://www.w3.org/2000/svg",
                        "aria-hidden": "true",
                        className: "jsx-7e042395a8fcf645",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413",
                            className: "jsx-7e042395a8fcf645"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: "115%",
                            backgroundColor: "#141312",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            padding: "0.6rem 1.1rem",
                            borderRadius: "9999px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            whiteSpace: "nowrap",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            pointerEvents: "none"
                        },
                        className: "jsx-7e042395a8fcf645" + " " + "whatsapp-float-label",
                        children: "Chat with Nuspace Creations"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: phoneUrl,
                "aria-label": "Call Nuspace Creations directly at +91 98865 27878",
                style: {
                    position: "fixed",
                    bottom: "7rem",
                    right: "2.5rem",
                    width: "3.75rem",
                    height: "3.75rem",
                    backgroundColor: "#CE2029",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 15px 35px rgba(206, 32, 41, 0.45)",
                    zIndex: 999,
                    cursor: "pointer",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none"
                },
                onMouseEnter: (e)=>e.currentTarget.style.transform = "scale(1.1)",
                onMouseLeave: (e)=>e.currentTarget.style.transform = "scale(1)",
                className: "jsx-7e042395a8fcf645" + " " + "call-float-btn",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                        size: 24,
                        color: "#ffffff",
                        strokeWidth: 1.75
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: "115%",
                            backgroundColor: "#141312",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            padding: "0.6rem 1.1rem",
                            borderRadius: "9999px",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            whiteSpace: "nowrap",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            color: "#ffffff",
                            pointerEvents: "none"
                        },
                        className: "jsx-7e042395a8fcf645" + " " + "call-float-label",
                        children: "Call +91 98865 27878"
                    }, void 0, false, {
                        fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: scrollToTop,
                style: {
                    position: "fixed",
                    bottom: "11.5rem",
                    right: "2.5rem",
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#1C1B1A",
                    color: "#ffffff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    zIndex: 998,
                    cursor: "pointer",
                    opacity: showScrollToTop ? 1 : 0,
                    transform: showScrollToTop ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.4s ease",
                    border: "1px solid rgba(255,255,255,0.15)"
                },
                className: "jsx-7e042395a8fcf645" + " " + "scroll-top-btn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                    size: 18,
                    color: "#ffffff",
                    strokeWidth: 1.75
                }, void 0, false, {
                    fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                    lineNumber: 158,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(20, 19, 18, 0.95)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                    padding: "0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom))",
                    display: "none",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.75rem",
                    zIndex: 1001,
                    boxShadow: "0 -10px 30px rgba(0,0,0,0.4)"
                },
                className: "jsx-7e042395a8fcf645" + " " + "mobile-cta-bar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "tel:+919886527878",
                    style: {
                        backgroundColor: "#CE2029",
                        color: "#ffffff",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                        padding: "0.65rem 1.4rem",
                        borderRadius: "9999px",
                        width: "100%",
                        maxWidth: "340px",
                        boxShadow: "0 4px 15px rgba(206, 32, 41, 0.4)"
                    },
                    className: "jsx-7e042395a8fcf645",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                            lineNumber: 204,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "jsx-7e042395a8fcf645",
                            children: "Call Us: +91 98865 27878"
                        }, void 0, false, {
                            fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                            lineNumber: 205,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/coastalinterio/src/components/FloatingElements.tsx",
                lineNumber: 162,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coastalinterio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "7e042395a8fcf645",
                children: "@media (width<=768px){.mobile-cta-bar.jsx-7e042395a8fcf645{display:flex!important}.whatsapp-float-btn.jsx-7e042395a8fcf645{bottom:calc(4.75rem + env(safe-area-inset-bottom))!important;width:3.25rem!important;height:3.25rem!important;right:1.15rem!important}.call-float-btn.jsx-7e042395a8fcf645{bottom:calc(8.6rem + env(safe-area-inset-bottom))!important;width:3.25rem!important;height:3.25rem!important;right:1.15rem!important}.whatsapp-float-label.jsx-7e042395a8fcf645,.call-float-label.jsx-7e042395a8fcf645{display:none!important}.scroll-top-btn.jsx-7e042395a8fcf645{bottom:calc(12.4rem + env(safe-area-inset-bottom))!important;width:2.6rem!important;height:2.6rem!important;right:1.15rem!important}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
}
_s(FloatingElements, "hqSyWHs0DsRDJytMcJCEGQk4FsY=");
_c = FloatingElements;
var _c;
__turbopack_context__.k.register(_c, "FloatingElements");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=coastalinterio_src_4b04c8df._.js.map