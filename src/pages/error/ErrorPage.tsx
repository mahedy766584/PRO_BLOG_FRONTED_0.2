import { Button } from "@/components/ui/button"; 
import { MoveLeft, Home, FileQuestion } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-center px-4 selection:bg-primary selection:text-white">
            
            <div className="relative mb-6">

                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse w-32 h-32 mx-auto"></div>
                

                <div className="relative bg-white p-4 rounded-full shadow-lg border border-gray-100">
                    <FileQuestion className="w-12 h-12 text-main" strokeWidth={2} />
                </div>
            </div>

            <h1 className="text-8xl md:text-9xl font-black text-main tracking-tighter mb-2">
                404
            </h1>


            <h2 className="text-2xl md:text-3xl font-bold text-third">
                Page not found
            </h2>
            <p className="text-five mt-3 max-w-md mx-auto leading-relaxed">
                Sorry, the story you are looking for doesn't exist or has been moved. 
                Don't worry, plenty of other great reads are waiting for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

                <Button 
                    variant="outline" 
                    onClick={() => navigate(-1)}
                    className="gap-2 h-12 px-8 text-base font-medium w-full sm:w-auto border-gray-300 hover:bg-gray-100 cursor-pointer"
                >
                    <MoveLeft size={18} />
                    Go Back
                </Button>

                <Link to="/" className="w-full sm:w-auto">
                    <Button 
                        className="gap-2 h-12 px-8 text-base font-medium w-full sm:w-auto shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                        <Home size={18} />
                        Back to Home
                    </Button>
                </Link>
            </div>

            {/* 5. Footer / Help Link */}
            <div className="mt-12 text-sm text-gray-400">
                <p>
                    Need help? <Link to="/contact" className="underline hover:text-primary transition-colors font-medium">Contact Support</Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;