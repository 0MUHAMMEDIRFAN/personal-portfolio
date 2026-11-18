import React from 'react';
import contents from '../../contents.json';

const Footer: React.FC = () => {
    const socials = contents.socials || [];

    return (
        <footer className="mt-20 border-t border-white/10 bg-primary-alt/60 backdrop-blur-md pt-12 pb-8" id="contact">
            <div className="w-[min(90%,75rem)] mx-auto flex flex-col items-center gap-8">
                {/* Brand / Intro */}
                <div className="text-center max-w-xl">
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                        MUHAMMED IRFAN
                    </h3>
                    <p className="text-tertiary text-sm font-semibold mt-1">
                        Frappe / ERPNext Developer &amp; Full-Stack Software Engineer
                    </p>
                    <p className="text-secondary-alt text-xs sm:text-sm mt-3 leading-relaxed">
                        Architecting robust ERPNext workflows, Next.js &amp; React Native applications, and Meta WhatsApp Cloud API automations. Open for consulting and high-impact engineering collaborations.
                    </p>
                </div>

                {/* Social icons row */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {socials.map((platform, index) => (
                        <a
                            key={index}
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${platform.name} - 0muhammedirfan`}
                            className="w-11 h-11 rounded-xl bg-dark/70 border border-white/10 hover:border-tertiary hover:text-tertiary text-secondary flex items-center justify-center transition-all hover:scale-105 shadow-md shadow-black/20"
                        >
                            <i className={`${platform.icon} text-lg`}></i>
                        </a>
                    ))}
                </div>

                {/* Direct quick links */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-secondary-alt">
                    <a href="https://www.linkedin.com/in/0muhammedirfan" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                        LinkedIn (0muhammedirfan)
                    </a>
                    <span>•</span>
                    <a href="https://github.com/0MUHAMMEDIRFAN" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                        GitHub (0MUHAMMEDIRFAN)
                    </a>
                    <span>•</span>
                    <a href="https://www.instagram.com/0muhammedirfan" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                        Instagram (@0muhammedirfan)
                    </a>
                    <span>•</span>
                    <a href="https://linktr.ee/0muhammedirfan" target="_blank" rel="noopener noreferrer" className="hover:text-tertiary transition-colors">
                        Linktree
                    </a>
                </div>

                {/* Copyright info */}
                <div className="text-center pt-4 border-t border-white/5 w-full flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-secondary-alt/70">
                    <p>Copyright © {new Date().getFullYear()} Muhammed Irfan (0MUHAMMEDIRFAN). All rights reserved.</p>
                    <p className="text-tertiary font-mono">muhammedirfan.netlify.app</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
