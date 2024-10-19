"use client";
import React from "react";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Vertex has redefined how I approach 3D modeling. Its intuitive design and powerful tools help bring my ideas to life with ease.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Since we integrated Vertex into our workflow, our design team has been able to collaborate more effectively and produce stunning results.",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Vertex has transformed the way I manage my 3D projects. Its streamlined process makes meeting deadlines a breeze.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Incorporating Vertex into our daily tasks was seamless. It's not just a tool; it's an enhancement to our creative process.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Vertex has simplified our event design workflow like no other tool, keeping all elements perfectly aligned and integrated.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customization options in Vertex are exceptional, allowing us to tailor the tool to fit our unique design needs perfectly.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting Vertex for our creative team has streamlined our operations and significantly enhanced our communication.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With Vertex, assigning tasks, tracking progress, and managing assets is incredibly efficient, keeping our team on track.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "The user-friendly interface and robust capabilities of Vertex make it indispensable for meeting our diverse project demands.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className="flex flex-col gap-6">
    <motion.div
      className="flex flex-col gap-6
    "
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: props.duration || 10,
      }}
    >


      {props.testimonials.map((testimonial) => (
        <div className="bg-white border border-[#f1f1f1] rounded-3xl p-10 h-auto w-[300px] shadow-lg flex flex-col gap-6 items-start ">
          <p className="text-left">"{testimonial.text}"</p>

          <div className="flex items-center gap-3">
            <Image
              src={testimonial.imageSrc}
              alt={`${testimonial.name}'s Profile Pic`}
              className="h-10 w-10"
            />

            <div className="flex flex-col text-left">
              <h1 className="font-semibold">{testimonial.name}</h1>
              <h1>{testimonial.username}</h1>
            </div>
          </div>
        </div>
      ))}

      {/* duplicate set of testimonials for animation */}
      {props.testimonials.map((testimonial) => (
        <div className="bg-white border border-[#f1f1f1] rounded-3xl p-10 h-auto w-[300px] shadow-lg flex flex-col gap-6 items-start ">
          <p className="text-left">"{testimonial.text}"</p>

          <div className="flex items-center gap-3">
            <Image
              src={testimonial.imageSrc}
              alt={`${testimonial.name}'s Profile Pic`}
              className="h-10 w-10"
            />

            <div className="flex flex-col text-left">
              <h1 className="font-semibold">{testimonial.name}</h1>
              <h1>{testimonial.username}</h1>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white ">
      <h4 className="tag my-4">Testimonials</h4>

      <h2 className="mb-7 section-title text-gradient px-2">
        What our users say
      </h2>

      <div className="[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] w-full flex justify-center max-h-[500px]  overflow-hidden mb-20">
        <div className="flex items-center md:flex gap-6">
          <TestimonialsColumn testimonials={firstColumn} duration={13} />
          <span className="hidden md:block">
            <TestimonialsColumn testimonials={secondColumn} duration={19} />{" "}
          </span>
          <span className="hidden lg:block">
            <TestimonialsColumn testimonials={thirdColumn} duration={14}/>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
