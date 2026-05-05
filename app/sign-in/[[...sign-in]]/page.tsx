import { SignIn } from "@clerk/nextjs";
import { AuthPageShell } from "@/components/auth/auth-page-shell";

export default function SignInPage() {
  return (
    <AuthPageShell
      title="Sign in to Ghost AI"
      subtitle="Continue building collaborative system designs with your team."
    >
      <SignIn path="/sign-in" routing="path" forceRedirectUrl="/editor" />
    </AuthPageShell>
  );
}
