import LoginPage from "./views/loginPage";
import RegisterPage from "./views/registerPage";
import Dashboard from "./views/dashboard";
import FullScreenMap from "./views/fullScreenMap";
import GoogleMaps from "./views/googleMaps";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    path: "/pages",
    name: "Pages",
    state: "openPages",
    icon: "now-ui-icons design_image",
    views: [
      {
        path: "/login-page",
        name: "Login Page",
        mini: "LP",
        component: LoginPage,
        layout: "/admin"
      },
      {
        path: "/register-page",
        name: "Register Page",
        mini: "RP",
        component: RegisterPage,
        layout: "/admin"
      },
      {
        collapse: true,
        path: "/maps",
        name: "Maps",
        state: "openMaps",
        icon: "now-ui-icons location_pin",
        views: [
          {
            path: "/google-maps",
            name: "Google Maps",
            mini: "GM",
            component: GoogleMaps,
            layout: "/abc"
          },
          {
            path: "/full-screen-maps",
            name: "Full Screen Map",
            mini: "FSM",
            component: FullScreenMap,
            layout: "/def"
          }
        ]
      }
    ]
  }
];

export default routes;
