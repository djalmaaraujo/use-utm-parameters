# useUTMParameters() Hook

> Get all valid [UTM params](https://en.wikipedia.org/wiki/UTM_parameters) from a string.

## What is UTM Code?

> A UTM (Urchin Tracking Module) code is a snippet of text added to the end of a URL to track the metrics and performance of a specific digital marketing campaign. UTM codes can contain up to five parameters: Campaign, source, medium, content, and term. [Reference](https://blog.hubspot.com/marketing/what-are-utm-tracking-codes-ht#utmcode).

## Install

```sh
npm install use-utm-parameters
```

## Usage

```js
import { useUTMParameters } from "use-utm-parameters";

// Common usage
const params = useUTMParameters(
  "?utm_source=xxxx&utm_campaign=2024_show&utm_term=what"
);

//=> { "utm_term": "what", "utm_source": "xxxx", "utm_campaign": "2024_show" }

const params = useUTMParameters(
  "?utm_source=xxxx&utm_campaign=2024_show&utm_term=what",
  {
    format: "short", // Removes the UTM prefix from keys
  }
);

//=> { "term": "what", "source": "xxxx", "campaign": "2024_show" }

const params = useUTMParameters("?utm_campaign=2024_show&utm_term=what", {
  format: "short",
});

//=> { "term": "what", "campaign": "2024_show" }

const params = useUTMParameters("");
//=> {}

const params = useUTMParameters();
//=> {}
```

> [!NOTE]
> This library will not grab the query params from the URL. You can use `window.location.search` or any other method.

## API

### useUTMParameters(value, options)

- `value`: A URL-like string containing the utm parameters.
- `options`: An objecting containing one or more of the following keys:

| Option | Type   | Description                                                                            |
| ------ | ------ | -------------------------------------------------------------------------------------- |
| format | String | `short` OR `default`. short will remove the `utm` prefix from keys. See examples above |
