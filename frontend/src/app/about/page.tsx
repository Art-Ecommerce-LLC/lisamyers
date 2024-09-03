import { Button } from "@headlessui/react";

export default function About() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            About Our Yoga Practice
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            Our mission is to help individuals find their inner peace through holistic yoga therapy. Our sessions are tailored to meet the unique needs of every client.
          </p>
          <Button
            as="a"
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg text-center hover:bg-blue-600"
          >
            Contact Us
          </Button>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center">
          <div className="w-full">
            {/* Replace this div with an Image component or any other content */}
            <div className="rounded-[50px_0_0_150px] shadow-lg w-full h-auto bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">About Us Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
