import type { ReactNode } from "react";
import { Bot, FileText, Share2 } from "lucide-react";

interface AuthPageShellProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const FEATURE_POINTS = [
  {
    icon: Bot,
    title: "AI Architecture Generation",
    description: "Describe your system. AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export function AuthPageShell({ title, subtitle, children }: AuthPageShellProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        <section className="hidden border-r border-border bg-card/35 lg:flex lg:items-center lg:justify-center">
          <div className="w-full max-w-lg px-12">
            <div className="mb-12 flex items-center gap-3">
              <span className="h-4 w-4 rounded bg-primary" />
              <p className="text-sm font-medium text-foreground">Ghost AI</p>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-sm text-4xl font-semibold tracking-tight text-foreground">
                Design systems at the speed of thought.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Describe your architecture in plain English. Ghost AI maps it to a shared
                canvas your whole team can refine in real time.
              </p>
            </div>

            <ul className="mt-12 space-y-6">
              {FEATURE_POINTS.map((point) => {
                const Icon = point.icon;

                return (
                  <li key={point.title} className="flex gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-foreground">{point.title}</p>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {point.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="flex items-center justify-center px-4 py-8 sm:px-6">
          <div className="w-full max-w-md">
            <div className="mb-6 space-y-2 text-center lg:hidden">
              <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
