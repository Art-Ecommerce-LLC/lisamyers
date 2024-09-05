"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@headlessui/react";

export default function Home() {

  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-8xl p-8 md:p-16 lg:space-x-16">
        <motion.div
          className="flex flex-col justify-center w-full lg:w-1/2 xl:w-2/5 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
            Find Your Inner Peace
          </h1>
          <p className="text-lg text-left md:text-xl xl:text-2xl text-gray-600">
            Experience holistic healing through Yoga Therapy, a practice that
            integrates traditional therapies and treatments with the wisdom of
            yoga, promoting lasting, transformative healing.
          </p>
          <Button
            as="a"
            href="mailto:lisa@blissmember.com?subject=Book%20a%20Yoga%20Session&body=I%20would%20like%20to%20book%20a%20yoga%20session."
            className="Button"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 lg:mt-0 w-full lg:w-1/2 xl:w-3/5 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full">
            <Image
              src={`/lisapose6.webp`}
              alt="Yoga Therapy"
              className="rounded-[100px_20px_50px_20px] lg:rounded-[150px_20px_100px_20px] shadow-lg w-full h-auto"
              priority = {true}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDCstOvYV8lULRz7gwjUuSD6+g/rxVs2ssZ2faJl28Y2Hj9a7/JjiXYdvyY+XjjJrl7lQbqUkD75/nVV6HIlK+5lCq5Nrsf/9k="
              placeholder="blur"
              height={900}
              width={900}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 900px"
            />
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-8xl p-8 md:p-16 bg-gray-100 mt-16">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-2">
          About Me
        </h2>
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-gray-700 text-center">
          C-IAYT Certified Yoga Therapist, E-RYT 500
        </h3>
        <h3 className="text-2xl md:text-3xl xl:text-3xl font-semibold text-gray-700 text-center mb-8">
          Holistic Health Coach
        </h3>
        <div className="max-w-4xl mx-auto text-left">
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mt-4">
            Lisa's path to becoming a yoga therapist and healing guide began in her youth as she navigated the challenging terrain of anxiety, depression, intergenerational trauma, and a life-threatening eating disorder. Introduced to yoga as a cornerstone of her healing, she embarked on a 25-year journey into holistic wellness, culminating in her practice today.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mt-4">
            Growing up in Southern California from the age of 10, Lisa didn’t identify as an athletic or outdoor person. Influenced by the dieting culture of the 70s, 80s, and 90s, and driven by societal pressures, she developed a skewed relationship with her body, leading to bulimia in her teens and twenties. This period of her life was marked by constant efforts to manipulate her body to meet external expectations, a reflection of the instability and chaos she experienced in her childhood.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mt-4">
            As Lisa transitioned into adulthood, she faced additional challenges, including the infertility, addiction, managing relationships, and dealing with grief, childhood trauma, job insecurity, and health issues. While traditional therapy and medical treatments provided her with basic survival tools, it was through Yoga Therapy that she found the deeper healing she desperately needed healing that transformed her from the inside out.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mt-4">
            Lisa’s extensive life experiences, including a variety of careers as well as being a stay-home mom, have given her a unique perspective on common work-life issues and relationship stresses. She has also delved deep into her psyche through hypnotherapy, breathwork, and plant medicine, uncovering layers of intergenerational trauma and finding profound healing. Her journey led her to India this past year, where she sought the deepest meanings of healing within herself.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl text-gray-600 mt-4">
            Now, as a mother of three adult children, a grandmother, and a wife of 30 years, Lisa is ready to share her wisdom with others. She understands the importance of knowing oneself deeply and is committed to guiding others on their journeys to self-discovery and healing.
          </p>
        </div>
      </div>
    </div>
  );
}
