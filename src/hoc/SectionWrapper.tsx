import { motion } from "framer-motion";
import React from "react";

const SectionWrapper = (Component: React.FC, idName: string) =>
    function HOC() {
        return (
            <motion.section
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-0 sm:px-12 px-4 sm:py-16 py-12 max-w-7xl mx-auto"
            >
                <span className='block relative -top-24' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
