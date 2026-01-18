import { useState, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { X } from "lucide-react";
import defaultUser from "../../src/assets/photo (1).png";

type TProfileImageProps = {
    name: string;
    label?: string;
    defaultImage?: string;
};

const ProBlogProfileInput = ({
    name,
    label = "Profile image",
    defaultImage,
}: TProfileImageProps) => {
    const { control } = useFormContext();
    const fallbackImage = defaultImage || defaultUser;
    const [preview, setPreview] = useState<string>(fallbackImage);

    // file input ref
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange } }) => (
                <div className="space-y-2 flex flex-col w-full">
                    <p className="text-sm font-medium text-start">{label}</p>

                    <div className="relative flex justify-center items-center w-full py-4 border border-dotted rounded">
                        {/* Avatar Preview */}
                        <img
                            src={preview}
                            alt="profile"
                            className="h-32 w-32  object-cover border cursor-pointer "
                            onClick={() => inputRef.current?.click()} // open file picker on click
                        />

                        {/* Remove button */}
                        {preview !== fallbackImage && (
                            <button
                                type="button"
                                onClick={() => {
                                    setPreview(fallbackImage);
                                    onChange(null);
                                }}
                                className="absolute -top-2 -right-2 rounded-full bg-destructive p-1 text-white shadow cursor-pointer"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    {/* Hidden file input */}
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setPreview(URL.createObjectURL(file));
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
