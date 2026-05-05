"use client";

import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function SidebarPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-full min-h-0 items-center justify-center rounded-xl border border-dashed border-border bg-muted/20 p-6 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={`pointer-events-none absolute top-0 left-0 z-20 h-full w-full max-w-sm p-4 pt-18 transition-transform duration-200 ease-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {isOpen ? (
        <div className="pointer-events-auto flex h-full flex-col rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-xs">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Projects</h2>
            <Button aria-label="Close project sidebar" onClick={onClose} size="icon-xs" variant="ghost">
              <X />
            </Button>
          </div>

          <Tabs className="min-h-0 flex-1" defaultValue="my-projects">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects">My Projects</TabsTrigger>
              <TabsTrigger value="shared">Shared</TabsTrigger>
            </TabsList>

            <TabsContent className="mt-3 min-h-0 flex-1" value="my-projects">
              <SidebarPlaceholder label="No projects yet. Create one to start designing." />
            </TabsContent>

            <TabsContent className="mt-3 min-h-0 flex-1" value="shared">
              <SidebarPlaceholder label="No shared projects yet." />
            </TabsContent>
          </Tabs>

          <Button className="mt-4 w-full" variant="outline">
            <Plus />
            New Project
          </Button>
        </div>
      ) : null}
    </aside>
  );
}
