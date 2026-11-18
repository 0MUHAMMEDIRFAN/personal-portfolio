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

interface ProjectCardProps {
    index: number;
    name: string;
    company: string;
    description: string[];
    technologies: string[];
    image?: string;
    source_code_link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    index,
    name,
    company,
    description,
    technologies,
    image,
    source_code_link = 'https://github.com/0MUHAMMEDIRFAN',
}) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.2, 0.75)} className="w-full sm:w-[360px] flex">
            <div className="bg-primary-alt/90 border border-white/10 hover:border-tertiary/40 transition-all duration-300 p-5 rounded-2xl w-full flex flex-col justify-between shadow-xl shadow-black/30 group">
                <div>
                    <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-dark/60 flex items-center justify-center border border-white/5">
                        <img
                            src={image || '/assets/Zero-white-logo.png'}
                            alt={`${name} project screenshot`}
                            loading="lazy"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/assets/Zero-white-logo.png';
                            }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                        {/* Top badge */}
                        <div className="absolute top-3 left-3">
                            <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-dark/80 text-tertiary border border-tertiary/30 backdrop-blur-md">
                                {company}
                            </span>
                        </div>

                        {/* Link button */}
                        <div className="absolute top-3 right-3">
                            <a
                                href={source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View code/project for ${name}`}
                                className="w-10 h-10 rounded-full bg-dark/80 hover:bg-tertiary hover:text-dark text-white border border-white/20 flex justify-center items-center transition-all cursor-pointer shadow-lg backdrop-blur-md"
                            >
                                <i className="fa-brands fa-github text-lg"></i>
                            </a>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-white font-bold text-xl sm:text-2xl tracking-wide group-hover:text-tertiary transition-colors">
                            {name}
                        </h3>
                        <div className="mt-3 text-secondary-alt text-sm leading-relaxed space-y-2 min-h-[90px]">
                            {description.map((point, i) => (
                                <p key={i} className="text-secondary/90">
                                    {point}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <span
                            key={`${name}-${tech}`}
                            className="text-xs font-mono text-tertiary bg-tertiary/10 border border-tertiary/20 px-2.5 py-1 rounded-md"
                        >
                            #{tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        <div className="w-full">
            <motion.div variants={textVariant(0.1)} className="text-center">
                <p className="text-tertiary font-semibold text-sm sm:text-base tracking-widest uppercase">
                    My Work &amp; Portfolio
                </p>
                <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight mt-2">
                    Featured Projects.
                </h2>
            </motion.div>

            <div className="w-full flex justify-center text-center">
                <motion.p
                    variants={fadeIn('up', '', 0.2, 1)}
                    className="mt-4 text-secondary-alt text-sm sm:text-base max-w-3xl leading-relaxed"
                >
                    Showcasing production ERPNext workflows, custom Frappe applications, full-stack Next.js web applications,
                    and React Native cross-platform systems. Each project represents real-world business automation and architectural problem solving.
                </motion.p>
            </div>

            <div className="mt-14 flex flex-wrap gap-8 justify-center items-stretch">
                {contents.projects.map((project, index) => (
                    <ProjectCard
                        key={`project-${index}`}
                        index={index}
                        name={project.name}
                        company={project.company}
                        description={project.description}
                        technologies={project.technologies}
                        image={project.imagePath}
                        source_code_link={project.source_code_link}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, 'projects');
