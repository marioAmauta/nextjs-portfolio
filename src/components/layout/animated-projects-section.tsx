"use client";

import { motion } from "framer-motion";
import { ComponentProps, PropsWithChildren } from "react";

type AnimatedProjectsSectionProps = PropsWithChildren & ComponentProps<typeof motion.section>;

export function AnimatedProjectsSection({ children, ...props }: AnimatedProjectsSectionProps) {
  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0
        },
        show: {
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="show"
      {...props}
    >
      {children}
    </motion.section>
  );
}

type AnimatedProjectsSectionItemProps = PropsWithChildren & ComponentProps<typeof motion.li>;

export function AnimatedProjectsSectionItem({ children, ...props }: AnimatedProjectsSectionItemProps) {
  return (
    <motion.li
      variants={{
        hidden: {
          y: 20,
          opacity: 0
        },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.li>
  );
}
