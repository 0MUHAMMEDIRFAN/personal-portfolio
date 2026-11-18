import React, { useState } from 'react';
import contents from '../../contents.json';

const TopBar: React.FC = () => {
    const [isCollapse, setIsCollapse] = useState(true);

    const navItems = [
        { heading: 'Home', href: '#home' },
        // { heading: 'Projects', href: '#projects' }, // Hidden as requested
        { heading: 'Skills', href: '#skills' },
        { heading: 'Experience', href: '#experience' },
    ];

    const socials = contents.socials || [];

    const handleLinkClick = () => {
        setIsCollapse(true);
    };

    return (
        <header className="fixed top-0 left-0 z-50 w-full p-3 sm:p-4 font-medium">
            <div className="backdrop-blur-md bg-primary/70 border border-white/10 rounded-xl flex justify-between items-center px-4 sm:px-6 py-3 max-w-[75rem] mx-auto shadow-lg shadow-black/20">
                <a href="#home" className="flex items-center gap-2 group">
                    <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                    <h2 className="text-white font-bold text-lg sm:text-xl tracking-wider group-hover:text-tertiary transition-colors">
                        MUHAMMED IRFAN
                    </h2>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6" id="navbarSupportedContent">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="text-secondary hover:text-tertiary transition-colors text-sm font-medium"
                        >
                            {item.heading}
                        </a>
                    ))}

                    {/* Socials Dropdown */}
                    <div className="relative group">
                        <button className="flex items-center gap-1.5 text-secondary group-hover:text-tertiary transition-colors text-sm font-medium cursor-pointer py-1">
                            <span>Socials</span>
                            <i className="fa-solid fa-chevron-down text-xs transition-transform group-hover:rotate-180"></i>
                        </button>
                        <div className="hidden group-hover:flex flex-col gap-1 absolute top-full right-0 mt-2 w-48 bg-primary-alt border border-white/10 rounded-xl p-2 shadow-xl backdrop-blur-lg z-50">
                            {socials.map((subItem, index) => (
                                <a
                                    key={index}
                                    href={subItem.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-secondary hover:text-tertiary hover:bg-white/5 transition-all"
                                >
                                    <i className={`${subItem.icon} w-4 text-center text-tertiary`}></i>
                                    <span>{subItem.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <a
                        href="https://www.linkedin.com/in/0muhammedirfan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-tertiary text-dark font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-all ml-2"
                    >
                        Connect
                    </a>
                </nav>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsCollapse(!isCollapse)}
                        aria-label="Toggle navigation menu"
                        className="cursor-pointer p-2 rounded-lg border border-white/10 text-secondary hover:text-tertiary hover:border-tertiary transition-colors"
                    >
                        <div className="burger_icon" />
                    </button>

                    {/* Mobile Dropdown Menu */}
                    <div
                        className={`absolute top-full right-3 left-3 mt-2 bg-primary-alt/95 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl transition-all duration-300 flex flex-col gap-4 z-50 ${
                            isCollapse ? 'opacity-0 pointer-events-none -translate-y-2' : 'opacity-100 pointer-events-auto translate-y-0'
                        }`}
                    >
                        <div className="flex flex-col gap-3 border-b border-white/10 pb-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className="text-secondary hover:text-tertiary text-base font-medium py-1"
                                >
                                    {item.heading}
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-xs uppercase tracking-wider text-tertiary font-semibold">
                                Connect with Me
                            </span>
                            <div className="grid grid-cols-2 gap-2 pt-1">
                                {socials.map((subItem, index) => (
                                    <a
                                        key={index}
                                        href={subItem.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={handleLinkClick}
                                        className="flex items-center gap-2 text-xs text-secondary-alt hover:text-tertiary p-1.5 rounded hover:bg-white/5 transition-colors"
                                    >
                                        <i className={`${subItem.icon} text-tertiary w-3.5`}></i>
                                        <span>{subItem.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
