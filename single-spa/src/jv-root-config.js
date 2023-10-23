import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@jv/react-single",
  app: () =>
    System.import(
      "@jv/react-single",
    ),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@jv/react-multiples",
  app: () =>
    System.import(
      "@jv/react-multiples",
    ),
  activeWhen: (location) => location.pathname === "/react-multiples",
});

registerApplication({
  name: "@jv/react-route",
  app: () =>
    System.import(
      "@jv/react-route",
    ),
  activeWhen: (location) => location.pathname === "/react-route",
});



start({
  urlRerouteOnly: true,
});
