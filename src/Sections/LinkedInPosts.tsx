import React from 'react';
import contents from '../../contents.json';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';

const fadeIn = (direction: 'left' | 'right' | 'up' | 'down', type: string, delay: number, duration: number) => {
    return {
        hidden: {
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
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

const LinkedInPosts: React.FC = () => {
    const posts = contents.linkedinPosts || [];

    return (
        <div className="w-full">
            <motion.div variants={textVariant(0.1)} className="text-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
                    <i className="fa-brands fa-linkedin text-sm"></i>
                    <span>12K+ LinkedIn Network &amp; Community</span>
                </div>
                <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight">
                    LinkedIn Posts &amp; Insights.
                </h2>
            </motion.div>

            <div className="w-full flex justify-center text-center">
                <motion.p
                    variants={fadeIn('up', '', 0.2, 1)}
                    className="mt-4 text-secondary-alt text-sm sm:text-base max-w-3xl leading-relaxed"
                >
                    Engineering breakdowns, real-world ERPNext implementation case studies, system design notes, and software architecture takeaways shared directly with my 12,000+ developer community.
                </motion.p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                    <motion.div
                        key={post.id}
                        variants={fadeIn('up', 'spring', index * 0.15, 0.75)}
                        className="bg-primary-alt/90 border border-white/10 hover:border-tertiary/40 rounded-2xl p-6 flex flex-col justify-between shadow-xl shadow-black/20 transition-all duration-300 group hover:-translate-y-1"
                    >
                        <div>
                            {/* Card Header */}
                            <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                                <span className="text-[11px] font-mono font-semibold uppercase px-2.5 py-1 rounded-md bg-tertiary/10 text-tertiary border border-tertiary/20">
                                    {post.tag}
                                </span>
                                <span className="text-[11px] text-secondary-alt font-medium flex items-center gap-1">
                                    <i className="fa-regular fa-eye text-tertiary text-xs"></i>
                                    {post.engagement}
                                </span>
                            </div>

                            {/* Card Title & Snippet */}
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide mt-4 group-hover:text-tertiary transition-colors leading-snug">
                                {post.title}
                            </h3>

                            <p className="mt-3 text-secondary-alt text-xs sm:text-sm leading-relaxed">
                                {post.snippet}
                            </p>

                            {/* Takeaway Bullets */}
                            <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                                {post.takeaways.map((point, pIdx) => (
                                    <div key={pIdx} className="flex items-start gap-2 text-xs text-secondary/90">
                                        <i className="fa-solid fa-check text-tertiary mt-0.5 text-[10px]"></i>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card CTA */}
                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[11px] text-secondary-alt/70 font-mono">
                                linkedin.com/in/0muhammedirfan
                            </span>
                            <a
                                href={post.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Read ${post.title} on LinkedIn`}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-tertiary hover:text-white transition-colors"
                            >
                                <span>Read Post</span>
                                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* LinkedIn Follow Banner */}
            <motion.div
                variants={fadeIn('up', '', 0.3, 1)}
                className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-alt via-primary-alt to-[#093820] border border-tertiary/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
            >
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#0077b5]/20 border border-[#0077b5]/40 flex items-center justify-center text-[#0077b5] text-2xl flex-shrink-0">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white">
                            Join 12,000+ Followers on LinkedIn
                        </h4>
                        <p className="text-secondary-alt text-xs sm:text-sm mt-1">
                            Follow Muhammed Irfan for weekly technical insights on ERPNext, custom Frappe apps, Next.js, and WhatsApp Cloud API automations.
                        </p>
                    </div>
                </div>

                <a
                    href="https://www.linkedin.com/in/0muhammedirfan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-tertiary text-dark font-bold text-sm tracking-wide hover:opacity-95 transition-all shadow-lg shadow-tertiary/20 flex-shrink-0 flex items-center gap-2"
                >
                    <i className="fa-brands fa-linkedin"></i>
                    <span>Follow @0muhammedirfan</span>
                </a>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(LinkedInPosts, 'insights');
