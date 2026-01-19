import { cn } from "@/lib/utils";

type SectionTitleProps = {
  firstText: string;
  secondText: string;
  size?: "sm" | "md" | "lg" | "xl";
  width?: "full" | "xl" | "lg" | "md" | "sm";
  className?: string;
};

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-3xl",
};

const widthClasses = {
  full: "w-full",
  xl: "w-3/4",
  lg: "w-2/3",
  md: "w-1/2",
  sm: "w-1/3",
};

const SectionTitle = ({
  firstText,
  secondText,
  size = "md",
  width = "sm",
  className,
}: SectionTitleProps) => {
  return (
    <h1
      className={cn(
        "text-third font-medium mx-auto text-center",
        sizeClasses[size],
        widthClasses[width],
        className
      )}
    >
      <span className="bg-main text-second px-1">{firstText}</span>{" "}
      {secondText}
    </h1>
  );
};

export default SectionTitle;
