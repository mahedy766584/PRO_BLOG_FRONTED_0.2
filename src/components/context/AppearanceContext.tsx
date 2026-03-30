/* eslint-disable react-refresh/only-export-components */
"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface AppearanceContextType {
    accentColor: string;
    fontSize: string;
    reduceMotion: boolean;
    updateAccentColor: (color: string) => void;
    updateFontSize: (size: string) => void;
    updateMotion: (val: boolean) => void;
}

const AppearanceContext = createContext<AppearanceContextType | undefined>(undefined);

export const AppearanceProvider = ({ children }: { children: ReactNode }) => {
    // ১. Lazy Initialization: রেন্ডার হওয়ার আগেই লোকাল স্টোরেজ থেকে ডাটা নিয়ে আসা
    const [accentColor, setAccentColor] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("problog-accent") || "#00AAA1";
        }
        return "#00AAA1";
    });

    const [fontSize, setFontSize] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("problog-font") || "medium";
        }
        return "medium";
    });

    const [reduceMotion, setReduceMotion] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("problog-motion") === "true";
        }
        return false;
    });

    // ২. Side Effects Synchronization: স্টেট চেঞ্জ হলে DOM আপডেট করা
    useEffect(() => {
        // Accent Color সেট করা
        document.documentElement.style.setProperty('--primary', accentColor);
        
        // Font Size সেট করা
        const sizes: Record<string, string> = { 
            small: "14px", 
            medium: "16px", 
            large: "18px" 
        };
        document.documentElement.style.setProperty('--font-step', sizes[fontSize]);

        // Motion সেট করা
        if (reduceMotion) {
            document.documentElement.classList.add('reduce-motion');
        } else {
            document.documentElement.classList.remove('reduce-motion');
        }
    }, [accentColor, fontSize, reduceMotion]); // যখনই এই স্টেটগুলো বদলাবে, তখনই DOM আপডেট হবে

    // ৩. পাবলিক ফাংশন যা শুধু স্টেট এবং লোকাল স্টোরেজ আপডেট করবে
    const updateAccentColor = (color: string) => {
        setAccentColor(color);
        localStorage.setItem("problog-accent", color);
    };

    const updateFontSize = (size: string) => {
        setFontSize(size);
        localStorage.setItem("problog-font", size);
    };

    const updateMotion = (val: boolean) => {
        setReduceMotion(val);
        localStorage.setItem("problog-motion", String(val));
    };

    return (
        <AppearanceContext.Provider value={{ 
            accentColor, 
            fontSize, 
            reduceMotion, 
            updateAccentColor, 
            updateFontSize, 
            updateMotion 
        }}>
            {children}
        </AppearanceContext.Provider>
    );
};

export const useAppearance = () => {
    const context = useContext(AppearanceContext);
    if (context === undefined) {
        throw new Error("useAppearance must be used within an AppearanceProvider");
    }
    return context;
};