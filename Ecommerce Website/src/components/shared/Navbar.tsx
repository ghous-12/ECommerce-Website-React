import { Link, useLocation } from "react-router-dom";
import { routes } from "../../utils/constants";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <ul className="w-full flex justify-center gap-x-20 text-lg font-medium bg-black items-center">
        <Link
          to={routes.home}
          className={`py-3 px-10 hover:cursor-pointer text-white hover:bg-gray-500${
            location.pathname === routes.home ? " text-amber-400" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={routes.shop}
          className={`py-3 px-10 hover:cursor-pointer text-white hover:bg-gray-500${
            location.pathname === routes.shop ? " text-amber-400" : ""
          }`}
        >
          Shop
        </Link>
        <Link
          to={routes.cart}
          className={`py-3 px-10 hover:cursor-pointer text-white hover:bg-gray-500${
            location.pathname === routes.cart ? " text-amber-400" : ""
          }`}
        >
          Cart
        </Link>
      </ul>
      <div></div>
    </>
  );
};

export default Navbar;
