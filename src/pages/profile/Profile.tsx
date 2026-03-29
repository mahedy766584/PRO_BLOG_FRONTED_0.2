/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Container from "@/components/Container";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import useCurrentUserProfile from "@/utils/UseCurrentUserProfile";
import { useParams } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightContent from "./RightContent";
import MobileActionButton from "./MobileActionButton";

const Profile = () => {
    const { id } = useParams();
    const { data: currentUserWrapper, isLoading: isCurrentUserLoading } = useCurrentUserProfile();
    const currentUser = currentUserWrapper?.data;
    console.log(currentUser?._id)
    const [publicUser, setPublicUser] = useState(null);
    const [isPublicUserLoading, setIsPublicUserLoading] = useState(false);

    const isOwnProfile = !id || (currentUser && id === currentUser._id);

    const profileData = isOwnProfile ? currentUser : publicUser;

    if (isCurrentUserLoading || (!isOwnProfile && isPublicUserLoading)) {
        return <LoadingSpinner fullScreen={true} />;
    }

    if (!profileData) return null;

    const {
        name, role, userName, profileImage, bio, createdAt, email, _id
    } = profileData;

    const firstName = name?.firstName || "Unknown";
    const lastName = name?.lastName || "User";
    const fullName = `${firstName} ${lastName}`;

    return (
        <div className="min-h-screen bg-[#FAFAFA] pb-20 relative selection:bg-slate-900 selection:text-white">

            {/* Background Ambient Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-100/40 blur-[120px]" />
            </div>

            {/* Cinematic Banner */}
            <div className="h-48 md:h-80 w-full relative z-10 group overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-black">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-linears.vercel.app/noise.svg')] mix-blend-overlay"></div>
                </div>
            </div>

            <div className="relative z-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 -mt-10 md:-mt-28">

                        {/* LEFT SIDEBAR */}
                        <LeftSidebar
                            profileImage={profileImage}
                            fullName={fullName}
                            isOwnProfile={isOwnProfile}
                            role={role}
                            userName={userName}
                            bio={bio}
                            profileData={profileData}
                            createdAt={createdAt}
                            email={email}
                        />
                        
                        {/* RIGHT CONTENT */}
                        <RightContent
                            isOwnProfile={isOwnProfile}
                            bio={bio}
                            fullName={fullName}
                            _id={_id}
                        />
                        
                    </div>
                </Container>
            </div>

            {/* Mobile Action Button */}
            <MobileActionButton isOwnProfile={isOwnProfile}/>
        </div>
    );
};

export default Profile;