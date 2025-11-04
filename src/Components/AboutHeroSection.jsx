import { TypeAnimation } from "react-type-animation";
import ContentContainer from "../Ui/ContentContainer";

function AboutHeroSection() {
  const contactContent = [
    {
      title: "Little Bit About Me",
      text: ` "After a couple weeks of frustration, you'll give up," said a friend. My journey started miles away from lines
      of code, deep within the bustling world of a factory worker
      (warehouse clerk, to be precise). While my days were filled with
      packing and shipping finished goods, my nights were fueled by a
      burning passion for web development. Every spare moment was spent
      glued to online tutorials, devouring documentation, and building
      projects I found interesting. It wasn't easy – the learning
      curve was steep, the resources endless, especially because I
      didn't know exactly what I needed. There were late nights
      debugging code, moments of frustration when things wouldn't
      work, and the constant struggle to balance my day job with my
      learning. But I persevered, overcame each hurdle, and my skills
      grew.`,
    },

    {
      title: "Why Hire Me?",
      text: `Driven by a thirst for knowledge, I actively participated in 
  online courses across platforms like FreeCodeCamp, Udemy, Coursera 
  (anchored meta), InstinctHub, and Tiidelab. This diverse learning 
  experience not only broadened my skillset in the basics of web 
  development technologies like HTML, CSS, and JavaScript, but also 
  advanced skills like React, NextJS, CSS Modules,Styled-Components Tailwind CSS, and VCS (Git). My learning 
  journey is validated by building projects and earning certificates 
  of completion, which solidify my proficiency in web development.`,
    },
  ];

  return (
    <ContentContainer>
      <div className="w-full  lg:flex justify-between gap-x-10   md:px-[40px] lg:px-0 lg:pt-[150px] px-4 pt-24 lg:pb-[72px]  ">
        <div className="w-full px-6 lg:px-0 md:ml-0 h-[345px] md:h-[500px] md:w-full lg:w-[590px] lg:max-w-[595px] lg:h-[620px]">
          <img
            src="../aboutPic.png"
            alt="Oluwaseun Sodeeq"
            className=" w-full h-full"
          />
        </div>
        <div className="lg:w-[580px] lg:max-w-[590px] h-auto lg:-mt-7 px-6 lg:px-0">
          <h2 className="font-inter font-bold text-[32px] md:text-[38px] lg:text-[48px] lg:leading-[60px] leading-[48px] text-text-color mt-5">
            OLUWASEUN SODEEQ
          </h2>
          <h6 className="font-medium font-inter text-2xl md:text-[30px] lg:text-[32px] leading-9 lg:leading-[48px] text-text-color ">
            Frontend Developer
          </h6>

          <div className="">
            {contactContent.map((each) => {
              const { title, text } = each;
              return (
                <div key={title} className="mt-6 ">
                  <h6 className="inline-block p-4 text-base font-bold leading-5 font-outfit text-btn-text-color bg-text-color-two rounded-md">
                    {title}
                  </h6>
                  <div
                    className={
                      "font-normal text-base leading-6 font-outfit text-btn-text-color mt-1"
                    }
                  >
                    <TypeAnimation
                      splitter={(str) => str.split(/(?= )/)}
                      sequence={[text]}
                      speed={{ type: "constantDelayInMs", value: 200 }}
                      repeat={0}
                      cursor={false}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default AboutHeroSection;
// updated!
