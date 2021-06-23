// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn: "https://93070fd2c7624581a5a6c8d4bafda14e@o863416.ingest.sentry.io/5822221",
  //   integrations: [new Integrations.BrowserTracing()],
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  console.log(error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
