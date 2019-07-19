import Dashboard from "./views/adminView/dashboard";
import Wizard from "./views/adminView/automate/sequence/wizard";
import Integrations from "./views/adminView/integrations";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "now-ui-icons design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/automate",
    name: "Automate",
    component: Wizard,
    icon: "now-ui-icons location_pin",
    layout: "/admin"
  },
  {
    path: "/integrations",
    name: "Integrations",
    component: Integrations,
    icon: "now-ui-icons location_pin",
    layout: "/admin"
  }
];

export default routes;
