import React, { useState } from 'react';
import { Settings, Loader2, Heart } from 'lucide-react';

const ButtonShowcase = () => {
    const [loading, setLoading] = useState(false);

    const toggleLoading = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Gradient Button */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Gradient Glow</h3>
                    <button className="btn-gradient shadow-[0_0_20px_rgba(108,99,255,0.5)] hover:shadow-[0_0_30px_rgba(108,99,255,0.7)]">
                        Get Started
                    </button>
                </div>

                {/* Glass Button */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/20 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Glassmorphism</h3>
                    <button className="glass-button">
                        View Details
                    </button>
                </div>

                {/* Neumorphic / Soft */}
                <div className="p-6 rounded-2xl bg-[#E0E5EC] flex flex-col items-center gap-4 shadow-inner">
                    <h3 className="text-sm font-medium text-gray-500">Neumorphic</h3>
                    <button className="px-6 py-2 rounded-xl bg-[#E0E5EC] text-gray-700 font-medium shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_6px_6px_12px_#b8b9be,inset_-6px_-6px_12px_#ffffff] transition-all active:scale-95">
                        Soft UI
                    </button>
                </div>

                {/* Outline Glowing */}
                <div className="p-6 rounded-2xl bg-black flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-gray-400">Neon Outline</h3>
                    <button className="px-6 py-2 rounded-full border border-cyan-400 text-cyan-400 font-medium shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all duration-300">
                        Neon Glow
                    </button>
                </div>

                {/* Minimal Black/White */}
                <div className="p-6 rounded-2xl bg-white border border-gray-100 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-gray-500">Minimal</h3>
                    <button className="px-6 py-2 rounded-lg border-2 border-black text-black font-bold hover:bg-black hover:text-white transition-colors">
                        Explore
                    </button>
                </div>

                {/* Icon Button */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Icon Only</h3>
                    <div className="flex gap-4">
                        <button className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                            <Settings size={20} />
                        </button>
                        <button className="p-3 rounded-full bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">
                            <Heart size={20} />
                        </button>
                    </div>
                </div>

                {/* Loading Button */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Loading State</h3>
                    <button
                        onClick={toggleLoading}
                        className="btn-primary min-w-[140px]"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="animate-spin" /> : "Save Changes"}
                    </button>
                </div>

                {/* Ripple Effect (CSS only simulation or framer) */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Ripple Effect</h3>
                    <div className="relative overflow-hidden rounded-xl">
                        <button className="relative px-8 py-3 bg-secondary text-white font-medium overflow-hidden group">
                            <span className="relative z-10">Hover Me</span>
                            <span className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full scale-150 origin-bottom"></span>
                        </button>
                    </div>
                </div>

                {/* 3D Pressable */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col items-center gap-4">
                    <h3 className="text-sm font-medium text-text-muted">3D Press</h3>
                    <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all">
                        Click Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ButtonShowcase;
