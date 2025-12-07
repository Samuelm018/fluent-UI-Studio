import React, { useEffect, useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import profileImage from '../../assets/mypic.jpg';

const DesignerCard = () => {
    const { currentTheme } = useTheme();

    // Mapping existing application themes to the requested card themes
    // theme-default (Modern Premium/Violet) -> Equivalent to Aurora (Blue-Purple)
    // theme-sunset (Sunset Vibrant) -> Sunset
    // theme-minimal (Clean White) -> Mint (Green-Cyan) - User requested Mint, mapping minimal to it for variety or we can create new theme
    // theme-neon (Dark Neon) -> Neon Night

    const getThemeKey = (appTheme) => {
        switch (appTheme) {
            case 'theme-default': return 'aurora';
            case 'theme-sunset': return 'sunset';
            case 'theme-minimal': return 'mint'; // Using Mint for minimal for now to show variety
            case 'theme-neon': return 'neon';
            default: return 'aurora';
        }
    };

    const themeKey = getThemeKey(currentTheme);

    const themes = {
        aurora: {
            border: "from-aurora-start to-aurora-end",
            text: "bg-gradient-to-r from-aurora-start to-aurora-end",
            glow: "shadow-[0_0_25px_rgba(99,102,241,0.7)]"
        },
        sunset: {
            border: "from-sunset-start to-sunset-end",
            text: "bg-gradient-to-r from-sunset-start to-sunset-end",
            glow: "shadow-[0_0_25px_rgba(255,111,97,0.7)]"
        },
        mint: {
            border: "from-mint-start to-mint-end",
            text: "bg-gradient-to-r from-mint-start to-mint-end",
            glow: "shadow-[0_0_25px_rgba(16,185,129,0.7)]"
        },
        neon: {
            border: "from-neon-start to-neon-end",
            text: "bg-gradient-to-r from-neon-start to-neon-end",
            glow: "shadow-[0_0_25px_rgba(0,229,255,0.7)]"
        }
    };

    const selected = themes[themeKey];

    return (
        <div
            className={`
        w-full max-w-md mx-auto p-8 rounded-3xl
        backdrop-blur-xl bg-white/5 
        border-2 bg-gradient-to-r ${selected.border}
        ${selected.glow}
        transition-all duration-500
        hover:scale-105 hover:rotate-1
        cursor-pointer
      `}
        >
            <img
                src={profileImage}
                className="w-28 h-28 rounded-full mx-auto border-4 border-white/20 shadow-lg object-cover"
                alt="Samuel M"
            />

            <h2
                className={`
          text-3xl font-semibold mt-4 text-center bg-clip-text text-transparent
          ${selected.text}
        `}
            >
                Samuel M
            </h2>

            <p className="text-center mt-3 tracking-widest uppercase font-bold text-sm text-white drop-shadow-md pb-2 border-b border-white/10 mx-auto w-max">
                Designer <span className="text-primary/80">&</span> Developer
            </p>

            <p className={`text-center mt-1 font-semibold text-lg ${selected.text} bg-clip-text text-transparent`}>
                Fluent UI Studio
            </p>
        </div>
    );
};

export default DesignerCard;
