import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type LoadingSpinnerProps = {
    className?: string;
    size?: number;
    fullScreen?: boolean; 
};

const LoadingSpinner = ({ className, size = 40, fullScreen = false }: LoadingSpinnerProps) => {
    
    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2">
                    <Loader2 
                        className={cn("animate-spin text-primary", className)} 
                        size={size} 
                    />
                    <p className="text-sm text-muted-foreground font-medium animate-pulse">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center w-full h-full p-4">
            <Loader2 
                className={cn("animate-spin text-primary", className)} 
                size={size} 
            />
        </div>
    );
};

export default LoadingSpinner;