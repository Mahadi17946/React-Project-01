function Contact() {
  return (
    <section id="contact" className="bg-[#F3F3F3] px-4 lg:px-0">
      <div className="container ">
        <div className="md:flex ">
          <div className="md:w-1/2 py-30 lg:py-[327px] md:pr-10 lg:pr-[146px]  text-center md:text-left">
            <h2 className="text-[35px] md:text[45px] leading-[100%]  mx-auto font-bold font-inter text-[#151515] pb-[50px] lg:pb-5 md:pr-[90px]">
              We Do design, Code & Development
            </h2>
            <p className="text-[#7B7B7B] leading-[26px] text-[16px] font-normal font-inter lg:pb-2.5 pb-[20px]">
              I had a good experience while using this app, what fascinated me
              was the live tracking feature There are many variations of
              passages of Lorem Ipsum available, but the majority.
            </p>
            <p className="text-[#7B7B7B] leading-[26px] text-[16px] font-normal font-inter ">
              There are many variations of passages of Lorem Ipsum available,
              but themajority have suffered alteration in some form.
            </p>
          </div>
          <div className="w-full md:w-1/2 py-0 md:py-[50px] lg:py-[150px] pb-[50px] lg:pr-[112px]">
            <div className="bg-white py-[61px] px-[43px] lg:py-[61px] lg:px-[43px] md:px-[30px] md:py-[50px]  rounded-[20px]">
              <h3 className="font-inter text-[30px] md:text-[26px] lg:text-[30px] text-[#151515] font-bold text-center leading-[100%] pb-[30px] md:pb-[50px] lg:pb-[30px]">
                Get a free quote now
              </h3>

              <form action="">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="text-[#151515] leading-[26px] text-[16px] font-medium font-inter block pb-[10px]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-full border-[#E8E8E8] border py-[17px] lg:py-[23px] px-[19px] rounded-[10px] outline-0  leading-[26px] text-[16px] font-normal font-inter "
                    type="text"
                    placeholder="Enter your name "
                  ></input>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="text-[#151515] leading-[26px] text-[16px] font-medium font-inter block pb-[10px]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    className="w-full border-[#E8E8E8] border py-[17px] lg:py-[23px] px-[19px] rounded-[10px] outline-0  leading-[26px] text-[16px] font-normal font-inter "
                    type="email"
                    placeholder="Enter your email "
                  ></input>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="phone"
                    className="text-[#151515]   leading-[26px] text-[16px] font-medium font-inter block pb-[10px]"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    className="w-full border-[#E8E8E8] border py-[17px] lg:py-[23px] px-[19px] rounded-[10px] outline-0  leading-[26px] text-[16px] font-normal font-inter "
                    type="tel"
                    placeholder="Enter your phone number"
                  ></input>
                </div>

                <div className="mt-7.5  text-center">
                  {/* ekhane thik kora lagbe !! kintuuuuuuuuuuuuuuuuu */}
                  <button className=" py-[19px] md:py-[15px] lg:py-[19px] px-[20px] lg:px-[154px] bg-[#6A4DF4] rounded-[10px] font-inter font-normal lg:font-semibold text-white lg:leading-[26px] text-[15px] lg:text-[20px]">
                    Get Pricing Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;



