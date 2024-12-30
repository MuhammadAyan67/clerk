import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex justify-center items-center p-56  text-6xl">
    <SignedOut>
            <SignInButton  />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
  </div>
  );
}
