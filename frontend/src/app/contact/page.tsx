import { Button } from "@headlessui/react";

export default function Contact() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            We'd love to hear from you. Whether you have a question about our services or want to schedule a session, our team is here to help.
          </p>
          <Button
            as="a"
            href="mailto:lisaxmyers@gmail.com?subject=Inquiry%20about%20Yoga%20Therapy"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg text-center hover:bg-blue-600"
          >
            Email Us
          </Button>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center">
          <div className="w-full">
            {/* Replace this div with an Image component or any other content */}
            <div className="rounded-[50px_0_0_150px] shadow-lg w-full h-auto bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Contact Us Image</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
