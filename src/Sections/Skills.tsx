import React from 'react';
import contents from '../../contents.json';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

const fadeIn = (direction: 'left' | 'right' | 'up' | 'down', type: string, delay: number, duration: number) => {
    return {
        hidden: {
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeOut',
            },
        },
    };
};

const textVariant = (delay: number) => {
    return {
        hidden: {
            y: -30,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

const Skills: React.FC = () => {
    const skillCategories = contents.skills || [];

    return (
        <div className="w-full">
            <motion.div variants={textVariant(0.1)} className="text-center">
                <p className="text-tertiary font-semibold text-sm sm:text-base tracking-widest uppercase">
                    Technical Expertise
                </p>
                <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight mt-2">
                    Skills &amp; Tech Stack.
                </h2>
            </motion.div>

            <div className="w-full flex justify-center text-center">
                <motion.p
                    variants={fadeIn('up', '', 0.2, 1)}
                    className="mt-4 text-secondary-alt text-sm sm:text-base max-w-3xl leading-relaxed"
                >
                    A comprehensive stack honed across enterprise ERP deployments, cloud architecture, full-stack product development, and state-of-the-art AI systems.
                </motion.p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {skillCategories.map((cat, index) => (
                    <motion.div
                        key={cat.category}
                        variants={fadeIn(index % 2 === 0 ? 'left' : 'right', 'spring', index * 0.2, 0.75)}
                        className="bg-primary-alt/90 border border-white/10 hover:border-tertiary/40 rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/20 transition-all duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/30 flex items-center justify-center text-tertiary">
                                    <i className={`${cat.icon} text-lg`}></i>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                                    {cat.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {cat.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="text-xs sm:text-sm text-secondary bg-dark/60 border border-white/10 hover:border-tertiary/50 hover:text-tertiary px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, 'skills');
