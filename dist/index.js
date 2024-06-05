"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParameterName = exports.useUTMParameters = void 0;
const useUTMParameters = (url = "", options = {
    format: "default",
}) => {
    const urlParsed = url.toString().trim().replace("?", "&"); // Remove first ? if exists
    if (!url || !urlParsed.includes("utm_")) {
        return {};
    }
    const parts = urlParsed.split("&");
    const utmParameters = {};
    parts.forEach((part) => {
        const [key, value] = part.split("=");
        const validParameter = (0, exports.getParameterName)(key, options.format);
        if (!validParameter) {
            return;
        }
        utmParameters[validParameter] = value;
    });
    return utmParameters;
};
exports.useUTMParameters = useUTMParameters;
const getParameterName = (key, format = "default") => {
    const isShort = format === "short";
    if (key === "utm_source") {
        return isShort ? "source" : "utm_source";
    }
    if (key === "utm_medium") {
        return isShort ? "medium" : "utm_medium";
    }
    if (key === "utm_campaign") {
        return isShort ? "campaign" : "utm_campaign";
    }
    if (key === "utm_term") {
        return isShort ? "term" : "utm_term";
    }
    if (key === "utm_content") {
        return isShort ? "content" : "utm_content";
    }
    if (key === "utm_id") {
        return isShort ? "id" : "utm_id";
    }
    return null;
};
exports.getParameterName = getParameterName;
