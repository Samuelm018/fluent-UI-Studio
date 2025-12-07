import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ButtonShowcase from '../components/showcase/ButtonShowcase';
import InputShowcase from '../components/showcase/InputShowcase';
import CardShowcase from '../components/showcase/CardShowcase';
import { Layers, MousePointer, Type, Square, Layout, CreditCard, Menu as MenuIcon } from 'lucide-react';

const Components = () => {
    const [activeSection, setActiveSection] = useState('buttons');

    const categories = [
        { id: 'buttons', name: 'Buttons', icon: <MousePointer size={18} /> },
        { id: 'inputs', name: 'Inputs', icon: <Type size={18} /> },
        { id: 'cards', name: 'Cards', icon: <Square size={18} /> },
        { id: 'navigation', name: 'Navigation', icon: <MenuIcon size={18} /> },
        { id: 'pricing', name: 'Pricing', icon: <CreditCard size={18} /> },
        { id: 'layouts', name: 'Layouts', icon: <Layout size={18} /> },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'buttons':
                return <ButtonShowcase />;
            case 'inputs':
                return <InputShowcase />;
            case 'cards':
                return <CardShowcase />;
            default:
                return (
                    <div className="flex flex-col items-center justify-center py-20 text-text-muted">
                        <div className="p-4 rounded-full bg-surface border border-white/10 mb-4">
                            <Layers size={40} className="opacity-50" />
                        </div>
                        <p>This component section is under development.</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-8 min-h-[calc(100vh-100px)] py-10">
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
                <div className="sticky top-24 bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-glass">
                    <h2 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 px-2">
                        Categories
                    </h2>
                    <nav className="space-y-1">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveSection(category.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                  ${activeSection === category.id
                                        ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                        : 'text-text-muted hover:bg-white/10 hover:text-text-main'}
                `}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow">
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-surface/30 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-10 min-h-[500px]"
                >
                    <div className="mb-8 border-b border-white/10 pb-4">
                        <h1 className="text-3xl font-bold capitalize text-text-main">
                            {categories.find(c => c.id === activeSection)?.name}
                        </h1>
                        <p className="text-text-muted mt-2">
                            Modern {activeSection} components designed for direct integration.
                        </p>
                    </div>

                    {renderContent()}
                </motion.div>
            </main>
        </div>
    );
};

export default Components;
