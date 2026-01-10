/* eslint-disable @typescript-eslint/no-explicit-any */

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type TInputProps = {
    type?: "text" | "password" | "email" | "number";
    name: string;
    label?: string;
    disabled?: boolean;
    rules?: any;
};

const ProBlogInput = ({ type, name, label, disabled, rules }: TInputProps) => {

    const { control } = useFormContext();

    return (
        <FormField
            control={control}
            name={name}
            rules={rules}
            render={({ field }) => (
                <FormItem>

                    {label && <FormLabel>{label}</FormLabel>}

                    <FormControl>
                        <Input
                            {...field}
                            type={type}
                            value={field.value ?? ""}
                            disabled={disabled}
                        />
                    </FormControl>

                    <FormMessage />

                </FormItem>
            )}
        >

        </FormField>
    );
};

export default ProBlogInput;