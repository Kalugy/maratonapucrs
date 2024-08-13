'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Example() {
  // Use `useInView` hook to determine when the element is in view
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers every time the element comes into view
    threshold: 0.6 // 60% of the component must be visible to trigger
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Optionally reset to hidden if out of view
    }
  }, [controls, inView]);

  return (
    <section className="mx-auto py-16 sm:py-24 lg:py-32">
      <div
        className="gap-16 items-center  px-8 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-16"
        ref={ref} // Attach the ref to trigger animation when in view
      >
        {/* Animated Text Section */}
        <motion.div
          className=" text-slate-900 font-medium sm:text-lg dark:text-gray-400"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="mb-4 lg:mb-12 text-4xl tracking-tight font-extrabold text-primary-light">
            My body puzzle
          </h2>

          <p className="mb-4 lg:mb-12 text-black dark:text-gray-300">
            Memorizing large amounts of information can be challenging, but when you engage with the material interactively, learning becomes much more manageable and enjoyable. Interactive methods make complex data easier to understand and remember, turning the learning process into a more fun and rewarding experience
          </p>
          <p className='text-black dark:text-gray-300'>
            Explore the names and structures of bones within the human body, uncovering their locations and understanding the terminology associated with them
          </p>
        </motion.div>

        {/* Animated Images Section */}
        <motion.div
          className="grid grid-cols-2 gap-4 mt-20"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 }, // Start from slightly lower and invisible
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                type: 'spring',
                bounce: 0.5 // Adjust bounce value as needed
              }
            },
          }}
        >
          <motion.div
            className="w-full rounded-lg"
            initial={{ y: -30 }}
            animate={{ rotate: 3 }}
            transition={{ from: 90, duration: 2 }}
          >
            <Image
              className="w-full rounded-lg"
              src="/images/b3.jpeg"
              alt="office content 1"
              width={400}
              height={800}
              layout="responsive"
            />
          </motion.div>
          <motion.div
            className="mt-4 w-full lg:mt-10 rounded-lg"
            initial={{ y: -30 }}
            
            animate={{ rotate: -3 }}
            transition={{ from: 90, duration: 2 }}
          >
            <Image
              className="w-full rounded-lg"
              src="/images/b1.jpeg"
              alt="office content 2"
              width={500}
              height={800}
              layout="responsive"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
