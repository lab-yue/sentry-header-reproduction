# Sentry-header-reproduction

reproduction of https://github.com/getsentry/sentry-javascript/issues/6077#issuecomment-1639762113

## Setup

NOTE: the default port for reproduction is `5173`

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/lab-yue/sentry-header-reproduction)

or

- pnpm i
- pnpm dev

## Expectation

When `WITH_SENTRY` in `src/main.ts` set to true, `http://localhost:5173/` will display "download failed" with following error.

```
Access to fetch at 'http://localhost:3000/real-download-path' (redirected from 'http://localhost:5173/api/download') from origin 'http://localhost:5173' has been blocked by CORS policy: Request header field baggage is not allowed by Access-Control-Allow-Headers in preflight response.
```

By setting `WITH_SENTRY` to `false`, the error will be resolved.
