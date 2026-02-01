import { useLocation } from "react-router-dom";
import useOpenContext from "./Contexts/useOpenContext";
import CurrentNav from "./CurrentNav";

function Navbody() {
  const { setOpen } = useOpenContext();
  const location = useLocation();

  const closeHandler = function () {
    setOpen(false);
  };

  return (
    // <Container>
    <div className=" w-[104%] left-1/2 transform -translate-x-1/2 bg-plain-white h-screen py-6 absolute top-[20px] md:top-[18px] z-30  lg:hidden ">
      <ul className="  flex h-auto  flex-col gap-0 items-center justify-start     ">
        <li className=" flex items-center pl-6 font-medium w-full h-[48px] border-t-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color  hover:text-blue-text ">
          <CurrentNav onClick={closeHandler} to="/" location={location}>
            HOME
          </CurrentNav>
        </li>

        <li className="flex items-center pl-6 font-medium w-full h-[48px] border-t-2 border-b-2 border-btn-text-color-400font-quicksand text-base leading-[32px] text-btn-text-color  hover:text-blue-text ">
          <CurrentNav onClick={closeHandler} to="/about" location={location}>
            ABOUT
          </CurrentNav>
        </li>
        <li className=" flex items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color  hover:text-blue-text ">
          <CurrentNav onClick={closeHandler} to="/contact" location={location}>
            CONTACT
          </CurrentNav>
        </li>
        <li className=" flex items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color  hover:text-blue-text ">
          <CurrentNav onClick={closeHandler} to="/projects" location={location}>
            PROJECTS
          </CurrentNav>
        </li>
      </ul>
    </div>
  );
}

export default Navbody;
