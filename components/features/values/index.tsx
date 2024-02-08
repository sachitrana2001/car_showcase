"use client";
import React from "react";
import { HOME } from "@/app/constant";
import { motion } from "framer-motion";

const Values: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center  px-5 py-10 md:px-28 md:py-10">
      <div className="flex flex-col justify-center items-center text-center  py-10">
        <h3 className="text-3xl pb-5 ">
          Turning your dreams into unforgettable events
        </h3>
        <p className="text-xl pb-5 text-slate-500 ">
          Our approach to event planning is collaborative, thoughtful,
          strategic, detailed, and honest.
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {HOME.map((item, i) => (
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 0.5, // Animation duration
              },
            }}
            viewport={{ once: false }}
            className="rounded-xl shadow-lg p-5 hover:scale-95 transition"
            key={i}
          >
            <span className="text-red-400 animate-bounce">{item.icon}</span>{" "}
            <br />
            <br />
            <h3 className="text-xl">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Values;
