import React from 'react';


const Footer = () => {
    return (
        <footer className="mt-auto backdrop-blur-md bg-surface border-t border-white/20">
            <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-main">
                            FluentUI Studio
                        </span>
                        <p className="text-sm text-text-muted mt-2">
                            © 2024 Samuel M. All rights reserved.
                        </p>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
