"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@headlessui/react";

// Sample image imports (replace with your actual images)
import lisapose1 from "../../assets/bliss/lisapose7.jpeg";
import neuro from "../../assets/neuro.jpg";

export default function Services() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const img1 = new window.Image();
    const img2 = new window.Image();
    img1.src = lisapose1.src;
    img2.src = neuro.src;

    const checkImagesLoaded = () => {
      if (img1.complete && img2.complete) {
        setIsImageLoaded(true);
      }
    };

    img1.onload = checkImagesLoaded;
    img2.onload = checkImagesLoaded;
  }, []);

  useEffect(() => {
    if (isImageLoaded) {
      setIsPageLoaded(true);
    }
  }, [isImageLoaded]);

  if (!isPageLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-between w-full max-w-7xl p-8 md:p-16 space-y-16">
        {/* Left Section */}
        <motion.div
          className="flex flex-col justify-center w-2/3 space-y-6 text-center lg:text-left lg:max-w-4xl"
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
            className="Button"
            style={{ maxWidth: "679px"}}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Right Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full lg:max-w-none">
          {/* Service 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="rounded-[50px_20px_20px_100px] overflow-hidden h-full w-full">
                <Image
                  src={lisapose1}
                  alt="Private Yoga Therapy Sessions"
                  className="object-cover w-full h-full"
                  quality={10}
                  onLoadingComplete={() => setIsImageLoaded(true)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
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
            className="flex flex-col md:flex-row items-stretch bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="rounded-[50px_20px_20px_100px] overflow-hidden h-full w-full">
                <Image
                  src={neuro}
                  alt="NeuroOptimal® Brain Training Feedback"
                  className="object-cover w-full h-full"
                  quality={10}
                  onLoadingComplete={() => setIsImageLoaded(true)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-between">
              <h3 className="text-2xl font-bold text-gray-800">NeuroOptimal® Brain Training Feedback</h3>
              <p className="text-gray-600 mt-2">
                Discover the benefits of NeuroOptimal® Brain Training Feedback, a cutting-edge neurotechnology designed to help optimize your brain function. Whether you’re looking to improve mental clarity, enhance cognitive performance, or achieve a greater sense of well-being, this non-invasive system can help you achieve your goals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
