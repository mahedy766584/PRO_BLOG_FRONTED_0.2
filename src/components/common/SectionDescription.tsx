import { cn } from "@/lib/utils";

type SectionDescriptionProps = {
  text: string;
  color?: "forth" | "second" | "main";
  width?: "full" | "xl" | "lg" | "md" | "sm";
  className?: string;
};

const colorClasses = {
  forth: "text-forth",
  second: "text-second",
  main: "text-main",
};

const widthClasses = {
  full: "w-full",
  xl: "w-3/4",
  lg: "w-2/3",
  md: "w-1/2",
  sm: "w-1/3",
};

const SectionDescription = ({
  text,
  color = "forth",
  width = "md",
  className,
}: SectionDescriptionProps) => {
  return (
    <p
      className={cn(
        "font-normal mx-auto text-center",
        colorClasses[color],
        widthClasses[width],
        className
      )}
    >
      {text}
    </p>
  );
};

export default SectionDescription;
