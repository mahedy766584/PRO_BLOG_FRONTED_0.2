import type { TAuthorCardProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Facebook, Instagram, Twitter } from "lucide-react";

const TopAuthorCard = ({ author }: TAuthorCardProps) => {
    const { profileImage, bio, name } = author || {};

    return (
        <div className="flex items-start gap-3">
            {/* Avatar */}
            <Avatar className="h-16 w-16">
                <AvatarImage src={profileImage} className="object-cover" alt={name?.firstName} />
                <AvatarFallback>
                    {name?.firstName?.[0]}
                    {name?.lastName?.[0]}
                </AvatarFallback>
            </Avatar>

            {/* Content */}
            <div className="space-y-1">
                <h1 className="font-medium text-base">
                    {name?.firstName} {name?.lastName}
                </h1>

                <p className="text-sm text-muted-foreground line-clamp-2">
                    {bio}
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-2 pt-1">
                    <button className="p-1.5 rounded-md text-lg transition hover:bg-[#00AAA1] hover:text-white">
                        <Facebook size={18} />
                    </button>

                    <button className="p-1.5 rounded-md text-lg transition hover:bg-[#00AAA1] hover:text-white">
                        <Twitter size={18} />
                    </button>

                    <button className="p-1.5 rounded-md text-lg transition hover:bg-[#00AAA1] hover:text-white">
                        <Instagram size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopAuthorCard;
