import Container from "../Ui/Container";
import { Link } from "react-router-dom";

import ContentContainer from "../Ui/ContentContainer";
import Earth from "./Earth";

function HomepageHeroSection() {
  return (
    <Container background="#ffffff">
      <ContentContainer>
        <div className="px-6 pb-4 lg:pb-4 md:pt-20 pt-16 mt-6 lg:flex justify-between lg:items-center lg:gap-x-[104px] lg:px-0 lg:pt-0   ">
          <div className="w-full lg:w-[680px] lg:mt-[72px] ">
            <p className="font-[600] text-[14px] md:text-base leading-5 font-inter text-text-color">
              Hi, i am
            </p>
            <h2 className="text-text-color font-bold text-[32px] text-inter leading-10 lg:mt-4 lg:leading-[58px] lg:text-[48px]">
              Oluwaseun Sodeeq
            </h2>
            <h4 className="text-text-color font-bold text-base md:text-[18px]  md:text-xl font-inter leading-6 md:leading-7  mt-[16px]">
              Full-Stack Developer | React, Next.js & Node.js
            </h4>
            <p className="text-btn-text-color font-normal text-[14px] md:text-base font-inter leading-5 md:leading-6 mt-[16px] lg:mt-[24px]">
              “Good products shouldn&apos;t make people think too hard about how
              to use them”. I build responsive web applications that solve real-world problems. From intuitive user interfaces to backend functionality and API integrations, I turn ideas into functional, reliable digital products. I enjoy working across the stack, combining thoughtful design, clean code, and problem-solving to create experiences that are both practical and easy to use.
            </p>
            <div className=" flex items-center gap-[16px] mt-4 lg:mt-[58px]">
              <button
                className={`px-3 py-2 md:px-4  text-nowrap text-base font-normal font-outfit leading-6 border-2 border-blue-text bg-blue-text text-text-color-two rounded-[8px]`}
              >
                <Link to="/contact">Get in Touch</Link>
              </button>
              <button
                className={`px-3 py-2 md:px-4  text-nowrap text-base font-normal font-outfit leading-6 border-2 border-blue-text bg-plain-white hover:bg-text-color-two text-btn-text-color rounded-[8px]`}
              >
                <a
                  href="../CV/current_cv/OLUWASEUN_SODEEQ_CV_NEW.pdf"
                  download="OLUWASEUN_SODEEQ_CV_NEW.pdf"
                  className=""
                >
                  Download CV
                </a>
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center lg:w-[520px] pb-[48px] lg:mt-[80px] h-auto pt-8  ">
            <Earth />
          </div>
        </div>
      </ContentContainer>
    </Container>
  );
}

export default HomepageHeroSection;
