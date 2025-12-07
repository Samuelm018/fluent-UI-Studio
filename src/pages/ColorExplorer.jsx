import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pipette, Download, RefreshCcw, Layers, Zap } from 'lucide-react';

const ColorExplorer = () => {
    // Default starting palette
    const defaultColors = {
        primary: '#6366F1',
        secondary: '#A855F7',
        accent: '#06B6D4',
        background: '#0F172A',
        surface: '#1E293B',
        textMain: '#F8FAFC',
        textMuted: '#94A3B8'
    };

    const [colors, setColors] = useState(defaultColors);

    const handleColorChange = (key, value) => {
        setColors(prev => ({ ...prev, [key]: value }));
    };

    const handleExport = () => {
        const themeConfig = {
            theme: {
                extend: {
                    colors: colors
                }
            }
        };
        const jsonString = JSON.stringify(themeConfig, null, 2);
        navigator.clipboard.writeText(jsonString);
        alert('Theme config copied to clipboard!');
    };

    // Helper to get contrast text color (simple version)
    const getContrastYIQ = (hexcolor) => {
        hexcolor = hexcolor.replace("#", "");
        var r = parseInt(hexcolor.substr(0, 2), 16);
        var g = parseInt(hexcolor.substr(2, 2), 16);
        var b = parseInt(hexcolor.substr(4, 2), 16);
        var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white';
    }

    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-text-main flex items-center justify-center gap-3">
                    <Pipette className="text-primary" size={40} /> Color <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Explorer</span>
                </h1>
                <p className="text-text-muted max-w-2xl mx-auto">
                    Design your own theme system. Adjust the core colors and verify them against real components instantly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Controls Panel */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-surface/50 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-text-main">Palette Control</h2>
                            <button
                                onClick={() => setColors(defaultColors)}
                                className="p-2 rounded-full hover:bg-white/5 text-text-muted hover:text-white transition-colors"
                                title="Reset to Default"
                            >
                                <RefreshCcw size={18} />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {Object.entries(colors).map(([key, value]) => (
                                <div key={key} className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <label className="capitalize text-text-muted font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</label>
                                        <span className="font-mono text-xs opacity-70">{value}</span>
                                    </div>
                                    <div className="flex gap-3 h-10">
                                        <div className="relative flex-grow h-full rounded-xl overflow-hidden border border-white/10">
                                            <input
                                                type="color"
                                                value={value}
                                                onChange={(e) => handleColorChange(key, e.target.value)}
                                                className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] cursor-pointer p-0 m-0 border-0"
                                            />
                                        </div>
                                        <div className="flex-shrink-0 w-24 h-full bg-white/5 rounded-xl border border-white/10 flex items-center px-3 font-mono text-xs">
                                            {value}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <button onClick={handleExport} className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                                <Download size={18} /> Export Theme JSON
                            </button>
                        </div>
                    </div>
                </div>

                {/* Live Preview Panel */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Gradient Preview */}
                    <div className="rounded-3xl p-1 border border-white/10 bg-surface/30">
                        <div
                            className="h-32 rounded-[22px] w-full flex items-center justify-center relative overflow-hidden"
                            style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})` }}
                        >
                            <div className="absolute inset-0 bg-grid-white/10" />
                            <h3 className="text-3xl font-bold text-white drop-shadow-md">Gradient Preview</h3>
                        </div>
                    </div>

                    {/* Component Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card Component Preview */}
                        <div
                            className="p-6 rounded-3xl border shadow-lg relative overflow-hidden transition-colors duration-300"
                            style={{
                                backgroundColor: colors.surface,
                                borderColor: `${colors.primary}40`, // 25% opacity
                                color: colors.textMain
                            }}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Layers size={100} color={colors.primary} />
                            </div>

                            <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}>
                                <Zap size={24} />
                            </div>

                            <h3 className="text-xl font-bold mb-2">Interactive Card</h3>
                            <p className="mb-6 text-sm opacity-70" style={{ color: colors.textMuted }}>
                                This component creates a preview of how your typography and surface colors interact with the primary brand color.
                            </p>

                            <div className="flex gap-3">
                                <button
                                    className="px-4 py-2 rounded-lg font-medium text-sm transition-transform active:scale-95"
                                    style={{
                                        backgroundColor: colors.primary,
                                        color: getContrastYIQ(colors.primary),
                                        boxShadow: `0 4px 14px ${colors.primary}66`
                                    }}
                                >
                                    Primary Action
                                </button>
                                <button
                                    className="px-4 py-2 rounded-lg font-medium text-sm border transition-colors"
                                    style={{
                                        borderColor: `${colors.textMain}33`,
                                        color: colors.textMain
                                    }}
                                >
                                    Secondary
                                </button>
                            </div>
                        </div>

                        {/* Notification / Alert Preview */}
                        <div className="space-y-4">
                            <div
                                className="p-4 rounded-2xl border flex items-center gap-4"
                                style={{
                                    backgroundColor: `${colors.accent}15`,
                                    borderColor: `${colors.accent}40`
                                }}
                            >
                                <div className="p-2 rounded-full" style={{ backgroundColor: `${colors.accent}20` }}>
                                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.accent }} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm" style={{ color: colors.textMain }}>System Notification</h4>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>Accent color applied to alerts.</p>
                                </div>
                            </div>

                            <div
                                className="p-4 rounded-2xl border flex items-center gap-4"
                                style={{
                                    background: `linear-gradient(to right, ${colors.surface}, ${colors.background})`,
                                    borderColor: `${colors.secondary}40`
                                }}
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.secondary, color: getContrastYIQ(colors.secondary) }}>
                                    <span className="font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm" style={{ color: colors.textMain }}>Step Progress</h4>
                                    <p className="text-xs" style={{ color: colors.textMuted }}>Secondary color usage example.</p>
                                </div>
                            </div>

                            {/* Neon Glow Button Preview */}
                            <button
                                className="w-full py-3 rounded-xl font-bold text-sm tracking-widest uppercase transition-all duration-300"
                                style={{
                                    backgroundColor: colors.background,
                                    color: colors.accent,
                                    border: `1px solid ${colors.accent}`,
                                    boxShadow: `0 0 15px ${colors.accent}66`
                                }}
                            >
                                Neon Outline Mode
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorExplorer;
