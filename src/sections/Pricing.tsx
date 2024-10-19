"use client";
import Check from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import {motion} from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited models and projects",
      "2GB storage",
      "Basic tools",
      "Community support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited models and projects",
      "50GB storage",
      "Advanced modeling tools",
      "Priority support",
      "Plugin integrations",
      "Enhanced rendering options",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 15 project members",
      "Unlimited models and projects",
      "200GB storage",
      "Full suite of integration options",
      "Dedicated account manager",
      "Customizable workspace",
      "Advanced analytics and collaboration tools",
      "Export capabilities",
      "API access for custom development",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-10 lg:py-28 md:px-20 bg-white">
      <div className="flex flex-col items-center">
        <h2 className="section-title text-center pb-3 mt-5 text-gradient">Pricing</h2>
        <p className="section-description text-center justify-center mb-8 ">
          Free Forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 items-end">
          {pricingTiers.map((tier,index) => (
            <div
              key={index}
              className={twMerge(
                "p-10 border border-[#f1f1f1] bg-white rounded-3xl shadow-[0_7px_14px_#EAEAEA] h-full font-medium ",
                tier.inverse && "border-black bg-black  text-white font-normal"
              )}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50 my-5",
                    tier.inverse && "text-white"
                  )}
                >
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="tag border border-white/60">
                    <motion.span className="bg-[linear-gradient(to_right,#DD7DDF,#E1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#E1cd86,#bbcb92,#71c2ef,#3bffff)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    animate={{
                      backgroundPositionX: "100%"
                    }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                        duration: 2,
                      }}>
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex leading-none">
                  <h1
                    className={twMerge(
                      "text-4xl font-bold text-black mr-1 ",
                      tier.inverse && "text-white font-bold"
                    )}
                  >
                    ${tier.monthlyPrice}
                  </h1>
                  <h3
                    className={twMerge(
                      "my-5 font-semibold tracking-tight leading-none text-black/50 mb-1",
                      tier.inverse && "text-white/60 font-medium"
                    )}
                  >
                    {" "}
                    / monthly
                  </h3>
                </div>

                <button
                  className={twMerge(
                    "my-5 btn btn-primary w-full",
                    tier.inverse && "btn-secondary"
                  )}
                >
                  Get Started for Free
                </button>
                <ul>
                  {tier.features.map((feature,index) => (
                    <div  key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5" />
                      <li className="my-3">{feature}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
