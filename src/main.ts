// If you're using one of our framework SDK packages, like `@sentry/react`,
// substitute its name for `@sentry/browser` here
import * as Sentry from "@sentry/browser";

/**
 * when WITH_SENTRY is true, this will produce following error.
 *
 * Access to fetch at 'http://localhost:3000/real-download-path' (redirected from 'http://localhost:5173/api/download') from origin 'http://localhost:5173' has been blocked by CORS policy: Request header field baggage is not allowed by Access-Control-Allow-Headers in preflight response.
 */
const WITH_SENTRY = true;

if (WITH_SENTRY) {
  Sentry.init({
    dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",

    integrations: [new Sentry.BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
    // Option 2: Disable distributed tracing. You can also make this more fine-grained and only include some domains via regex or string.include matching.
    // tracePropagationTargets: []
  });
}

fetch("/api/download")
  .then(() => {
    document.documentElement.append("download ok");
  })
  .catch((e) => {
    console.log(e);
    document.documentElement.append("download failed");
  });
