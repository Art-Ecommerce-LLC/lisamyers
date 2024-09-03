"use client";

import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import Image from "next/image";
import contactImage from "../../assets/yogacontact.jpg";

export default function Contact() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        {/* Left Section (Image) */}
        <motion.div
          className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full">
            <Image
              src={contactImage}
              alt="Contact Us"
              className="rounded-[100px_20px_50px_20px] lg:rounded-[150px_20px_100px_20px] shadow-lg w-full h-auto"
              quality={70}
            />
          </div>
        </motion.div>

        {/* Right Section (Text) */}
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            We'd love to hear from you. Whether you have a question about our services or want to schedule a session, our team is here to help.
          </p>
          <Button
            as="a"
            href="mailto:lisaxmyers@gmail.com?subject=Inquiry%20about%20Yoga%20Therapy"
            className="Button"
          >
            Email Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
