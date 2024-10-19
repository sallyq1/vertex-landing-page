"use client";
import React, { useRef } from "react";
import RightArrow from "@/assets/arrow-right.svg";
import Cog from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -500]);

  return (
    <section className="w-full overflow-x-clip relative">
      <div className=" px-5 pt-8 pb-24 md:p-16 md:pt-0 lg:pl-20 lg:pb-40 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eAEEFE_66%)] md:flex ">
        <div className="md:w-[490px] md:mt-12">
          <div className="tag"> Version 2.0 is here</div>

          <h1 className=" section-title text-5xl md:text-8xl lg:text-8xl mt-6 z-20 w-[700px]">
            3D modeling {" "}
            <span className=" mt-6 pr-1 text-gradient ">made simple</span>
          </h1>

          <p className="section-description mt-6 md:w-[500px] w-[400px]">
          Experience the power of simplicity with Vertex. Whether you&aposre a beginner or a seasoned pro, Vertex makes 3D modeling accessible and enjoyable.
          </p>

          <div className="flex gap-2 items-center mt-[30px]">
            <button className="btn btn-primary">Get for free</button>
            <button className="flex items-center btn gap-1">
              Learn more <RightArrow className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="">
          <motion.img
            src={Cog.src}
            alt="cog image"
            className="mt-20 md:mt-0 md:h-[600px] md:w-[600px] lg:h-[650px] lg:w-[650px] md:absolute md:-right-72 md:-top-0 lg:flex lg:right-10 "
            animate={{ translateY: [-20, 20] }}
            transition={{
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
              duration: 3,
            }}
          />

          <motion.img
            src={Cylinder.src}
            alt="cylinder image"
            className="hidden md:block h-[150px] w-[150px] absolute md:right-60 lg:right-[550px] top-30 "
            style={{
              translateY: translateY,
            }}
          />

          <motion.img
            src={Noodle.src}
            alt="noodle image"
            className="hidden lg:block h-[200px] w-[200px] absolute lg:right-5 rotate-[40deg] -bottom-20 z-20"
            style={{
              translateY: translateY,
              rotate: 40,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
