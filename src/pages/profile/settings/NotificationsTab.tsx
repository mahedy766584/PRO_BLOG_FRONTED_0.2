import { TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export const NotificationsTab = () => {
    const settings = [
        { id: "n1", title: "Email Notifications", desc: "Get emails about your account activity.", default: true },
        { id: "n2", title: "New Comments", desc: "Notify when someone comments on your blog.", default: true },
        { id: "n3", title: "Security Alerts", desc: "Get notified about suspicious login attempts.", default: true },
        { id: "n4", title: "Newsletter", desc: "Receive weekly top stories and updates.", default: false },
    ];

    return (
        <TabsContent value="notifications" className="space-y-6 animate-in fade-in-50 duration-300 outline-none">
            <div>
                <h3 className="text-xl font-bold text-slate-900">Notifications</h3>
                <p className="text-sm text-slate-500">Manage how you receive alerts and updates.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-50">
                {settings.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-5 hover:bg-slate-50/30 transition-colors">
                        <div className="space-y-0.5">
                            <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                        </div>
                        <Switch defaultChecked={item.default} />
                    </div>
                ))}
            </div>
        </TabsContent>
    );
};