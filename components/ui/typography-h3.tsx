import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export function TypographyH3({ className, children }: Props) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight lg:text-2xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
