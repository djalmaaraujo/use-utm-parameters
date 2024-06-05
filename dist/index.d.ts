export type UTM_PARAMETER = "utm_source" | "utm_medium" | "utm_campaign" | "utm_term" | "utm_content" | "utm_id" | "source" | "medium" | "campaign" | "term" | "content" | "id";
export type UTMParameters = {
    [key in UTM_PARAMETER]?: string | null;
};
export type UTMOption = {
    format: "short" | "default";
};
export declare const useUTMParameters: (url?: string, options?: UTMOption) => UTMParameters;
export declare const getParameterName: (key: string, format?: UTMOption["format"]) => UTM_PARAMETER | null;
