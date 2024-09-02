import Image from "next/image";
import { Button } from "@headlessui/react";
import yogaImage from "../assets/landingimage.jpg";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Find Your Inner Peace with Yoga Therapy
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Transform your life through personalized yoga sessions designed to heal and rejuvenate your body, mind, and spirit.
          </p>
          <Button
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-600"
          >
            Book a Session
          </Button>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center">
          <div className="w-full">
            <Image
              src={yogaImage}
              alt="Yoga Therapy"
              className="rounded-[50px_0_0_150px] shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
