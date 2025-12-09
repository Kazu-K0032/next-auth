"use client";

import { useEffect } from "react";
export default function Home() {
  // クライアント側で使用
  useEffect(() => {
    fetch('/api/auth/providers')
      .then(response => response.json())
      .then(providers => {
        console.log(providers);
      });
  }, []);
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}
