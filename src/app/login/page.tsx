"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <button onClick={() => signIn("google")} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 hover:cursor-pointer">
      Sign in with google
      </button>
  )
}
