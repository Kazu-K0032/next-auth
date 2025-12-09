"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return (
    <button onClick={() => signIn("google", { callbackUrl: "/"})} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
      Sign in with google
      </button>
  )
}
