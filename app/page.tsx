import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in-button";
import { LogOutButton } from "./components/log-out-button";
import Image from "next/image";

export default async function Home() {
  const session = await auth()
  let isLoggedIn = false
  let welcomeMessage = "You're not signed in"
  if (session?.user) {
    isLoggedIn = true
    welcomeMessage = `Welcome back, ${session.user.name}`
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt="Profile picture"
            style={{borderRadius:"50%", border: "2px solid #ffffff"}}
          />
        )}
        <p className="text-lg">{welcomeMessage}</p>
        {isLoggedIn ? (
          <LogOutButton />
        ): (
          <SignInButton />
        )}
      </main>
    </div>
  );
}
