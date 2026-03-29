import { Tabs } from "@/components/ui/tabs";
import { AppearanceTab } from "./settings/AppearanceTab";
import { NotificationsTab } from "./settings/NotificationsTab";
import { SecurityTab } from "./settings/SecurityTab";
import { AccountTab } from "./settings/AccountTab";

const SettingsContent = ({
    activeTab,
    setActiveTab,
    setOpen,
    userData,
    handleImageSubmit,
    handleDetailSubmit,
    isImageLoading,
    isUpdateLoading
}: any) => {
    return (
        <div className="flex-1 overflow-y-auto scrollbar-custom p-8 bg-[#FAFAFA]">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <AccountTab
                    userData={userData}
                    onImageSubmit={handleImageSubmit}
                    onDetailSubmit={handleDetailSubmit}
                    imageLoading={isImageLoading}
                    updateLoading={isUpdateLoading}
                    onClose={() => setOpen(false)}
                />
                <SecurityTab />
                <NotificationsTab />
                <AppearanceTab />
            </Tabs>
        </div>
    );
};

export default SettingsContent;