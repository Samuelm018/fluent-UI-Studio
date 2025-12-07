import React from 'react';
import { Heart, Share2, MoreHorizontal, MapPin, Star, Shield, ArrowRight } from 'lucide-react';

const CardShowcase = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Glassmorphism Card */}
                <div className="glass-card p-6 flex flex-col gap-4 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors" />
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        <Shield className="text-primary" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-text-main mb-1">Glass Effect</h3>
                        <p className="text-text-muted text-sm">Perfect for modern overlays and premium content sections.</p>
                    </div>
                    <button className="mt-auto px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors w-fit">
                        Learn More
                    </button>
                </div>

                {/* Product Card */}
                <div className="rounded-2xl bg-surface border border-white/20 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative group">
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                            <button className="px-4 py-2 bg-white rounded-full text-black font-medium text-sm shadow-sm scale-90 group-hover:scale-100 transition-transform">Quick View</button>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-text-main">Abstract Art 3D</h3>
                            <span className="text-primary font-bold">$120</span>
                        </div>
                        <p className="text-text-muted text-sm mb-4">High quality abstract 3D render package.</p>
                        <button className="w-full btn-primary py-2 text-sm">Add to Cart</button>
                    </div>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-surface border border-white/20 p-6 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-main p-[2px] mb-4">
                        <div className="w-full h-full rounded-full bg-surface" />
                    </div>
                    <h3 className="text-lg font-bold text-text-main">Sarah Johnson</h3>
                    <p className="text-primary text-sm font-medium mb-4">UI/UX Designer</p>
                    <div className="flex gap-4 mb-6">
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">120</span>
                            <span className="text-xs text-text-muted">Projects</span>
                        </div>
                        <div className="w-[1px] bg-white/10" />
                        <div className="flex flex-col">
                            <span className="font-bold text-lg">4.5k</span>
                            <span className="text-xs text-text-muted">Followers</span>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full">
                        <button className="flex-1 btn-primary py-2 text-sm">Follow</button>
                        <button className="p-2 rounded-xl border border-white/20 hover:bg-white/5"><MoreHorizontal size={20} /></button>
                    </div>
                </div>

                {/* Neon Card */}
                <div className="rounded-2xl bg-[#0D0D12] border border-[#00E5FF]/30 p-6 relative group hover:shadow-neon transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-[#00E5FF] font-bold text-xl mb-2">Cyberpunk</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        Futuristic designs with neon glows and dark interfaces.
                    </p>
                    <button className="text-[#00E5FF] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Explore <ArrowRight size={16} />
                    </button>
                </div>

                {/* Testimonial Card */}
                <div className="rounded-2xl bg-surface border border-white/20 p-6 relative">
                    <div className="absolute -top-3 left-6 bg-secondary text-white p-2 rounded-lg shadow-lg">
                        <Star size={16} fill="white" />
                    </div>
                    <p className="text-text-muted italic mb-6 mt-4">
                        "This library completely transformed our workflow. The components are stunning and easy to use."
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-300" />
                        <div>
                            <h4 className="font-bold text-sm text-text-main">Alex Chen</h4>
                            <p className="text-xs text-text-muted">Product Manager</p>
                        </div>
                    </div>
                </div>

                {/* Pricing Card */}
                <div className="rounded-2xl bg-gradient-to-b from-primary/10 to-surface border border-primary/20 p-6 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                    <h3 className="text-text-muted font-medium text-sm mb-2">Pro Plan</h3>
                    <div className="flex items-end gap-1 mb-6">
                        <span className="text-4xl font-bold text-text-main">$29</span>
                        <span className="text-text-muted mb-1">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-sm text-text-muted">
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Unlimited Projects</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> Advanced Analytics</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-primary" /> 24/7 Support</li>
                    </ul>
                    <button className="btn-primary w-full py-2">Choose Plan</button>
                </div>

                {/* Horizontal Card */}
                <div className="md:col-span-2 lg:col-span-3 rounded-2xl bg-surface border border-white/20 p-6 flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-full md:w-1/3 h-48 rounded-xl bg-gray-200" />
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                            <MapPin size={16} /> San Francisco, CA
                        </div>
                        <h3 className="text-2xl font-bold text-text-main mb-3">Modern Loft</h3>
                        <p className="text-text-muted mb-6">
                            A beautiful loft in the heart of the city with amazing views and modern amenities. perfect for creative workspace.
                        </p>
                        <div className="flex gap-4">
                            <button className="btn-primary text-sm">Book Tour</button>
                            <div className="flex items-center gap-2 text-text-muted text-sm ml-auto">
                                <Heart size={18} className="cursor-pointer hover:text-red-500 transition-colors" />
                                <Share2 size={18} className="cursor-pointer hover:text-primary transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// Internal Import for Check (forgot strict import)
import { Check } from 'lucide-react';

export default CardShowcase;
