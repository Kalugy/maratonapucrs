'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, className, animationType = 'fade' }) => {
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

  // Define animation variants
  const variants = {
    slide: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    bounce: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <motion.section
      className={` ${className}`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animationType]}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
