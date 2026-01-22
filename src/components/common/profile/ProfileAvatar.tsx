import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@radix-ui/react-avatar";

export type TProfileProps = {
    profileImage: string | undefined;
    userLastName?: string;
    userFirstName: string;
    authorLastName?: string;
    authorFirstName?: string;
};

const ProfileAvatar = ({ profileImage, userFirstName }: TProfileProps) => {
    return (
        <div className="flex items-center gap-1 text-[#777777]">
            <Avatar>
                <AvatarImage className="w-full bg-cover object-cover" src={profileImage} />
            </Avatar>
            <p className="font-normal">{userFirstName}</p>
        </div>
    );
};

export default ProfileAvatar;