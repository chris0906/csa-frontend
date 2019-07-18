// import * as Sentry from "@sentry/browser";

const init = () => {
  // Sentry.init({
  //   dsn: "https://fd6554d0ea4f4b4e93419a49f5c884ea@sentry.io/1501063"
  // });
};

const logError = error => {
  // Sentry.captureException(error);
};

export default {
  init,
  logError
};
