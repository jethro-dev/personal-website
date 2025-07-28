import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"h3">;
export function TypographyH3({ className, children, ...props }: Props) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-lg font-semibold tracking-tight lg:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}
