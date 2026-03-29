import { useState, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { X, Camera } from "lucide-react";
import defaultUser from "../../src/assets/photo (1).png";

type TProfileImageProps = {
    name: string;
    label?: string;
    defaultImage?: string;
    size?: "sm" | "md" | "lg" | "xl";
    allowRemove?: boolean; // ✅ Added
};

const ProBlogProfileInput = ({
    name,
    label = "Profile image",
    defaultImage,
    size = "md",
    allowRemove = true,
}: TProfileImageProps) => {
    const { control } = useFormContext();
    const [preview, setPreview] = useState<string | null>(null);
    const imageSrc = preview || defaultImage || defaultUser;
    const inputRef = useRef<HTMLInputElement>(null);

    const sizeClasses: Record<string, string> = {
        sm: "w-16 h-16",
        md: "w-24 h-24",
        lg: "w-32 h-32",
        xl: "w-40 h-40",
    };

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
                <div className="flex flex-col w-full">
                    <p className="text-sm font-medium text-slate-700">{label}</p>

                    <div className="relative group w-fit mx-auto sm:mx-0">
                        {/* Avatar Preview */}
                        <div 
                            className={`relative overflow-hidden rounded-3xl  border-white shadow-lg cursor-pointer ${sizeClasses[size]}`}
                            onClick={() => inputRef.current?.click()}
                        >
                            <img
                                src={imageSrc}
                                alt="profile"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <Camera className="text-white" size={24} />
                            </div>
                        </div>

                        {/* ✅ Dynamic Remove Button */}
                        {allowRemove && (preview || defaultImage) && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    setPreview(null);
                                    onChange(null);
                                    if(inputRef.current) inputRef.current.value = "";
                                }}
                                className="absolute -top-2 -right-2 rounded-xl bg-red-500 p-1.5 text-white shadow-lg hover:bg-red-600 transition-colors z-10"
                            >
                                <X size={14} strokeWidth={3} />
                            </button>
                        )}
                    </div>

                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                const url = URL.createObjectURL(file);
                                setPreview(url);
                                onChange(file);
                            }
                        }}
                    />
                </div>
            )}
        />
    );
};

export default ProBlogProfileInput;