# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- In progress

## Current Goal

- Implement project creation flow using the editor dialog pattern and connect actions from the sidebar.

## Completed

- Added and configured shadcn/ui primitives (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), installed `lucide-react`, and added `lib/utils.ts` `cn()` helper.
- Implemented editor chrome foundation:
  - `components/editor/editor-navbar.tsx` with left/center/right sections and sidebar toggle button using `PanelLeftOpen` / `PanelLeftClose`.
  - `components/editor/project-sidebar.tsx` as a floating, slide-in sidebar with tabs (`My Projects`, `Shared`), empty placeholders, and `New Project` CTA.
  - `components/editor/editor-shell.tsx` to compose navbar + overlay sidebar in a full-screen editor frame.
  - `components/editor/editor-dialog.tsx` with reusable title, description, content, and footer pattern for future dialogs.
- Wired `app/page.tsx` to render the editor shell.
- Implemented feature spec `03-auth.md` end to end:
  - Added `ClerkProvider` in `app/layout.tsx` with Clerk `dark` base theme and CSS variable-based appearance overrides from `lib/clerk-appearance.ts`.
  - Added auth routes: `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx` with a minimal two-panel desktop layout and form-only mobile behavior.
  - Added root `proxy.ts` using a protected-first strategy, with public route exceptions for `/` and auth routes defined from `NEXT_PUBLIC_CLERK_SIGN_IN_URL` / `NEXT_PUBLIC_CLERK_SIGN_UP_URL` (with route fallbacks).
  - Updated `app/page.tsx` to redirect authenticated users to `/editor` and unauthenticated users to `/sign-in`.
  - Added `app/editor/page.tsx` as the authenticated editor entry route.
  - Added Clerk `UserButton` to the right side of `components/editor/editor-navbar.tsx`.
  - Installed `@clerk/ui` for Clerk theme support.
  - Verified with `npm run build`.
- Updated auth screen presentation to better match product visual direction:
  - Reworked auth layout into a true 50/50 desktop split with a tinted left panel and divider.
  - Added a compact brand block and short feature list with Lucide icons on the left panel.
  - Kept mobile auth as form-focused content.
- Fixed typography token wiring in `app/globals.css` so `font-sans` resolves to `--font-geist-sans` and `font-mono` resolves to `--font-geist-mono`.
- Resolved blank-page auth transition issue described in `context/current-issues.md`:
  - Added explicit root matcher coverage (`"/"`) in `proxy.ts` so Clerk middleware always wraps root requests that call `auth()`.
  - Updated `SignIn` and `SignUp` components to use `forceRedirectUrl="/editor"` to avoid post-auth bounce ambiguity.
  - Configured `ClerkProvider` with `afterSignOutUrl="/sign-in"` so sign-out returns directly to auth entry.
  - Re-validated auth route behavior (`/`, `/editor`, `/sign-in`) and confirmed successful `npm run build`.

## In Progress

- None.

## Next Up

- Implement project creation flow using the editor dialog pattern and connect actions from the sidebar.

## Open Questions

- Add unresolved product or implementation questions here.

## Architecture Decisions

- Add decisions that affect the system design or data model.

## Session Notes

- Editor layout intentionally keeps the sidebar as a floating overlay so canvas content is not pushed when toggled.
- Sidebar uses tab placeholders only; project data wiring and mutations are still pending.
- Route protection is enforced globally via `proxy.ts`; unauthenticated users are funneled through `/sign-in`, while `/` acts as a redirect entrypoint.
- Auth UI now uses a visually distinct left-side panel to separate brand/context content from the Clerk form area.
- Redirect hardening now ensures root and auth transitions are deterministic even during hot reload cycles.
