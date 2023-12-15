import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import logo from "../../../assets/footer-logo.png";
import { IoCallOutline } from "react-icons/io5";
import { FooterNavLinks, FooterSocialLinks } from "./FooterLinks";

const Footer = () => {
  return (
    <div className="bg-brand-2 text-white pt-20 pb-12">
      <Container>
        {/* footer top */}
        <div className="lg:flex grid grid-cols-2 lg:flex-row justify-between lg:items-center w-full lg:gap-10 gap-8 items-start">
          {/* left footer */}
          <div className="lg:w-3/12 w-full">
            <Image
              src={logo}
              className="w-[95px] h-[44px] "
              alt={"Footer logo"}
            />
            <p className="lg:my-10 my-8 text-xs font-medium text-grey-200">
              We create amazing Webflow templatesfor creative people all around
              the world.
            </p>
            <div className="w-full">
              <button className="flex w-full  flex-row gap-2 bg-brand-1 py-2 px-4 text-sm text-white">
                <IoCallOutline />
                (973) 068 2300
              </button>
            </div>
          </div>
          {/* middle footer */}
          <div className="lg:w-3/12 w-full">
            <h3 className="text-xl mb-3 font-semibold  font-urbanist">
              Quick Links
            </h3>
            <div className="flex flex-col font-medium text-lg text-[#AAAAAA] gap-3">
              <FooterNavLinks />
            </div>
          </div>
          {/* right footer */}
          <div className="lg:w-6/12 w-full col-span-2">
            <div className="flex flex-row lg:gap-2 gap-1 justify-between text-lg lg:text-xl text-white font-urbanist font-semibold">
              <FooterSocialLinks />
            </div>
            <p className="font-poppins font-semibold text-[28px] mt-5 lg:w-auto max-w-[280px] mx-auto">
              {"Let's work together."} <br />
              {" Just drop me a line -  info@mail.com"}
            </p>
          </div>
        </div>
        {/* footer bottom */}
        <div className="pt-8 border-t border-grey-500 mt-12">
          <p className="text-center text-lg font-normal ">
            © 2023 Copyright By Ideapeel Inc. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
