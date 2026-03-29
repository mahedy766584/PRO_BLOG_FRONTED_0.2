import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type LoadingSpinnerProps = {
    className?: string;
    size?: number;
    fullScreen?: boolean;
    text?: string;
    variant?: "primary" | "gradient" | "minimal";
};

const LoadingSpinner = ({ 
    className, 
    size = 40, 
    fullScreen = false,
    text = "Loading...",
    variant = "primary"
}: LoadingSpinnerProps) => {

    const textSizeClass = size < 30 ? "text-xs" : "text-sm";

    const spinnerMarkup = (
        <div className="flex flex-col items-center justify-center gap-4 z-50">
            {variant === "primary" && (
                <div className="relative flex items-center justify-center">
                    <div 
                        className="opacity-20 text-primary border-4 border-current rounded-full"
                        style={{ width: size, height: size }}
                    />
                    <div className="absolute inset-0">
                        <Loader2 
                            className={cn("animate-spin text-primary", className)} 
                            size={size} 
                            strokeWidth={2.5}
                        />
                    </div>
                </div>
            )}

            {variant === "gradient" && (
                <div className="relative flex items-center justify-center">
                    <div 
                        className={cn(
                            "animate-spin rounded-full border-4 border-transparent border-t-primary border-l-primary/50", 
                            "bg-linear-to-tr from-transparent via-primary/30 to-primary/10",
                            className
                        )}
                        style={{ width: size, height: size }}
                    />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                </div>
            )}

            {variant === "minimal" && (
                <Loader2 
                    className={cn("animate-spin text-primary/80", className)} 
                    size={size} 
                />
            )}

            {/* Text */}
            {text && (
                <p className={cn(
                    "text-muted-foreground font-medium tracking-tight animate-pulse",
                    textSizeClass
                )}>
                    {text}
                </p>
            )}
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-9999 flex items-center justify-center">
                <div className="absolute inset-0 bg-background/60 backdrop-blur-md supports-backdrop-filter:bg-background/40" />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/5 via-transparent to-primary/5 opacity-50" />
                
                {spinnerMarkup}
            </div>
        );
    }

    return (
        <div className={cn("flex justify-center items-center w-full h-full p-4", className)}>
            {spinnerMarkup}
        </div>
    );
};

export default LoadingSpinner;