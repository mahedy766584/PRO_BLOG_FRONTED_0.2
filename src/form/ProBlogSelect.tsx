import { useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type TProBlogSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  disabled?: boolean;
  mode?: "multiple";
};

const ProBlogSelect = ({
  label,
  name,
  options,
  disabled,
  mode,
}: TProBlogSelectProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>

          <FormControl>
            {mode === "multiple" ? (
              /* MULTI SELECT (checkbox-style) */
              <div className="space-y-2 border rounded-md p-3 w-full">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 text-sm w-full"
                  >
                    <input
                    className="w-full"
                      type="checkbox"
                      value={option.value}
                      disabled={disabled || option.disabled}
                      checked={field.value?.includes(option.value)}
                      onChange={(e) => {
                        const value = e.target.value;
                        const checked = e.target.checked;

                        if (checked) {
                          field.onChange([...(field.value || []), value]);
                        } else {
                          field.onChange(
                            field.value.filter((v: string) => v !== value)
                          );
                        }
                      }}
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            ) : (
              /* SINGLE SELECT */
              <Select
                disabled={disabled}
                value={field.value ?? ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={`Select ${label}`} />
                </SelectTrigger>

                <SelectContent>
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.disabled}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ProBlogSelect;
