import { useEffect, useRef, useState, type ReactNode } from "react";
import './global.css';

const ScrollWithIndicator = ({ children }: { children: ReactNode }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const el = containerRef.current;

        if (!el) return;

        const handleScroll = () => {
            const scrollTop = el.scrollTop;
            const scrollHeight = el.scrollHeight - el.clientHeight;
            const percent = (scrollTop / scrollHeight) * 100;
            setProgress(percent);
        };

        el.addEventListener("scroll", handleScroll);
        return () => el.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <div className="relative">
            <div
                ref={containerRef}
                className="h-[70vh] overflow-y-auto pr-2 scrollbar-hide"
            >
                {children}
            </div>

            <div className="mt-4 flex justify-center gap-2">
                {[0, 25, 50, 75].map((p, i) => (
                    <span
                        key={i}
                        className={`h-1.5 w-6 rounded-full transition-all duration-300 ${progress >= p && progress < p + 25
                                ? "bg-[#00AAA1]"
                                : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ScrollWithIndicator;