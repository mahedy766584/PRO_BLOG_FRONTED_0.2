import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useFormContext, type RegisterOptions } from "react-hook-form";

type TInputProps = {
    type?: string;
    name: string;
    label?: string;
    disabled?: boolean;
    rules?: RegisterOptions;
    className?: string; 
    labelClassName?: string;
    placeholder?: string;
    defaultValue?: string;
};

const ProBlogInput = ({ 
    type = "text", 
    name, 
    label, 
    disabled, 
    rules, 
    className, 
    placeholder,
    labelClassName,
    defaultValue,
}: TInputProps) => { 

    const [showPassword, setShowPassword] = useState(false);
    const { control } = useFormContext();

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <FormItem className="w-full">

                    {label && <FormLabel className={`${labelClassName}`}>{label}</FormLabel>}

                    <FormControl>
                        <div className="relative">
                            <Input
                                {...field}
                                type={inputType} 
                                value={field.value ?? defaultValue}
                                disabled={disabled}
                                className={`${className} ${type === "password" ? "pr-10" : ""}`} 
                                placeholder={placeholder}
                            />

                            {type === "password" && (
                                <button
                                    type="button" 
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-900 cursor-pointer"
                                    tabIndex={-1} 
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            )}
                        </div>
                    </FormControl>

                    <FormMessage />

                </FormItem>
            )}
        />
    );
};

export default ProBlogInput;