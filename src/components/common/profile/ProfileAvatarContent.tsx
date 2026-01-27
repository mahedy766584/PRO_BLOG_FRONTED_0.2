import { CalendarDays, Clock } from "lucide-react";
import ProfileAvatar from "./ProfileAvatar";

type ProfileAvatarContentProps = {
    profileImage: string;
    firstName: string;
    postedDate: string;
    readTime: string;
};

const ProfileAvatarContent = (
    { profileImage, firstName, postedDate, readTime }
        : ProfileAvatarContentProps) => {
    return (
        <div className="text-[#777777] text-sm flex flex-wrap items-center gap-1.5">
            <ProfileAvatar
                profileImage={profileImage}
                userFirstName={firstName ?? ""}
            />
            <div className="h-4 w-px lg:flex hidden rounded-md bg-[#777777]"></div>
            <span className="lg:flex hidden items-center gap-1.5">
                <CalendarDays size={16} />
                <p>{postedDate}</p>
            </span>
            <div className="h-4 w-px rounded-md bg-[#777777]"></div>
            <div className="flex items-center gap-1.5">
                <Clock size={16} />
                {readTime}
            </div>
        </div>
    );
};

export default ProfileAvatarContent;