function RecentProjectCardSlider({ sliderProperties }) {
  const { borderBg, settings, images, Slider } = sliderProperties;
  return (
    <div className="w-full md:w-1/2  px-6 md:px-0">
      <div
        className="  relative z-10 flex items-center justify-center  h-[295px]   md:h-[310px]   lg:h-[500px] rounded-[16px]   md:p-8  lg:py-[40px] lg:px-[0px] border  "
        style={borderBg}
      >
        <div className="absolute w-full z-10 px-6 lg:px-8  mx-auto my-4 rounded-[16px] ">
          {
            <Slider {...settings}>
              {images.map((each, i) => (
                // console.log(each, i)
                <img
                  key={i}
                  className="w-full h-[240px] md:h-[245px] lg:w-[90%] lg:h-[400px] cursor-grab rounded-[16px]"
                  src={each}
                  alt="projects"
                />
              ))}
            </Slider>
          }
        </div>
      </div>
    </div>
  );
}

export default RecentProjectCardSlider;
