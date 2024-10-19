
"use client";

import React, { useRef } from "react";
import ProductImage from "@/assets/4x/mockup.png";
import Image from "next/image";
import PyramidImage from "@/assets/pyramid.png";
import TubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [250, -350]);

  return (
    <section className="">
      <div className=" flex flex-col items-center py-9 bg-white width-full overflow-x-clip">
        <div className="tag ">Boost your productivity</div>
        <h1 className=" section-title items-center text-center flex flex-col md:mt-6  sm:mt-3 z-20 ">
        Effortless Design,
          <span className="text-gradient pb-3">{"   "}Powerful Results</span>
        </h1>
        <h2></h2>
        <p className="section-description text-center my-3 w-2/3">
        Forget about juggling multiple software suites. With Vertex, everything you need is at your fingertips in a single, integrated environment.    

        </p>

        <div className="relative">
          <div className="w-full flex justify-center">
            <motion.img
              src={ProductImage.src}
              alt="Product Image"
              className="h-4/5 w-4/5 "
    
            />
          </div>

          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            className="hidden md:block  h-[262px] w-[262px] absolute lg:-top-36 lg:right-5  md:-top-24 md:-right-16 z-30"
            style={{
              translateY: translateY,
            }}
          />

          <motion.img
            src={TubeImage.src}
            alt="Tube Image"
            className="hidden md:block h-[248px] w-[248px] absolute lg:top-64  lg:left-5  md:top-40 md:-left-14"
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
