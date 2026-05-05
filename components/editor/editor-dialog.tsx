import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface EditorDialogFrameProps {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
}

/**
 * Shared dialog surface pattern for editor flows.
 * Use this inside dialog content when implementing concrete dialogs.
 */
export function EditorDialogFrame({
  title,
  description,
  footer,
  children,
  className,
}: EditorDialogFrameProps) {
  return (
    <div className={cn("rounded-3xl border border-border bg-popover text-popover-foreground", className)}>
      <div className="space-y-2 border-b border-border px-6 py-5">
        <h3 className="text-base font-semibold text-foreground">{title}</h3>
        {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
      </div>

      <div className="px-6 py-5">{children}</div>

      {footer ? <div className="rounded-b-3xl border-t border-border bg-muted/40 px-6 py-4">{footer}</div> : null}
    </div>
  );
}
