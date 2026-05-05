import { SignUp } from "@clerk/nextjs";
import { AuthPageShell } from "@/components/auth/auth-page-shell";

export default function SignUpPage() {
  return (
    <AuthPageShell
      title="Create your Ghost AI account"
      subtitle="Start designing systems, collaborating live, and generating technical specs."
    >
      <SignUp path="/sign-up" routing="path" forceRedirectUrl="/editor" />
    </AuthPageShell>
  );
}
