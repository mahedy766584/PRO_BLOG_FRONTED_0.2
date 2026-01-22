import { NavLink } from "react-router-dom";
import bgImage from "../../assets/landingPageBG/bg2.png";
import { footerLink, navLinks } from "./linksItems";
import Logo from "@/shared/logo/Logo";
import { Button } from "@/components/ui/button";
import AuthModal from "@/components/auth/AuthModal";

const LandingPage = () => {
    return (
        <div className="bg-[#f7f4ed] ">
            <nav className="flex items-center justify-between lg:px-16! py-5! border-b-[0.5px]! border-sec! px-5!">
                <Logo />
                <div className="text-third flex items-center gap-8!">
                    <div className="lg:flex! items-center gap-8! hidden!">
                        {navLinks.map((item) => (
                            <NavLink className={`hover:text-[#00AAA1] duration-300`} key={item.to} to={item.to}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                    <AuthModal/>
                </div>
            </nav>

            <div className="lg:h-[calc(100vh-110px)]! gap-10! flex justify-between items-center lg:px-16! border-b-[0.5px]! lg:py-0 py-6! h-[80vh]">
                <div className="space-y-5! lg:text-start text-center">

                    <h1 className="text-third! font-bold! lg:text-8xl! text-4xl! font-body">
                        The Home <br /> <span className="tracking-wide!">of Big Ideas</span>
                    </h1>

                    <p className="lg:text-2xl text-third ">Where storytellers, thinkers, and dreamers connect through imagination.</p>

                    <Button>
                        Explore an idea
                    </Button>

                </div>
                <div className="lg:flex hidden">
                    <img className="w-2xl h-full" src={bgImage} />
                </div>
            </div>

            <footer className="flex flex-wrap justify-center items-center gap-6  h-12! text-sec!">
                {
                    footerLink.map((item) => (
                        <NavLink to={item.to} key={item.label}><small>{item.label}</small></NavLink>
                    ))
                }
            </footer>

        </div>
    );
};

export default LandingPage;
