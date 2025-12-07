import React from 'react';
import { Search, Mail, Lock, Check, AlertCircle, User } from 'lucide-react';

const InputShowcase = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Modern Default */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Modern Default</h3>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-text-main">Email Address</label>
                        <input
                            type="email"
                            placeholder="name@example.com"
                            className="w-full px-4 py-2 rounded-xl bg-white/50 border border-black/10 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-text-muted/50"
                        />
                    </div>
                </div>

                {/* Floating Label */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Floating Label</h3>
                    <div className="relative pt-2">
                        <input
                            type="text"
                            id="floating_input"
                            className="block w-full px-4 py-3 bg-transparent border-b-2 border-text-muted/30 focus:border-primary outline-none transition-colors peer placeholder-transparent text-text-main"
                            placeholder="Username"
                        />
                        <label
                            htmlFor="floating_input"
                            className="absolute top-3 left-4 text-text-muted text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-primary"
                        >
                            Username
                        </label>
                    </div>
                </div>

                {/* Gradient Border */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Gradient Border</h3>
                    <div className="p-[2px] rounded-xl bg-gradient-main">
                        <input
                            type="text"
                            placeholder="Gradient Highlight"
                            className="w-full px-4 py-2 rounded-[10px] bg-white border-none outline-none focus:ring-0 placeholder:text-gray-400"
                        />
                    </div>
                </div>

                {/* Glass Input */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Glass Input</h3>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 focus:bg-white/20 outline-none text-text-main placeholder:text-text-main/50"
                    />
                </div>

                {/* Icon Integrated */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Icon Integrated</h3>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Email with Icon"
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/50 border border-black/10 focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-4 pr-10 py-2 rounded-xl bg-white/50 border border-black/10 focus:border-primary outline-none transition-all"
                        />
                        <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                    </div>
                </div>

                {/* Rounded Pill */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Rounded Pill</h3>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full pl-12 pr-4 py-2 rounded-full bg-primary/5 border border-primary/20 focus:bg-white focus:shadow-lg transition-all outline-none"
                        />
                    </div>
                </div>

                {/* Verification States */}
                <div className="p-6 rounded-2xl bg-surface border border-white/20 flex flex-col gap-4">
                    <h3 className="text-sm font-medium text-text-muted">Validation States</h3>
                    {/* Success */}
                    <div className="relative">
                        <input
                            type="text"
                            defaultValue="validuser"
                            className="w-full px-4 py-2 rounded-xl bg-green-500/5 border border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none pr-10"
                        />
                        <Check className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
                        <span className="text-xs text-green-600 mt-1 block">Username is available</span>
                    </div>

                    {/* Error */}
                    <div className="relative">
                        <input
                            type="text"
                            defaultValue="invalid@"
                            className="w-full px-4 py-2 rounded-xl bg-red-500/5 border border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none pr-10"
                        />
                        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 w-5 h-5" />
                        <span className="text-xs text-red-600 mt-1 block">Please enter a valid email</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InputShowcase;
