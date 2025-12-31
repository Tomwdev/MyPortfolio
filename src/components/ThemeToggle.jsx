"use client";

import { useTheme } from 'next-themes';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-300 dark:border-white/20 bg-slate-200/50 dark:bg-white/5 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white"
        >
            {theme === 'light' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
    )
}