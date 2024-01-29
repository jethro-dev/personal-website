import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
export function TypographyH1({ className, children }: Props) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
