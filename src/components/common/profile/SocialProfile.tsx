import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const SocialProfile = () => {
    return (
        <div className="flex items-center gap-2 pt-1">
            <button className="p-1.5 rounded-md cursor-pointer text-lg transition hover:bg-[#00AAA1] hover:text-white">
                <Facebook size={18} />
            </button>

            <button className="p-1.5 rounded-md cursor-pointer text-lg transition hover:bg-[#00AAA1] hover:text-white">
                <Twitter size={18} />
            </button>

            <button className="p-1.5 rounded-md cursor-pointer text-lg transition hover:bg-[#00AAA1] hover:text-white">
                <Instagram size={18} />
            </button>

            <button className="p-1.5 rounded-md cursor-pointer text-lg transition hover:bg-[#00AAA1] hover:text-white">
                <Linkedin size={18} />
            </button>
        </div>
    );
};

export default SocialProfile;