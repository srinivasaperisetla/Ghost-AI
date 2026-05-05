import { dark } from "@clerk/ui/themes";

export const clerkAppearance = {
  theme: dark,
  variables: {
    colorBackground: "var(--background)",
    colorText: "var(--foreground)",
    colorPrimary: "var(--primary)",
    colorInputBackground: "var(--input)",
    colorInputText: "var(--foreground)",
    colorDanger: "var(--destructive)",
    borderRadius: "var(--radius)",
  },
  elements: {
    card: "border border-border bg-card shadow-none",
    formButtonPrimary:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring",
    formFieldInput:
      "border-input bg-input text-foreground focus:border-ring focus-visible:ring-ring",
    footerActionLink: "text-primary hover:text-primary/90",
    socialButtonsBlockButton:
      "border-border bg-background text-foreground hover:bg-accent",
    identityPreviewEditButton:
      "text-muted-foreground hover:bg-accent hover:text-foreground",
  },
} as const;
