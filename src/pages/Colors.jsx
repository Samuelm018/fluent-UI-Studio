import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Palette, Check, Droplets, Sun, Moon, Zap, Layout } from 'lucide-react';

const Colors = () => {
    const { currentTheme, setCurrentTheme } = useTheme();

    const themes = [
        {
            id: 'theme-default',
            name: 'Modern Premium',
            description: 'A sophisticated blend of deep violet and vibrant primary colors.',
            icon: <Droplets className="text-primary" />,
            colors: {
                primary: '#6C63FF',
                secondary: '#2A2D3E',
                surface: '#1E1E2F',
                background: '#121212'
            }
        },
        {
            id: 'theme-sunset',
            name: 'Sunset Vibrant',
            description: 'Warm, energetic gradients inspired by dusk skies.',
            icon: <Sun className="text-orange-500" />,
            colors: {
                primary: '#FF6B6B',
                secondary: '#4ECDC4',
                surface: '#2C2C2C',
                background: '#1A1A1A'
            }
        },
        {
            id: 'theme-minimal',
            name: 'Minimal White',
            description: 'Clean, airy, and professional with high readability.',
            icon: <Layout className="text-gray-800" />,
            colors: {
                primary: '#000000',
                secondary: '#F5F5F7',
                surface: '#FFFFFF',
                background: '#FAFAFA'
            }
        },
        {
            id: 'theme-neon',
            name: 'Dark Neon',
            description: 'High contrast cyberpunk aesthetics for the bold.',
            icon: <Zap className="text-cyan-400" />,
            colors: {
                primary: '#00E5FF',
                secondary: '#121212',
                surface: '#1A1A1A',
                background: '#000000'
            }
        }
    ];

    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm border border-primary/20">
                    Design System
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-main">
                    Curated <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">Color Palettes</span>
                </h1>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                    Explore our pre-defined themes. Switch instantly to see how the entire application adapts to different moods and styles.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {themes.map((theme, index) => (
                    <motion.div
                        key={theme.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`cursor-pointer group relative overflow-hidden rounded-3xl border transition-all duration-300 ${currentTheme === theme.id
                                ? 'border-primary ring-2 ring-primary/20 bg-surface shadow-2xl scale-[1.02]'
                                : 'border-white/10 bg-surface/50 hover:border-white/30 hover:bg-surface'
                            }`}
                        onClick={() => setCurrentTheme(theme.id)}
                    >
                        <div className="absolute top-4 right-4 z-10">
                            {currentTheme === theme.id && (
                                <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                            )}
                        </div>

                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                    {theme.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-text-main">{theme.name}</h3>
                                    <p className="text-sm text-text-muted">Active Theme</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-4 mb-6 h-24 rounded-2xl overflow-hidden border border-white/10">
                                <div className="h-full flex flex-col items-center justify-center relative group/color" style={{ backgroundColor: theme.colors.primary }}>
                                    <span className="opacity-0 group-hover/color:opacity-100 absolute bg-black/80 text-white text-[10px] px-2 py-1 rounded">Primary</span>
                                </div>
                                <div className="h-full flex flex-col items-center justify-center relative group/color" style={{ backgroundColor: theme.colors.secondary }}>
                                    <span className="opacity-0 group-hover/color:opacity-100 absolute bg-black/80 text-white text-[10px] px-2 py-1 rounded">Secondary</span>
                                </div>
                                <div className="h-full flex flex-col items-center justify-center relative group/color" style={{ backgroundColor: theme.colors.surface }}>
                                    <span className="opacity-0 group-hover/color:opacity-100 absolute bg-black/80 text-white text-[10px] px-2 py-1 rounded">Surface</span>
                                </div>
                                <div className="h-full flex flex-col items-center justify-center relative group/color" style={{ backgroundColor: theme.colors.background }}>
                                    <span className="opacity-0 group-hover/color:opacity-100 absolute bg-white/80 text-black text-[10px] px-2 py-1 rounded">Bg</span>
                                </div>
                            </div>

                            <p className="text-text-muted text-sm leading-relaxed">
                                {theme.description}
                            </p>
                        </div>

                        <div className={`h-1.5 w-full bg-gradient-to-r ${theme.id === 'theme-default' ? 'from-[#6C63FF] to-[#2A2D3E]' :
                                theme.id === 'theme-sunset' ? 'from-[#FF6B6B] to-[#4ECDC4]' :
                                    theme.id === 'theme-minimal' ? 'from-black to-gray-200' :
                                        'from-[#00E5FF] to-purple-600'
                            }`} />
                    </motion.div>
                ))}
            </div>

            {/* Usage Example */}
            <div className="rounded-3xl bg-surface border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-transparent pointer-events-none" />
                <Palette className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-main">Ready to implement?</h2>
                <p className="text-text-muted mb-8 max-w-xl mx-auto">
                    Our theme engine uses CSS variables for instant switching without re-renders.
                    Simply use <code className="bg-black/20 px-2 py-1 rounded text-primary font-mono text-sm">useTheme()</code> hook to control it globally.
                </p>
                <button className="btn-primary">View Documentation</button>
            </div>
        </div>
    );
};

export default Colors;
