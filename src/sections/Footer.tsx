import React from "react";
import Logo from "@/assets/saas-logo-rainbow-gradient.png";
import Image from "next/image";
import PinterestIcon from "@/assets/social-pin.svg";
import LinkedInIcon from "@/assets/social-linkedin.svg";
import InstagramIcon from "@/assets/social-insta.svg";
import YoutubeIcon from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <div className="md:p-10 p-5  bg-black text-white">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-10">
         <Image src={Logo} alt="Saas Logo" className="h-auto w-[70px] rounded-xl" />

            <p className="w-[300px] text-left">
            Experience the satisfaction of creation with Vertex, a 3D modeling tool designed to streamline your workflow and enhance your productivity.

            </p>
          </div>

          <div className="flex items-center gap-5 my-10">
            <PinterestIcon className="scale-[1.5]" />
            <LinkedInIcon className="scale-[1.5]" />
            <InstagramIcon className="scale-[1.2]" />
            <YoutubeIcon className="scale-[1.4]" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-20">

          <div className="flex flex-col ">
            <h4 className="font-bold">Product</h4>
            <ul className="*:my-3 *:font-normal">
              <li>
                <h5>About</h5>
              </li>
              <li>
                <h5>Features</h5>
              </li>
              <li>
                <h5>Customers</h5>
              </li>

              <li>
                <h5>Updates</h5>
              </li>

              <li>
                <h5>Help</h5>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mt-5 md:mt-0">Legal</h4>
            <ul className="*:my-3 *:font-normal">
              <li>
                <h5>Privacy</h5>
              </li>
              <li>
                <h5>Terms</h5>
              </li>
              <li>
                <h5>Security</h5>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h4 className="font-bold mt-5 md:mt-0">Resources</h4>
            <ul className="*:my-3 *:font-normal">
              <li>
                <h5>Docs</h5>
              </li>
              <li>
                <h5>Community</h5>
              </li>
              <li>
                <h5>Guides</h5>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold mt-5 md:mt-0">Company</h4>
            <ul className="*:my-3 *:font-normal">
              <li>
                <h5>Careers</h5>
              </li>
              <li>
                <h5>Contact</h5>
              </li>
              <li>
                <h5>Blog</h5>
              </li>
            </ul>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Footer;
