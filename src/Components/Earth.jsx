import "../Ui/styles.css";
import { FaGithub, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
// import { TbBrandJavascript } from "react-icons/tb";
// import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { SiTailwindcss } from "react-icons/si";
const Earth = () => {
  return (
    <div
      className={`relative  inline-block  border p-[30px] md:p-[80px] lg:p-[10px] rounded-full    `}
    >
      <div className="wheel">
        <div className="cabin">
          <TiHtml5 style={{ color: "orangered", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <FaCss3 style={{ color: "#0091F7", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <IoLogoJavascript
            style={{
              backgroundColor: "#FFFFff",
              color: "#FFFF00",
              fontSize: "inherit",
            }}
          />
        </div>
        <div className="cabin">
          <FaReact style={{ color: "#00D8FF", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <SiTailwindcss style={{ color: "#00FFFF", fontSize: "inherit" }} />
        </div>
        <div className="cabin">
          <FaGithub style={{ color: "#333333", fontSize: "inherit" }} />
        </div>
      </div>

      <div
        className={`absolute w-[250px] md:w-[380px] md:h-[380px] lg:w-[80%] lg:h-[80%] z-20 lg:top-[45px] lg:bottom-[45px] left-[0px] md:left-[33px]  md:right-[33px] md:top-[70px] md:bottom-[33px] right-[0px] top-[33px] bottom-[33px]   border rounded-full mx-auto p-1`}
      >
        <img
          src="Intense-seun.png"
          className="rounded-full w-full lg:w-[100%]  h-full lg:mx-auto "
        />
      </div>
    </div>
  );
};

export default Earth;
