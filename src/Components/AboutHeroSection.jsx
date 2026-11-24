import { TypeAnimation } from "react-type-animation";
import ContentContainer from "../Ui/ContentContainer";

function AboutHeroSection() {
  const contactContent = [
    {
      title: "A Little About Me",
      text: `My journey into software development didn't begin in a tech office. It started while working as a warehouse clerk, where I spent my days handling warehouse operations and my nights learning how to build for the web. What started as curiosity gradually became a passion. I dedicated my spare time to learning through online resources, exploring documentation, solving problems, and building projects. The journey came with its challenges, from frustrating debugging sessions to balancing work, learning, and personal responsibilities, but I remained consistent. Today, I build responsive web applications using React, Next.js, and Node.js, with an interest in creating practical digital solutions that solve real-world problems. I'm constantly learning, improving my engineering skills, and challenging myself to build better products.`,
    },

    {
      title: "Why Work With Me?",
      text: `I bring a combination of practical development experience, problem-solving ability, and a genuine commitment to continuous improvement. Beyond writing code, I enjoy understanding problems, exploring possible solutions, and turning ideas into functional applications. Through hands-on projects and professional experience, I've developed skills in frontend and backend development, API integration, and working with modern web technologies. I'm adaptable, detail-oriented, open to collaboration, and always willing to learn. Whether working independently or as part of a team, I approach every project with a focus on writing maintainable code and delivering useful solutions.`,
    },
  ];

  return (
    <ContentContainer>
      <div className="w-full  lg:flex justify-between gap-x-10   md:px-[40px] lg:px-0 lg:pt-[150px] px-4 pt-24 lg:pb-[72px]  ">
        <div className="w-full px-6 lg:px-0 md:ml-0 h-[345px] md:h-[500px] md:w-full lg:w-[590px] lg:max-w-[595px] lg:h-[620px]">
          <img
            src="../seun_new.jpeg"
            alt="Oluwaseun Sodeeq"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
        <div className="lg:w-[580px] lg:max-w-[590px] h-auto lg:-mt-7 px-6 lg:px-0">
          <h2 className="font-inter font-bold text-[32px] md:text-[38px] lg:text-[48px] lg:leading-[60px] leading-[48px] text-text-color mt-5">
            OLUWASEUN SODEEQ
          </h2>
          <h6 className="font-medium font-inter text-2xl md:text-[30px] lg:text-[32px] leading-9 lg:leading-[48px] text-text-color ">
            Full-Stack Developer
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
