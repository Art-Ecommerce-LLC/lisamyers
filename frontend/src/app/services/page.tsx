import { Button } from "@headlessui/react";

export default function Services() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Our Yoga Therapy Services
          </h1>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600">
            We offer a range of yoga therapy services tailored to meet your individual needs, helping you achieve holistic wellness.
          </p>
          <Button
            as="a"
            href="/contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg text-center hover:bg-blue-600"
          >
            Get in Touch
          </Button>
        </div>

        {/* Right Section */}
        <div className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex flex-col space-y-8">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-[50px_0_0_150px] bg-gray-200 h-48 w-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Service Image 1</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">Personalized Yoga Sessions</h3>
              <p className="text-gray-600 mt-2">
                Experience tailored yoga sessions designed to meet your unique needs and goals, whether you're a beginner or an experienced practitioner.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-[50px_0_0_150px] bg-gray-200 h-48 w-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Service Image 2</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">Group Therapy Sessions</h3>
              <p className="text-gray-600 mt-2">
                Join our group therapy sessions to practice yoga in a supportive community environment. Ideal for enhancing social connections and mutual growth.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg p-6 space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3">
              <div className="rounded-[50px_0_0_150px] bg-gray-200 h-48 w-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Service Image 3</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-800">Meditation & Mindfulness</h3>
              <p className="text-gray-600 mt-2">
                Learn the art of meditation and mindfulness with our expert-guided sessions that help you achieve mental clarity and emotional balance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
