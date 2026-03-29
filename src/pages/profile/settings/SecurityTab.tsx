/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import { ShieldAlert, Loader2 } from "lucide-react";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";

export const SecurityTab = ({ onPasswordSubmit, isLoading }: any) => {

    

    return (
        <TabsContent value="security" className="space-y-6 animate-in fade-in-50 duration-300 outline-none">
            <div>
                <h3 className="text-xl font-bold text-slate-900">Security Settings</h3>
                <p className="text-sm text-slate-500">Update your password to keep your account secure.</p>
            </div>

            <ProBlogForm onSubmit={onPasswordSubmit}>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
                    <ProBlogInput name="currentPassword" label="Current Password" type="password" placeholder="••••••••" />
                    <div className="grid md:grid-cols-2 gap-4">
                        <ProBlogInput name="newPassword" label="New Password" type="password" placeholder="••••••••" />
                        <ProBlogInput name="confirmPassword" label="Confirm New Password" type="password" placeholder="••••••••" />
                    </div>
                    <Button type="submit" disabled={isLoading} className="bg-slate-900 text-white rounded-xl">
                        {isLoading ? <Loader2 className="animate-spin mr-2" size={16} /> : "Update Password"}
                    </Button>
                </div>
            </ProBlogForm>

            {/* Danger Zone */}
            <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 space-y-4">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 text-red-600 rounded-xl">
                        <ShieldAlert size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-red-700">Delete Account</h4>
                        <p className="text-sm text-red-600/80 mt-1">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                </div>
                <Button variant="outline" className="w-full border-red-200 text-red-600 hover:bg-red-100 hover:text-red-700 font-medium rounded-xl">
                    Permanently Delete My Account
                </Button>
            </div>
        </TabsContent>
    );
};