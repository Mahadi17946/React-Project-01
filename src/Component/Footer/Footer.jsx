import footer from "../../assets/footer.png";
import { FaFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';


//bdce//
function Footer() {
  return (
    <>
      <section>
        <div className=" container pt-25 lg:pt-[150px]  px-5 lg:px-0 ">
          <div className="border-b-[1px] border-[#E8E8E8] ">
            <div className="md:flex pb-0 md:pb-20 lg:pb-0 ">
              <div className="w-full block hidden lg:block lg:w-2/6 pr-20 pb-20 lg:pb-[138px] ">
                <a href="">
                  <div className="flex ">
                    <img
                      src={footer}
                      alt=""
                      className="h-[35px] object-contain"
                    />
                    <h3 className="font-inter font-semibold text-[35px] text-[#151515] leading-[100%]">
                      Agenc
                    </h3>
                  </div>
                </a>
                <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-[26px] pt-7.5">
                  I had a good experience while using this app, what fascinated
                  me was the live tracking feature There are many variations of
                  passages of Lorem Ipsum available, but the majority.
                </p>
                <div className="social flex items-center gap-4 pt-8">
                  <a href="#">
                    <FaLinkedin className="text-[#0a66c2] text-[25px] " />{' '}
                  </a>
                  <a href="#">
                    <FaXTwitter className="text-[#000000] text-[25px] " />{' '}
                  </a>
                  <a href="#">
                    <FaFacebook className="text-[#1877F2] text-[25px] " />{' '}
                  </a>
                  <a href="#">
                    <FiInstagram className="text-[#E1306C] text-[25px] " />{' '}
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-1/6 pb-10 md:pb-0">
                <h3 className="font-inter font-semibold  text-[20px] text-[#151515] leading-[100%]  pb-0 md:pb-10">
                  About
                </h3>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    About Us
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Features
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    News
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Careers
                  </p>
                </a>
              </div>
              <div className="w-full lg:w-1/6 pb-10 md:pb-0">
                <a href=""></a>
                <h3 className="font-inter font-semibold  text-[20px] text-[#151515] leading-[100%] pb-0 md:pb-10">
                  Company
                </h3>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Our Team
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Partner With Us
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    FAQ
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Blog
                  </p>
                </a>
              </div>
              <div className="w-full lg:w-1/6 pb-10 md:pb-0">
                <h3 className="font-inter font-semibold  text-[20px] text-[#151515] leading-[100%] pb-0 md:pb-10">
                  Support
                </h3>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    About
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Support Center
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Feedback
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Contact us
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    Accesbility
                  </p>
                </a>
              </div>

              <div className="w-full lg:w-1/6 pb-10 md:pb-0">
                <h3 className="font-inter font-semibold  text-[20px] text-[#151515] leading-[100%] pb-0 md:pb-10">
                  Get in touch
                </h3>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-[40px]">
                    info@gmail.com
                  </p>
                </a>
                <a href="">
                  <p className="font-inter font-normal text-[16px] text-[#7B7B7B] leading-10">
                    +88 0121 0212514
                  </p>
                </a>
              </div>
            </div>
            <div className="flex lg:hidden items-end justify-between  pt-5  pb-5 border-t-[1px] border-[#E8E8E8]">
              <div>
                <a href="">
                  <div className="flex">
                    <img
                      src={footer}
                      alt=""
                      className="h-[35px] object-contain "
                    />
                    <h3 className="font-inter font-semibold text-[35px] text-[#151515] leading-[100%]">
                      Agenc
                    </h3>
                  </div>
                </a>
              </div>
              <div className="social flex items-center gap-2 md:gap-4">
                <a href="#">
                  <FaLinkedin className="text-[#0a66c2] text-[25px] " />{' '}
                </a>
                <a href="#">
                  <FaXTwitter className="text-[#000000] text-[25px] " />{' '}
                </a>
                <a href="#">
                  <FaFacebook className="text-[#1877F2] text-[25px] " />{' '}
                </a>
                <a href="#">
                  <FiInstagram className="text-[#E1306C] text-[25px] " />{' '}
                </a>
              </div>
            </div>
          </div>

          <div className="h-23 w-full flex justify-center items-center">
            <a href="">
              <p className="font-inter font-normal text-[16px] text-[#CCCCCC] leading-10 text-center">
                All credit goes to @agence.com
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;