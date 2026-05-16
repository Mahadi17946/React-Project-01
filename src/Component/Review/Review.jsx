import { useRef } from 'react';
import quote from '../../assets/quote.png';
import avatar1 from '../../assets/avatar1.png';
import avatar2 from '../../assets/avatar2.png';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules bfvhikjcesnawsfkhucdnewdfscgyun
import { Autoplay, Navigation } from 'swiper/modules';

//bdce//
function Review() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id='review'>
      <div className="container lg:pb-[227px] pb-25">
        <div className="max-w-[609px] mx-auto">
          <h2 className="text-[#151515] leading-[100%] text-[35px] lg:text-[45px] md:text-[40px] font-bold text-center font-inter pb-[20px] pt-25 md:pt-0">
            Some Client Reviews
          </h2>
          <p className="text-[#737373] leading-[26px] text-[16px] font-normal font-inter text-center pb-[50px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className="Review-slider relative">
          <Swiper
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2, // MD device-e 2ta slide
                centeredSlides: false, // Bam pasher slide-ke active rakhar jonno false
                spaceBetween: 20, // Slide-er majhe gap-er jonno
              },
              1024: {
                slidesPerView: 3, // Laptop-e 3ta slide
                centeredSlides: true, // Laptop-e majher slide active thakle bhalo dekhay
              },
            }}
            onSwiper={swiper => {
              setTimeout(() => {
                if (swiper.params.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
          >
            {[...Array(5)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="item2 rounded-[30px] px-[58px] py-[54px] border border-[#CCCCCC] shadow-md lg:shadow-none md:border-0 mx-3 lg:mx-0">
                  <img src={quote} alt="Quote" />
                  <p className="text-[#7B7B7B] leading-[26px] text-[16px] font-normal font-inter max-w-[307px] py-5">
                    I had a good experience while using this app, what
                    fascinated me was the live tracking feature There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority.
                  </p>
                  <div className="flex gap-[5px]">
                    <i className="fa-solid fa-star text-[20px] text-[#F9BD2C]"></i>
                    <i className="fa-solid fa-star text-[20px] text-[#F9BD2C]"></i>
                    <i className="fa-solid fa-star text-[20px] text-[#F9BD2C]"></i>
                    <i className="fa-solid fa-star text-[20px] text-[#F9BD2C]"></i>
                    <i className="fa-solid fa-star text-[20px] text-[#F9BD2C]"></i>
                  </div>
                  <div className="flex pt-[30px]">
                    <div className="avatar">
                      <img
                        src={index % 2 === 0 ? avatar1 : avatar2}
                        alt="Avatar"
                      />
                    </div>
                    <div className="avatar-deatail pl-5">
                      <h3 className="text-[#232323] leading-[120%] text-[20px] font-semibold font-inter">
                        Eric Drake
                      </h3>
                      <p className="text-[#7B7B7B] leading-[26px] text-[16px] font-medium font-inter">
                        Digital Marketor
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="hidden lg:block absolute top-1/2 left-[-24px] -translate-y-1/2 z-10 cursor-pointer"
            type="button"
          >
            <i className="fa-solid fa-circle-chevron-left text-[40px] text-[#4756DF]"></i>
          </button>
          <button
            ref={nextRef}
            className="hidden lg:block absolute top-1/2 right-[-24px] -translate-y-1/2 z-10 cursor-pointer"
            type="button"
          >
            <i className="fa-solid fa-circle-chevron-right text-[40px] text-[#4756DF]"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Review;
