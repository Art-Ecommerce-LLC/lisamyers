"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@headlessui/react";
import lisapose1 from "../../assets/bliss/lisapose7.jpeg";
import neuro from "../../assets/neuro.jpg";

export default function Services() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl p-8 md:p-16 space-y-16">
        <motion.div
          className="flex flex-col justify-center items-center w-full space-y-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Yoga Therapy Services
          </h1>
          <Button
            as="a"
            href="/contact"
            className="Button mx-auto"
            style={{ width: "200px" }}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 lg:w-full gap-8 lg:items-center justify-center lg:justify-between">
          {/* Service 1 */}
          <motion.div
            className="flex flex-col lg:flex-row items-stretch bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="rounded-[50px_20px_20px_100px] overflow-hidden h-48 lg:h-full w-full">
                <Image
                  src={lisapose1}
                  alt="Private Yoga Therapy Sessions"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between mt-4 lg:mt-0 lg:ml-6">
              <h3 className="text-2xl font-bold text-gray-800">Private Yoga Therapy Sessions</h3>
              <p className="text-gray-600 mt-2">
                Experience personalized healing through Private Yoga Therapy Sessions, designed to meet your individual needs and guide you toward a state of balance and well-being.
              </p>
              <p className="text-gray-600 mt-2">
                Choose from 60 or 90-minute sessions, available online or in-person.
              </p>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            className="flex flex-col lg:flex-row items-stretch bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="rounded-[50px_20px_20px_100px] overflow-hidden h-48 lg:h-full w-full">
                <Image
                  src={neuro}
                  alt="NeuroOptimal® Brain Training Neurofeedback"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between mt-4 lg:mt-0 lg:ml-6">
              <h3 className="text-2xl font-bold text-gray-800">NeuroOptimal® Brain Training Neurofeedback</h3>
              <p className="text-gray-600 mt-2">
                Discover the benefits of NeuroOptimal® Brain Training Neurofeedback, a cutting-edge neurotechnology designed to help optimize your brain function. This non-invasive system can help you achieve your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
