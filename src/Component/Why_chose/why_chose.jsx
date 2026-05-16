import work1 from '../../assets/work1.png';
import work2 from '../../assets/work2.png';
import work3 from '../../assets/work3.jpg';

function WhyChoose() {
  return (
    <section className="pb-0 md:pb-25  mx-3 lg:mx-0">
      <div className="container ]">
        <div className=" max-w-200.5 lg:pt-37.5 pt-25 mx-auto ">
          <h2
            className="text-[#151515] leading-[100%] text-[35px] md:text-[40px] lg:text-[45px] font-bold text-center font-inter 
              pb-[20px] "
          >
            Why You Should Choose Agenc
          </h2>
          <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center sm:pt-[50px] md:pt-0 lg:pb-[50px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="flex">
          <div className="w-full md:w-3/5 pt-25 lg:pt-5  md:pt-0 pb-[50px] lg:pb-[106px]">
            <div className="grid grid-cols-2 lg:gap-y-[95px] gap-y-[85px] md:gap-y-[60px] md:pt-[100px] pt-0 ">
              <div className="works">
                <img src={work1} className=" " alt="" />
                <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold font-inter pb-2.5 pt-5 max-w-[130px] max-w-0">
                  Innovative Ideas
                </h3>
                <p className="text-[#737373] leading-6.5 text-[16px] font-normal  font-inter lg:max-w-81.5 max-w-[165px]">
                  Because each project is different, we adapt to your business
                  model.
                </p>
              </div>
              <div className="works ">
                <img src={work1} className=" " alt="" />
                <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold font-inter pb-[10px] pt-[20px] max-w-[130px] max-w-0">
                  Innovative Ideas
                </h3>
                <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter lg:max-w-81.5 max-w-[165px] ">
                  Because each project is different, we adapt to your business
                  model.
                </p>
              </div>
              <div className="works ">
                <img src={work2} className=" " alt="" />
                <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold font-inter pb-[10px] pt-[20px] max-w-[130px] max-w-0">
                  Dedicated Support
                </h3>
                <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter lg:max-w-81.5 max-w-[165px] ">
                  We provide 24/7 support for all our clients and serve them
                  professionally.
                </p>
              </div>
              <div className="works ">
                <img src={work2} className=" " alt="" />
                <h3 className="text-[#151515] leading-[100%] text-[25px] font-bold font-inter pb-[10px] pt-[20px] max-w-[130px] max-w-0">
                  Dedicated Support
                </h3>
                <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter lg:max-w-81.5 max-w-[165px] ">
                  We provide 24/7 support for all our clients and serve them
                  professionally.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:w-2/5 pt-[130px] md:pt-25 ">
            <img
              src={work3}
              className="w-full h-full object-cover max-w-[528px] max-h-[528px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
