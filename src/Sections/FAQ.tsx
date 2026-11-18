import React, { useState } from 'react';
import contents from '../../contents.json';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

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

const FAQ: React.FC = () => {
    const faqs = contents.faqs || [];
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <motion.div variants={textVariant(0.1)} className="text-center">
                <p className="text-tertiary font-semibold text-sm sm:text-base tracking-widest uppercase">
                    Common Inquiries &amp; Background
                </p>
                <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight mt-2">
                    Frequently Asked Questions.
                </h2>
            </motion.div>

            <div className="mt-12 space-y-4">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div
                            key={index}
                            className="bg-primary-alt/90 border border-white/10 hover:border-tertiary/40 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => toggle(index)}
                                aria-expanded={isOpen}
                                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                            >
                                <span className="text-base sm:text-lg font-bold text-white hover:text-tertiary transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-tertiary flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-tertiary/10 border-tertiary' : ''}`}>
                                    <i className="fa-solid fa-chevron-down text-xs"></i>
                                </div>
                            </button>

                            {isOpen && (
                                <div className="px-6 pb-6 pt-1 text-secondary-alt text-sm sm:text-base leading-relaxed border-t border-white/5">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SectionWrapper(FAQ, 'faq');
