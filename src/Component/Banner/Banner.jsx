import banner from '../../assets/banner.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

function Banner() {
  return (
    <>
      <section id='banner' className="relative  z-0">
        <img
          src={banner}
          className="w-full md:h-[650px] h-screen lg:h-screen xl:h-[800px] object-cover"
          alt="Banner"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)]">
          <div className="w-full lg:max-w-237.5  absolute top-[220px] left-[50%] z-10 -translate-x-2/4 ">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              speed={1000}
              modules={[Pagination, Autoplay]}
              className="mySwiper h-[65vh] lg:min-h-125 xl:max-h-[500px]"
              autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <div className="slider-item text-center mb-4">
                  <h2 className="font-inter text-[34px] lg:text-[75px] md:text-[50px] font-bold text-white leading-[120%] lg:pb-[51px] md:pb-5 pb-[51px]">
                    We Transform Brands with Digital Solutions
                  </h2>
                  <p className="font-inter text:[14px] lg:text-[16px] text-white font-normal leading-6.5 px-4 lg:px-0 md:max-w-155.25 mx-auto lg:pb-[55px] md:pb-5 pb-[55px]">
                    Transform your brand with cutting-edge digital strategies
                    and creative excellence. We deliver innovative solutions
                    tailored to your business goals.
                  </p>
                  <a
                    href="#"
                    className="lg:py-3.75 lg:px-10.5 py-3.5 px-8 bg-[#6A4DF4] rounded-[10px] font-inter font-semibold text-white leading-[26px] text-[15px] lg:text-[20px]"
                  >
                    Get Started
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item text-center mb-4">
                  <h2 className="font-inter text-[34px] lg:text-[75px] md:text-[50px] font-bold text-white leading-[120%] lg:pb-[51px] md:pb-5 pb-[51px]">
                    We Transform Brands with Digital Solutions
                  </h2>
                  <p className="font-inter text:[14px] lg:text-[16px] text-white font-normal leading-6.5 px-4 lg:px-0 md:max-w-155.25 mx-auto lg:pb-[55px] md:pb-5 pb-[55px]">
                    Transform your brand with cutting-edge digital strategies
                    and creative excellence. We deliver innovative solutions
                    tailored to your business goals.
                  </p>
                  <a
                    href="#"
                    className="lg:py-3.75 lg:px-10.5 py-3.5 px-8 bg-[#6A4DF4] rounded-[10px] font-inter font-semibold text-white leading-[26px] text-[15px] lg:text-[20px]"
                  >
                    Get Started
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item text-center mb-4">
                  <h2 className="font-inter text-[34px] lg:text-[75px] md:text-[50px] font-bold text-white leading-[120%] lg:pb-[51px] md:pb-5 pb-[51px]">
                    We Transform Brands with Digital Solutions
                  </h2>
                  <p className="font-inter text:[14px] lg:text-[16px] text-white font-normal leading-6.5 px-4 lg:px-0 md:max-w-155.25 mx-auto lg:pb-[55px] md:pb-5 pb-[55px]">
                    Transform your brand with cutting-edge digital strategies
                    and creative excellence. We deliver innovative solutions
                    tailored to your business goals.
                  </p>
                  <a
                    href="#"
                    className="lg:py-3.75 lg:px-10.5 py-3.5 px-8 bg-[#6A4DF4] rounded-[10px] font-inter font-semibold text-white leading-[26px] text-[15px] lg:text-[20px]"
                  >
                    Get Started
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider-item text-center mb-4">
                  <h2 className="font-inter text-[34px] lg:text-[75px] md:text-[50px] font-bold text-white leading-[120%] lg:pb-[51px] md:pb-5 pb-[51px]">
                    We Transform Brands with Digital Solutions
                  </h2>
                  <p className="font-inter text:[14px] lg:text-[16px] text-white font-normal leading-6.5 px-4 lg:px-0 md:max-w-155.25 mx-auto lg:pb-[55px] md:pb-5 pb-[55px]">
                    Transform your brand with cutting-edge digital strategies
                    and creative excellence. We deliver innovative solutions
                    tailored to your business goals.
                  </p>
                  <a
                    href="#"
                    className="lg:py-3.75 lg:px-10.5 py-3.5 px-8 bg-[#6A4DF4] rounded-[10px] font-inter font-semibold text-white leading-[26px] text-[15px] lg:text-[20px]"
                  >
                    Get Started
                  </a>
                </div>
              </SwiperSlide>
              
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
