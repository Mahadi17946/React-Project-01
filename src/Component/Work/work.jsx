import portfolio1 from '../../assets/portfolio1.png';
import portfolio2 from '../../assets/portfolio2.png';
import portfolio3 from '../../assets/portfolio3.png';
import portfolio4 from '../../assets/portfolio4.png';
import portfolio5 from '../../assets/portfolio5.png';
import portfolio6 from '../../assets/portfolio6.png';

function Work() {
  return (
    <>
      <section id='work' className="bg-[#F3F3F3] pb-25 lg:pb-[150px] px-2 lg:px-0">
        <div className="container">
          <div className=" max-w-[609px] pt-[75px] lg:pt-37.5 mx-auto ">
            <h2
              className="text-[#151515] leading-[100%] text-[35px] md:text-[40px] lg:text-[45px] font-bold text-center font-inter 
              pb-[20px]"
            >
              Our Recent Work
            </h2>
            <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center  pb-[50px]">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-6">
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-12.25 pb-11.75 pt-20 shadow lg:hover:shadow-service rounded-[20px] transition-all duration-1000 ease-in-out">
              <img src={portfolio1} className="w-full rounded-[20px]" alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[20px] font-bold text-center font-inter pb-[20px] pt-[30px]">
                Task Management App
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center mx-auto pb-[30px] max-w-[340px] ">
                This is a task management application that can help you be more
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-12.25 pb-11.75 pt-20 shadow lg:hover:shadow-service rounded-[20px] transition-all duration-1000 ease-in-out">
              <img src={portfolio2} className="w-full rounded-[20px]" alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[20px] font-bold text-center font-inter pb-[20px] pt-[30px]">
                Task Management App
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center mx-auto pb-[30px] max-w-[340px] ">
                This is a task management application that can help you be more
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-12.25 pb-11.75 pt-20 shadow lg:hover:shadow-service rounded-[20px] transition-all duration-1000 ease-in-out">
              <img src={portfolio3} className="w-full rounded-[20px]" alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[20px] font-bold text-center font-inter pb-[20px] pt-[30px]">
                Task Management App
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center mx-auto pb-[30px] max-w-[340px] ">
                This is a task management application that can help you be more
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-12.25 pb-11.75 pt-20 shadow lg:hover:shadow-service rounded-[20px] transition-all duration-1000 ease-in-out">
              <img src={portfolio4} className="w-full rounded-[20px]" alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[20px] font-bold text-center font-inter pb-[20px] pt-[30px]">
                Task Management App
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center mx-auto pb-[30px] max-w-[340px] ">
                This is a task management application that can help you be more
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-12.25 pb-11.75 pt-20 shadow lg:hover:shadow-service rounded-[20px] transition-all duration-1000 ease-in-out">
              <img src={portfolio5} className="w-full rounded-[20px]" alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[20px] font-bold text-center font-inter pb-[20px] pt-[30px]">
                Task Management App
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center mx-auto pb-[30px] max-w-[340px] ">
                This is a task management application that can help you be more
              </p>
            </div>
            <div className="service-item1 border border-[#CCCCCC] md:border-0 px-12.25 pb-11.75 pt-20 shadow lg:hover:shadow-service rounded-[20px] transition-all duration-1000 ease-in-out">
              <img src={portfolio6} className="w-full rounded-[20px]" alt="" />
              <h3 className="text-[#151515] leading-[100%] text-[20px] font-bold text-center font-inter pb-[20px] pt-[30px]">
                Task Management App
              </h3>
              <p className="text-[#737373] leading-[26px] text-[16px] font-normal  font-inter text-center mx-auto pb-[30px] max-w-[340px] ">
                This is a task management application that can help you be more
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
