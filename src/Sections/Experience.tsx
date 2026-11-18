import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import contents from '../../contents.json';
import { SectionWrapper } from '../hoc';

interface ExperienceCardProps {
    title: string;
    company: string;
    duration?: string;
    tenure: string;
    description: string[];
    icon: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, tenure, description, icon }) => {
    const [imgSrc, setImgSrc] = useState(icon);

    return (
        <VerticalTimelineElement
            contentStyle={{
                background: '#093820',
                color: '#fff',
                borderRadius: '16px',
                border: '1px solid rgba(28, 228, 128, 0.2)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #093820' }}
            date={tenure}
            dateClassName="!text-tertiary !font-semibold !text-sm sm:!text-base"
            iconStyle={{
                background: '#093820',
                border: '2px solid #1ce480',
                boxShadow: '0 0 15px rgba(28, 228, 128, 0.3)',
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden p-2 bg-dark">
                    <img
                        src={imgSrc}
                        alt={`${company} logo`}
                        loading="lazy"
                        className="w-full h-full object-contain"
                        onError={() => setImgSrc('/assets/Zero-white-logo.png')}
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide">{title}</h3>
                <p className="text-tertiary text-sm sm:text-base font-semibold" style={{ margin: '4px 0 0 0' }}>
                    {company}
                </p>
            </div>

            <ul className="mt-4 list-disc ml-5 space-y-2">
                {description.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-secondary-alt text-xs sm:text-sm pl-1 tracking-wide leading-relaxed"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
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

const Experience: React.FC = () => {
    return (
        <div className="w-full">
            <motion.div variants={textVariant(0.1)} className="text-center">
                <p className="text-tertiary font-semibold text-sm sm:text-base tracking-widest uppercase">
                    Career Timeline &amp; Milestones
                </p>
                <h2 className="text-white font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight mt-2">
                    Work Experience.
                </h2>
            </motion.div>

            <div className="mt-14 w-full">
                <VerticalTimeline lineColor="#1ce48033">
                    {contents.experience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.role}
                            company={exp.company}
                            description={exp.responsibilities}
                            duration={exp.duration}
                            tenure={exp.tenure}
                            icon={exp.icon}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default SectionWrapper(Experience, 'experience');
