"use client";

import { motion } from "framer-motion";
import { Button } from "@headlessui/react";
import Image from "next/image";

export default function Contact() {


  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        <motion.div
          className="order-1 lg:order-2 flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left p-4 lg:p-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight text-center">
            Get in Touch
          </h1>
          <p className="text-lg text-left md:text-xl xl:text-2xl text-gray-600">
            I would love to hear from you regarding how I can be of service. Contact me for questions or to schedule a session.
          </p>
          <Button
            as="a"
            href="mailto:lisa@blissmember.com?subject=Inquiry%20about%20Yoga%20Therapy"
            className="Button"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="order-2 lg:order-1 mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center p-4 lg:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full">
            <Image
              src="https://d1izb07g2ul2j2.cloudfront.net/bliss/lisapose1.jpeg"
              alt="Contact Us"
              className="rounded-[100px_20px_50px_20px] lg:rounded-[150px_20px_100px_20px] shadow-lg h-full w-full"
              priority={true}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDY1DVJJdc0YWupxC2RB9oIuBhsNznn0ro2uYXYsuswKpOQPNHA/KvFgT5kPJ6/1roFd9o+ZunrXJT5Xuj0Jwemp//Z"
              placeholder="blur"
              height={900}
              width={900}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
