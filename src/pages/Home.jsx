import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, Palette, Layout, Zap, MousePointer, Feather } from 'lucide-react';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const features = [
        {
            icon: <Layers className="w-6 h-6 text-primary" />,
            title: "Modern Components",
            description: "20+ Ready-to-use React components with glassmorphism styles.",
            path: "/components"
        },
        {
            icon: <Palette className="w-6 h-6 text-secondary" />,
            title: "Curated Colors",
            description: "Professionally selected color palettes for your next project.",
            path: "/colors"
        },
        {
            icon: <Layout className="w-6 h-6 text-accent" />,
            title: "Premium Templates",
            description: "Full-page layouts designed to impress and convert.",
            path: "/templates"
        }
    ];

    return (
        <div className="flex flex-col min-h-[calc(100vh-100px)]">
            {/* Hero Section */}
            <section className="flex-grow flex items-center justify-center py-20 relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <motion.div
                    className="text-center max-w-4xl mx-auto space-y-8"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariants} className="inline-block">
                        <span className="px-4 py-1.5 rounded-full bg-surface border border-white/20 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
                            ✨ The Ultimate UI Kit
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight">
                        Build Stunning Apps
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-main">
                            With FluentUI Studio
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl text-text-muted max-w-2xl mx-auto">
                        A premium collection of glassmorphism components, vibrant color palettes, and modern templates to elevate your web design.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/components" className="btn-primary group">
                            Explore Components
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/templates" className="px-6 py-2 rounded-xl bg-surface border border-white/20 hover:bg-white/40 transition-all duration-300 text-text-main shadow-sm backdrop-blur-sm">
                            View Templates
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {features.map((feature, index) => (
                        <Link
                            key={index}
                            to={feature.path}
                            className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300 group"
                        >
                            <div className="mb-4 p-3 rounded-lg bg-surface w-fit group-hover:bg-white/50 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-text-muted">{feature.description}</p>
                        </Link>
                    ))}
                </motion.div>
            </section>

            {/* Design Showcase Micro-section */}
            <section className="py-20 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Glassmorphism', 'Neumorphism', 'Gradients', 'Animations'].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center gap-2 text-text-muted font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Zap size={16} className="text-accent" /> {item}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
