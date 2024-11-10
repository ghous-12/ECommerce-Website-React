import { Route, Routes as BrowserRoutes } from "react-router-dom";
import { routes } from "../utils/constants";
import HomeView from "../views/HomeView";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path={routes.home} element={<HomeView />} />
    </BrowserRoutes>
  );
};

export default Routes;
