"use client"
import React, { useRef } from "react";
import RightArrow from "@/assets/arrow-right.svg";
import Spring from "@/assets/spring.png";
import Star from "@/assets/star.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [500, -200]);

  return (
    <div className="p-10 md:pb-40 bg-gradient-to-t from-[#d2dcff] to-white relative overflow-x-clip">
      <div className="flex flex-col items-center ">
        <h1 className="section-title text-gradient py-3 ">
          Sign up for free today
        </h1>

        <p className="section-description text-center py-3">
        Experience the satisfaction of creation with Vertex, a 3D modeling tool designed to streamline your workflow and enhance your productivity.
        </p>

        <div className="flex py-3">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn gap-1">
            Learn more <RightArrow className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div>
        <motion.img
          src={Star.src}
          alt="Star"
          className="hidden md:block  h-[400px] w-[400px] absolute md:-top-32 lg:-left-10 md:-left-52"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={Spring.src}
          alt="Spring"
          className="hidden md:block  h-[400px] w-[400px] absolute md:bottom-0 lg:-right-5  md:-right-40"
          style={{
            translateY: translateY,
          }}
        />
      </div>
    </div>
  );
};

export default CallToAction;
