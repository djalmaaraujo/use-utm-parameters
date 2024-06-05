export type UTM_PARAMETER =
  | "utm_source"
  | "utm_medium"
  | "utm_campaign"
  | "utm_term"
  | "utm_content"
  | "utm_id"
  | "source"
  | "medium"
  | "campaign"
  | "term"
  | "content"
  | "id";

export type UTMParameters = {
  [key in UTM_PARAMETER]?: string | null;
};

export type UTMOption = {
  format: "short" | "default";
};

export const useUTMParameters = (
  url: string = "",
  options: UTMOption = {
    format: "default",
  }
): UTMParameters => {
  const urlParsed = url.toString().trim().replace("?", "&"); // Remove first ? if exists

  if (!url || !urlParsed.includes("utm_")) {
    return {};
  }

  const parts = urlParsed.split("&");
  const utmParameters: UTMParameters = {};

  parts.forEach((part: string) => {
    const [key, value] = part.split("=");
    const validParameter = getParameterName(key, options.format);

    if (!validParameter) {
      return;
    }

    utmParameters[validParameter] = value;
  });

  return utmParameters;
};

export const getParameterName = (
  key: string,
  format: UTMOption["format"] = "default"
): UTM_PARAMETER | null => {
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
