/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea"
import { useFormContext } from "react-hook-form";

type TTextareaProps = {
    name: string;
    label?: string;
    disabled?: boolean;
    rules?: any;
    placeholder?: string;
    rows?: number;
    className?: string;
};

const ProBlogTextarea = (
    { name,
        label,
        disabled,
        rules,
        placeholder,
        rows = 4,
        className,
    }: TTextareaProps
) => {

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
                        <Textarea
                            {...field}
                            className={className}
                            id={name}
                            rows={rows}
                            placeholder={placeholder}
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

export default ProBlogTextarea;