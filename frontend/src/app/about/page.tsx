"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import yogaImage2 from "../../assets/bliss/lisapose3.jpeg";
import yogaImage4 from "../../assets/bliss/lisapose2.jpeg";

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
              Experience personalized healing through Private Yoga Healing Sessions. Tailored to meet your individual needs, these sessions offer a holistic approach to healing, whether for physical discomfort, emotional challenges, or deeper self-connection.
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
                src={yogaImage4}
                priority={true}
                alt="Yoga Session"
                className="w-full h-full object-cover"
                quality={15}
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
              Bliss is not created; it is within you, waiting to be uncovered. Our yoga therapy helps remove layers of programming and distractions, revealing your true bliss.
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
                src={yogaImage2}
                priority={true}
                alt="Meditation or Healing"
                className="w-full h-full object-cover"
                quality={15}
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
