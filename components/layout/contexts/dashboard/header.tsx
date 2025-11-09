"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  fixed?: boolean;
};
export function Header({ className, fixed, children, ...props }: HeaderProps) {
  return (
    <header
      data-layout-header={fixed ? "fixed" : "auto"}
      className={cn(
        "z-50 h-16",

        fixed && "sticky top-0 w-inherit border-b bg-background peer/header",

        "group-data-[layout=fixed]/layout:bg-background",
        "[&:has(.shadow-inner)]:border-none",
        className
      )}
      {...props}
    >
      <div className="relative flex h-full items-center gap-2 px-4">
        <div className="flex h-full items-center gap-2">
          <SidebarTrigger variant="outline" className="max-md:scale-125" />
          <Separator orientation="vertical" className="h-6" />
        </div>
        {children}
      </div>
    </header>
  );
}
