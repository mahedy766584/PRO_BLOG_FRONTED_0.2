import type { TAuthorCardProps } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SocialProfile from "../common/profile/SocialProfile";

const TopAuthorCard = ({ author }: TAuthorCardProps) => {
    const { user } = author || {};
    return (
        <div className="flex items-start gap-3">
            {/* Avatar */}
            <Avatar className="h-16 w-16">
                <AvatarImage src={user?.profileImage} className="object-cover" alt={user?.name?.firstName} />
                <AvatarFallback>
                    {user?.name?.firstName}
                    {user?.name?.lastName}
                </AvatarFallback>
            </Avatar>

            {/* Content */}
            <div className="space-y-1">
                <h1 className="font-medium text-base">
                    {user?.name?.firstName}
                    {user?.name?.lastName}
                </h1>

                <p className="text-sm text-muted-foreground line-clamp-2">
                    {user?.bio}
                </p>

                {/* Social Icons */}
                <SocialProfile/>
            </div>
        </div>
    );
};

export default TopAuthorCard;
