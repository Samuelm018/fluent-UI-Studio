import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[60vh]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl text-center"
            >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
                    Get in Touch
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-main leading-tight">
                    Let's build something <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">amazing</span> together.
                </h1>
                <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
                    Whether you have a question about the library, want to collaborate on a project, or just want to say hi, I'd love to hear from you.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                    <div className="flex items-center gap-4 text-text-main p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/50 transition-colors min-w-[280px]">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Mail size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold">Email Me</h3>
                            <p className="text-text-muted text-sm">samuelm99729.work@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-text-main p-6 rounded-2xl bg-surface border border-white/10 hover:border-primary/50 transition-colors min-w-[280px]">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                            <Phone size={24} />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold">Call Me</h3>
                            <p className="text-text-muted text-sm">6382636384</p>
                        </div>
                    </div>
                </div>


            </motion.div>
        </div>
    );
};

export default Contact;
