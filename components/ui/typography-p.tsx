import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
};
export function TypographyP({ className, children }: Props) {
  return (
    <p
      className={cn(
        "text-sm font-light text-muted-foreground leading-6",
        className
      )}
    >
      {children}
    </p>
  );
}
