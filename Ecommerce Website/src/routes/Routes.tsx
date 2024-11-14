import { Route, Routes as BrowserRoutes } from "react-router-dom";
import { routes } from "../utils/constants";
import HomeView from "../views/HomeView";
import Layout from "../layout/Layout";
import ShopView from "../views/ShopView";
import CartView from "../views/CartView";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path={routes.home} element={<Layout />}>
        <Route path={routes.home} element={<HomeView />} />
        <Route path={routes.shop} element={<ShopView />} />
        <Route path={routes.cart} element={<CartView />} />
      </Route>
    </BrowserRoutes>
  );
};

export default Routes;
