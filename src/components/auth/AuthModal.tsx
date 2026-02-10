import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import LoginView from "./LoginView";
import SignupView from "./SignupView";

type AuthView = "login" | "signup";
type AuthModalProps = {
    buttonTitle: string;
};

const AuthModal = ({ buttonTitle }: AuthModalProps) => {
    const [open, setOpen] = useState(false);
    const [view, setView] = useState<AuthView>("login");

    return (
        <>
            <Button
                className="cursor-pointer"
                onClick={() => {
                    setView("login");
                    setOpen(true);
                }}
            >
                {buttonTitle}
            </Button>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="sm:max-w-120"
                    aria-describedby={undefined}
                >
                    <DialogHeader>
                        <DialogTitle className="sr-only">
                            {view === "login"
                                ? "Login to ProBlog"
                                : "Sign up for ProBlog"}
                        </DialogTitle>

                        <DialogDescription className="sr-only">
                            Authentication modal for ProBlog
                        </DialogDescription>
                    </DialogHeader>

                    {view === "login" && (
                        <LoginView
                            switchToSignup={() => setView("signup")}
                            closeModal={() => setOpen(false)}
                        />
                    )}

                    {view === "signup" && (
                        <SignupView
                            switchToLogin={() => setView("login")}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default AuthModal;
