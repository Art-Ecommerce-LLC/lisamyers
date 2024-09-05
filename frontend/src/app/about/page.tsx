"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import lisapose2 from "../../assets/bliss/lisapose2.jpeg";
import lisapose3 from "../../assets/bliss/lisapose3.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-4 md:p-16 bg-white">
      <div className="w-full max-w-7xl space-y-16 md:space-y-24">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-stretch lg:space-x-12 space-y-8 lg:space-y-0"
        >
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center text-left space-y-6 px-4 md:px-0" 
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              Private Yoga Healing Sessions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Experience personalized healing through Private Yoga Therapy Sessions, designed to meet your individual needs and guide you toward a state of balance and well-being. Whether you’re seeking relief from physical discomfort, emotional challenges, or simply looking to deepen your connection with yourself, these sessions offer a holistic approach to healing.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              <strong>What to Expect:</strong> Your session will be uniquely tailored and may include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-left text-lg md:text-xl text-gray-600">
              <li>Movement: Gentle or dynamic yoga postures.</li>
              <li>Meditation: Techniques to cultivate mindfulness.</li>
              <li>Sound Healing: Harmonizing your body and mind through sound.</li>
              <li>Reiki: Energy healing to restore balance.</li>
              <li>Breathwork: Controlled breathing exercises for vitality.</li>
              <li>Compassionate Listening: A safe space for expression.</li>
            </ul>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center order-first lg:order-last" 
            variants={fadeInUp}
          >
            <div className="w-full relative shadow-lg overflow-hidden rounded-[20px_100px_20px_150px] lg:rounded-[150px_20px_100px_20px] aspect-w-4 aspect-h-3">
              <Image
                // src="https://d1izb07g2ul2j2.cloudfront.net/bliss/lisapose2.jpeg"
                src = {lisapose2}
                priority={true}
                alt="Yoga Session"
                className="w-full h-full object-cover"
                height={900}
                width={900}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB97ql/E7LDqvmsWXbx5RPt044BP4UDW9bx0c++Y6gv1UeW4UB/MUbgOcVUIGegrCOMqLcqVCDR/9k="
                placeholder="blur"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 900px"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col-reverse lg:flex-row items-stretch lg:space-x-12 space-y-8 lg:space-y-0"
        >
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center text-left space-y-6 px-4 md:px-0" 
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              The Path to Bliss
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Bliss is not created; it is within you, waiting to be uncovered. With Lisa's guidance one can bgin to remove layers of programming and distractions, revealing your true bliss.
            </p>
            <ul className="list-disc list-inside space-y-4 text-left text-lg md:text-xl text-gray-600">
              <li>Radical Self-Care: Establish a solid foundation for your well-being.</li>
              <li>Transition from Doing to Being: Embrace the power of presence.</li>
              <li>Emotional Healing: Release past wounds for a healthier self.</li>
              <li>Unprogramming the Program: Break free from societal conditioning.</li>
              <li>Yoga as Therapy: Integrate traditional therapies with yoga wisdom.</li>
              <li>Embodied Bliss: Learn to embody and radiate bliss.</li>
            </ul>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 flex justify-center order-first lg:order-last" 
            variants={fadeInUp}
          >
            <div className="w-full relative shadow-lg overflow-hidden rounded-[20px_100px_20px_150px] lg:rounded-[150px_20px_100px_20px] aspect-w-4 aspect-h-3">
              <Image
                // src="https://d1izb07g2ul2j2.cloudfront.net/bliss/lisapose3.jpeg"
                src = {lisapose3}
                priority={true}
                alt="Meditation or Healing"
                className="w-full h-full object-cover"
                height = {900}
                width={900}
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCnDYS2qvDNIEvZFMcKhTsZMZbcSOuPT6VROj2uTuFuW7nD811UyKXikKguCcNjkVa3H1NcjjJpalulfS5//9k="
                placeholder="blur"
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 900px"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
