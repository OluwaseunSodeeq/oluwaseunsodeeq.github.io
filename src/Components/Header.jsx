// import Container from "../Ui/Container";
// import NewHeader from "./Newheader";
import useOpenContext from "./Contexts/useOpenContext";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Nav from "./Nav";
import Navbody from "./Navbody";

function Header() {
  const { open } = useOpenContext();

  return (
    <div className="w-full h-[70px] md:h-[98px] lg:h-[103px] inline-block bg-text-color-two fixed p-0 top-[-2px] left-0 right-0 z-50 ">
      {/* <Container> */}
      <div className="w-full  px-6 py-4 md:px-[62px] md:py-6 lg:px-[104px] lg:max-w-[1440px] lg:h-[103px]  mx-auto">
        <div className="w-full mx-auto flex justify-between items-center ">
          <Logo />
          <Nav />
          <Hamburger />
        </div>
        <div
          className={`duration-500 ease-in-out  ${
            open ? "translate-x-0" : "translate-x-[-200%] "
          }`}
        >
          <Navbody />
        </div>
      </div>
    </div>
  );
}

export default Header;
/*
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import useOpenContext from "./Contexts/useOpenContext";
import Nav from "./Nav";

function Header() {
  const { open, HamburgerHandler } = useOpenContext();
  console.log(open);

  return (
    <div
      className={`fixed z-30 w-full top-0 ${
        open
          ? "bg-user-color"
          : "shadow-lg shadow-[#7FB5E61F]-400 bg-plain-white"
      }`}
    >
      <div
        className={`w-full lg:max-w-[1440px]  md:mx-auto  overflow-x-hidden 
h-20 md:h-28 lg:h-32 flex justify-between items-center  
py-6 px-4 md:py-6 md:px-12 lg:py-6 lg:px-16  relative top-0  ${
          open ? " duration-500 ease-in-out" : " duration-500 ease-in-out"
        }      
`}
      >
        <Logo />
        <Hamburger handler={HamburgerHandler} />
      </div>
      <div className="w-full  lg:w-full lg:mx-auto">
        <div
          className={`duration-300 ease-in-out  ${
            open
              ? "  relative  z-30 translate-x-0    "
              : " relative  z-30 translate-x-full  "
          }`}
        >
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
*/
