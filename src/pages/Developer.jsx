import React from 'react';
import { motion } from 'framer-motion';
import DesignerCard from '../components/showcase/DesignerCard';

const Developer = () => {
    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full flex flex-col items-center relative z-10"
            >
                {/* Colorful Background Blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg -z-10 pointer-events-none">
                    <div className="absolute top-10 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-[80px] animate-pulse mix-blend-screen" />
                    <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-[80px] animate-pulse delay-1000 mix-blend-screen" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/20 rounded-full blur-[60px]" />
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
                        Meet the <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Creator</span>
                    </h1>
                    <p className="text-text-muted max-w-lg mx-auto">
                        The mind behind FluentUI Studio. Passionate about crafting beautiful, functional, and accessible web experiences.
                    </p>
                </div>

                <DesignerCard />

                <div className="mt-12 p-4 rounded-xl bg-surface/50 border border-white/5 text-xs text-text-muted text-center max-w-sm">
                    Try changing the theme in the Navbar to see the card adapt instantly!
                </div>
            </motion.div>
        </div>
    );
};

export default Developer;
