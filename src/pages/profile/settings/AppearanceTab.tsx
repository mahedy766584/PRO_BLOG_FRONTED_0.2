import { TabsContent } from "@/components/ui/tabs";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const AppearanceTab = () => {
    const [theme, setTheme] = useState("system");

    const themes = [
        { id: "light", label: "Light", icon: Sun },
        { id: "dark", label: "Dark", icon: Moon },
        { id: "system", label: "System", icon: Monitor },
    ];

    return (
        <TabsContent value="appearance" className="space-y-6 animate-in fade-in-50 duration-300 outline-none">
            <div>
                <h3 className="text-xl font-bold text-slate-900">Appearance</h3>
                <p className="text-sm text-slate-500">Customize how ProBlog looks on your screen.</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {themes.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={cn(
                            "flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all",
                            theme === t.id
                                ? "bg-white border-slate-900 ring-2 ring-slate-900/5 shadow-md"
                                : "bg-white border-slate-100 hover:border-slate-200 text-slate-500"
                        )}
                    >
                        <t.icon size={24} className={theme === t.id ? "text-slate-900" : "text-slate-400"} />
                        <span className="text-xs font-bold">{t.label}</span>
                    </button>
                ))}
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <h4 className="font-bold text-sm text-slate-900">Accent Color</h4>
                <div className="flex gap-3">
                    {["#00AAA1", "#6366F1", "#EC4899", "#F59E0B", "#10B981"].map((color) => (
                        <div
                            key={color}
                            style={{ backgroundColor: color }}
                            className="h-8 w-8 rounded-full cursor-pointer border-4 border-white shadow-sm hover:scale-110 transition-transform"
                        />
                    ))}
                </div>
            </div>
        </TabsContent>
    );
};