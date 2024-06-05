"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const _1 = require(".");
(0, ava_1.default)("useUTMParameters — getParameterName", (t) => {
    t.is((0, _1.getParameterName)("utm_source"), "utm_source");
    t.is((0, _1.getParameterName)("utm_source", "short"), "source");
    t.is((0, _1.getParameterName)("utm_medium"), "utm_medium");
    t.is((0, _1.getParameterName)("utm_medium", "short"), "medium");
    t.is((0, _1.getParameterName)("utm_campaign"), "utm_campaign");
    t.is((0, _1.getParameterName)("utm_campaign", "short"), "campaign");
    t.is((0, _1.getParameterName)("utm_term"), "utm_term");
    t.is((0, _1.getParameterName)("utm_term", "short"), "term");
    t.is((0, _1.getParameterName)("utm_content"), "utm_content");
    t.is((0, _1.getParameterName)("utm_content", "short"), "content");
});
(0, ava_1.default)("useUTMParameters — empty URL", (t) => {
    t.deepEqual((0, _1.useUTMParameters)(""), {});
});
(0, ava_1.default)("useUTMParameters — empty URL with options", (t) => {
    t.deepEqual((0, _1.useUTMParameters)("", { format: "short" }), {});
});
(0, ava_1.default)("useUTMParameters — no UTM parameters", (t) => {
    t.deepEqual((0, _1.useUTMParameters)("https://example.com"), {});
});
(0, ava_1.default)("useUTMParameters — no UTM parameters with options", (t) => {
    t.deepEqual((0, _1.useUTMParameters)("https://example.com", { format: "short" }), {});
});
(0, ava_1.default)("useUTMParameters — UTM parameters", (t) => {
    t.deepEqual((0, _1.useUTMParameters)("https://example.com?utm_source=source&utm_medium=medium&utm_campaign=campaign&utm_term=term&utm_content=content"), {
        utm_source: "source",
        utm_medium: "medium",
        utm_campaign: "campaign",
        utm_term: "term",
        utm_content: "content",
    });
});
(0, ava_1.default)("useUTMParameters — UTM parameters with options", (t) => {
    t.deepEqual((0, _1.useUTMParameters)("https://example.com?utm_source=source&utm_medium=medium&utm_campaign=campaign&utm_term=term&utm_content=content", { format: "short" }), {
        source: "source",
        medium: "medium",
        campaign: "campaign",
        term: "term",
        content: "content",
    });
});
(0, ava_1.default)("useUTMParameters — UTM parameters missing a few params", (t) => {
    t.deepEqual((0, _1.useUTMParameters)("https://example.com?utm_source=source&utm_medium=medium"), {
        utm_source: "source",
        utm_medium: "medium",
    });
});
