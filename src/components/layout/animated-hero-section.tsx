"use client";

import { motion } from "framer-motion";
import { ComponentProps, PropsWithChildren } from "react";

type AnimatedHeroSectionProps = PropsWithChildren & ComponentProps<typeof motion.section>;

export function AnimatedHeroSection({ children, ...props }: AnimatedHeroSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
