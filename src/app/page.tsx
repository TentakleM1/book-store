'use client'
import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <button onClick={() => router.push('/signin')}>signin</button>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
