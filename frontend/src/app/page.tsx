"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@headlessui/react";
import yogaImage from "../assets/bliss/lisapose6.jpeg";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Find Your Inner Peace
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Experience holistic healing through Yoga Therapy, a practice that
            integrates traditional therapies and treatments with the wisdom of
            yoga, promoting lasting, transformative healing
          </p>
          <Button
            as="a"
            href="mailto:lisaxmyers@gmail.com?subject=Book%20a%20Yoga%20Session&body=I%20would%20like%20to%20book%20a%20yoga%20session."
            className="Button"
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full">
            <Image
              src={yogaImage}
              alt="Yoga Therapy"
              className="rounded-[100px_20px_50px_20px] lg:rounded-[150px_20px_100px_20px] shadow-lg w-full h-auto"
              quality={30}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
