import { Route, Routes as BrowserRoutes } from "react-router-dom";
import { routes } from "../utils/constants";
import HomeView from "../views/HomeView";
import Layout from "../layout/Layout";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path={routes.home} element={<Layout />}>
        <Route path={routes.home} element={<HomeView />} />
      </Route>
    </BrowserRoutes>
  );
};

export default Routes;
