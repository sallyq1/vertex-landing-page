"use client";
import React from "react";
import AcmeLogo from "@/assets/logo-acme.png";
import QuantumLogo from "@/assets/logo-quantum.png";
import EchoLogo from "@/assets/logo-echo.png";
import PulseLogo from "@/assets/logo-pulse.png";
import CelestialLogo from "@/assets/logo-celestial.png";
import ApexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoTicker = () => {
  return (
    <div>
      <div className=" w-full py-20 bg-white overflow-x-clip">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14"
          animate={{
            translateX: "-50%",

            
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            duration: 20,

          }}>
            <Image src={AcmeLogo} alt="Acme Logo" className="logo-ticker" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker"
            />
            <Image src={PulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image src={EchoLogo} alt="Echo Logo" className="logo-ticker" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker"
            />
            <Image src={ApexLogo} alt="Apex Logo" className="logo-ticker" />

            {/* duplicate logos for animation */}

            <Image src={AcmeLogo} alt="Acme Logo" className="logo-ticker" />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker"
            />
            <Image src={PulseLogo} alt="Pulse Logo" className="logo-ticker" />
            <Image src={EchoLogo} alt="Echo Logo" className="logo-ticker" />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker"
            />
            <Image src={ApexLogo} alt="Apex Logo" className="logo-ticker" />


          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
