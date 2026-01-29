import { useLocation } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";

import "../Ui/styles.css";
import CurrentNav from "./CurrentNav";

function Nav() {
  const { setOpen } = useOpenContext();
  const location = useLocation();

  const closeHandler = function () {
    setOpen(false);
  };

  return (
    <div className="hidden lg:block lg:w-[350px]">
      <ul className="lg:h-auto lg:flex lg:justify-between items-center lg:mt-0 lg:flex-row  lg:gap-x-4">
        <CurrentNav to="/" onClick={closeHandler} location={location}>
          Home
        </CurrentNav>
        <CurrentNav to="/about" onClick={closeHandler} location={location}>
          About
        </CurrentNav>
        <CurrentNav to="/contact" onClick={closeHandler} location={location}>
          Contact
        </CurrentNav>
        <CurrentNav to="/projects" onClick={closeHandler} location={location}>
          Projects
        </CurrentNav>
      </ul>
    </div>
  );
}

export default Nav;
