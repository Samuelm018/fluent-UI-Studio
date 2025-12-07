import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Layers, Palette, Layout, Phone, Sun, Moon, Code, Pipette } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { currentTheme, setCurrentTheme } = useTheme();

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'Components', path: '/components', icon: <Layers size={18} /> },
        { name: 'Colors', path: '/colors', icon: <Palette size={18} /> },
        { name: 'Theme Gen', path: '/color-explorer', icon: <Pipette size={18} /> },
        { name: 'Developer', path: '/developer', icon: <Code size={18} /> },
        { name: 'Contact', path: '/contact', icon: <Phone size={18} /> },
    ];

    const toggleTheme = () => {
        const themes = ['theme-default', 'theme-sunset', 'theme-minimal', 'theme-neon'];
        const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
        setCurrentTheme(themes[nextIndex]);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="backdrop-blur-md bg-surface/80 border-b border-white/20 shadow-glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-main flex items-center justify-center text-white font-bold text-xl shadow-lg">F</div>
                            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-main">
                                FluentUI Studio
                            </span>
                        </div>

                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2
                        ${isActive ? 'text-primary bg-primary/10' : 'text-text-muted hover:text-primary hover:bg-primary/5'}
                      `}
                                        >
                                            {link.icon}
                                            {link.name}
                                            {isActive && (
                                                <motion.div
                                                    layoutId="navbar-underline"
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                                    initial={false}
                                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-black/5 transition-colors text-text-muted hover:text-primary"
                                title="Switch Theme"
                            >
                                {currentTheme === 'theme-neon' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        </div>

                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="bg-primary/10 inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/20 focus:outline-none"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-surface border-t border-white/20"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3
                      ${location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-text-muted hover:bg-black/5'}
                    `}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => { toggleTheme(); setIsOpen(false); }}
                                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-text-muted hover:bg-black/5 flex items-center gap-3"
                                >
                                    <Sun size={18} /> Switch Theme
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
