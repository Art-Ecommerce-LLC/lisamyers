"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto text-left">
            Explore our range of personalized services designed to help you
            achieve balance and well-being.
          </p>
        </motion.div>

        {/* Services Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Service Card 1 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="https://d1izb07g2ul2j2.cloudfront.net/bliss/lisapose7.jpeg"
              alt="Private Yoga Therapy Sessions"
              className="object-cover w-full h-[320px] align-middle flex items-center justify-center mr-auto ml-auto"
              height={900}
              width={900}
              priority={true}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBnh7WLnwv57TW4BvbfzIGbIDKDyfpgj86or/akih1tonVhkMZBlvfrWZqN7dx+KZNl1MvlQokeJCNimMkgegJAP4CuRku7lpGZriUsSSSXPNc8XNrRjlBJn//Z"
              placeholder="blur"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Private Yoga Therapy
              </h3>
              <p className="text-gray-600 mt-2">
                Yoga therapy extends beyond the scope of conventional western medicine, offering relief for many ailments we face today. These sessions are tailored to your individual needs, guiding you toward a state of balance and well-being. 
              </p>
              {/* <p className="mt-4 text-blue-500 font-semibold hover:underline">
                <Link href="/services/yoga-therapy" className="text-blue-500 font-semibold hover:underline inline-block">
                  Learn More →
                </Link>
              </p> */}
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-["
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="https://d1izb07g2ul2j2.cloudfront.net/neurooptimal.jpg"
              alt="NeuroOptimal Brain Training"
              className="object-cover w-[320px] h-[320px] align-middle flex items-center justify-center mr-auto ml-auto" 
              height={300}
              width={300}
              priority={true}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0JbZ9We+vr29uLe4gZz5qzMi24ViFVQDjIABOQc5rb0/V9Wm0y1lksN8jwozMOMkgZNZXiK1t38XWAaCJhIylwUB3c9/Wu3AAGBwK2nokYw1bP//Z"
              placeholder="blur"

            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                NeuroOptimal® Brain Neurofeedback
              </h3>
              <p className="text-gray-600 mt-2">
                Enhance your mental clarity and emotional balance with Neurofeedback. This will help you rewire your brain for optimal performance, improving focus, relaxation, and overall mental health
              </p>
              {/* <p className="mt-4 text-blue-500 font-semibold hover:underline">
                <Link href="/services/neurofeedback" className="text-blue-500 font-semibold hover:underline inline-block">
                  Learn More →
                </Link>
              </p> */}
            </div>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-gray-300 h-[320px] flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-700">
                New Service Coming Soon!
              </h3>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Stay Tuned
              </h3>
              <p className="text-gray-600 mt-2">
                Lisa is always working to bring new offerings to our service
                list. Stay tuned for updates!
              </p>
              {/* <p className="mt-4 text-blue-500 font-semibold hover:underline">
                Learn More →
              </p> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
