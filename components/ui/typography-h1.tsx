import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"h1">;
export function TypographyH1({ className, children, ...props }: Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
