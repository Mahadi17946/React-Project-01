import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";

function Services() {
  return (
    <>
      <section id="service" className="pb-25 mx-2 lg:mx-0">
        <div className="container ]">
          <div className=" max-w-152.25  mx-auto ">
            <h2
              className="text-[#151515] leading-[100%] text-[35px] md:text-[45px] font-bold text-center font-inter 
              pb-[20px]"
            >
              Our Provided Services
            </h2>
            <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-12.5">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-6 sm:px-10 md:px-12 pt-16 shadow-md lg:shadow-sm lg:hover:shadow-xl rounded-[20px] transition-all duration-500">
              <img src={icon1} className="mx-auto " alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold text-center font-inter pb-[20px] pt-[40px]">
                Web Design
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px] max-w-[326px] ">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-6 sm:px-10 md:px-12 pt-16 shadow-md lg:shadow-sm lg:hover:shadow-xl rounded-[20px] transition-all duration-500">
              <img src={icon2} className="mx-auto " alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold text-center font-inter pb-[20px] pt-[40px]">
                UI/UX Design
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px] max-w-[326px] ">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-6 sm:px-10 md:px-12 pt-16 shadow-md lg:shadow-sm lg:hover:shadow-xl rounded-[20px] transition-all duration-500">
              <img src={icon3} className="mx-auto " alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold text-center font-inter pb-[20px] pt-[40px]">
                Web Development
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px] max-w-[326px] ">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-6 sm:px-10 md:px-12 pt-16 shadow-md lg:shadow-sm lg:hover:shadow-xl rounded-[20px] transition-all duration-500">
              <img src={icon4} className="mx-auto " alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold text-center font-inter pb-[20px] pt-[40px]">
                Motion Graphics
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px] max-w-[326px] ">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-6 sm:px-10 md:px-12 pt-16 shadow-md lg:shadow-sm lg:hover:shadow-xl rounded-[20px] transition-all duration-500">
              <img src={icon5} className="mx-auto " alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold text-center font-inter pb-[20px] pt-[40px]">
                3D Animation
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px] max-w-[326px] ">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-6 sm:px-10 md:px-12 pt-16 shadow-md lg:shadow-sm lg:hover:shadow-xl rounded-[20px] transition-all duration-500">
              <img src={icon6} className="mx-auto " alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold text-center font-inter pb-[20px] pt-[40px]">
                Digital Marketing
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px] max-w-[326px] ">
                There are many variations of passages of Lorem Ipsum available,
                but themajority have suffered alteration in some form, by
                injected humour, or randomised words which don't look.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;