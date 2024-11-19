'use client'

import { Header } from "@/components/header/header";
import { SignInStyle } from "./signin.module";
import { Footer } from "@/components/footer/footer";

export default function SignIn() {

  return (
    <SignInStyle>
      <Header />
      <main>
        <form action="">
          <input type="email" />
          <input type="password" />
          <button>Sign In</button>
          <button>sign up</button>
        </form>
      </main>
      <Footer />
    </SignInStyle>
  );
}
