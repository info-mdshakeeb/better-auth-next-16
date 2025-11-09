import { Scroller } from "@/components/ui/scroller";
import { cn } from "@/lib/utils";

type BodyProps = React.HTMLAttributes<HTMLElement> & {
  fluid?: boolean;
  shadow?: boolean;
};

export function Main({
  children,
  fluid,
  className,
  shadow,
  ...props
}: BodyProps) {
  const Com = shadow ? Scroller : "div";

  return (
    <Com
      className={cn(
        "group-data-[layout=fixed]/layout:h-[calc(100vh-4.2rem)]  group-data-[layout=fixed]/layout:overflow-auto",
        className
      )}
      {...props}
    >
      <div className={cn(!fluid && "container mx-auto")}>
        <div className="flex flex-1 flex-col">{children}</div>
      </div>
    </Com>
  );
}
