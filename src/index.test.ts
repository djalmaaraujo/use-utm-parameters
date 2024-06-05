import test from "ava";
import { useUTMParameters, getParameterName } from ".";

test("useUTMParameters — getParameterName", (t) => {
  t.is(getParameterName("utm_source"), "utm_source");
  t.is(getParameterName("utm_source", "short"), "source");
  t.is(getParameterName("utm_medium"), "utm_medium");
  t.is(getParameterName("utm_medium", "short"), "medium");
  t.is(getParameterName("utm_campaign"), "utm_campaign");
  t.is(getParameterName("utm_campaign", "short"), "campaign");
  t.is(getParameterName("utm_term"), "utm_term");
  t.is(getParameterName("utm_term", "short"), "term");
  t.is(getParameterName("utm_content"), "utm_content");
  t.is(getParameterName("utm_content", "short"), "content");
});

test("useUTMParameters — empty URL", (t) => {
  t.deepEqual(useUTMParameters(""), {});
});

test("useUTMParameters — empty URL with options", (t) => {
  t.deepEqual(useUTMParameters("", { format: "short" }), {});
});

test("useUTMParameters — no UTM parameters", (t) => {
  t.deepEqual(useUTMParameters("https://example.com"), {});
});

test("useUTMParameters — no UTM parameters with options", (t) => {
  t.deepEqual(useUTMParameters("https://example.com", { format: "short" }), {});
});

test("useUTMParameters — UTM parameters", (t) => {
  t.deepEqual(
    useUTMParameters(
      "https://example.com?utm_source=source&utm_medium=medium&utm_campaign=campaign&utm_term=term&utm_content=content"
    ),
    {
      utm_source: "source",
      utm_medium: "medium",
      utm_campaign: "campaign",
      utm_term: "term",
      utm_content: "content",
    }
  );
});

test("useUTMParameters — UTM parameters with options", (t) => {
  t.deepEqual(
    useUTMParameters(
      "https://example.com?utm_source=source&utm_medium=medium&utm_campaign=campaign&utm_term=term&utm_content=content",
      { format: "short" }
    ),
    {
      source: "source",
      medium: "medium",
      campaign: "campaign",
      term: "term",
      content: "content",
    }
  );
});

test("useUTMParameters — UTM parameters missing a few params", (t) => {
  t.deepEqual(
    useUTMParameters("https://example.com?utm_source=source&utm_medium=medium"),
    {
      utm_source: "source",
      utm_medium: "medium",
    }
  );
});
