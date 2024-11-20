'use client'
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main>
        <button onClick={() => router.push('/signin')}>signin</button>
      </main>
      <footer>
      </footer>
    </div>
  );
}
