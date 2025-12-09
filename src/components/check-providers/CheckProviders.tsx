"use client";

import { useEffect } from "react";

export default function CheckProviders() {
  /**
   * プロバイダーを取得
   * @see https://next-auth-docs.vercel.app/getting-started/rest-api#get-apiauthproviders
   */
  useEffect(() => {
    fetch('/api/auth/providers')
      .then(response => response.json())
      .then(providers => {
        console.log("providers", providers);
      });
  }, []);
  return (
    <div>
    </div>
  )
}
