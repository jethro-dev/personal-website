import { cn } from "@/lib/utils";

export const Badge = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "inline-block border border-border text-xs font-light rounded-full px-2.5 py-1 shadow-sm",
        className
      )}
    >
      {text}
    </div>
  );
};
