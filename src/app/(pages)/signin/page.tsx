'use client'

import { SignInStyle } from "./signin.module";

export default function SignIn() {

  return (
    <SignInStyle>
      <div>
        <form action="">
          <input type="email" />
          <input type="password" />
          <button>Sign In</button>
          <button>sign up</button>
        </form>
      </div>
    </SignInStyle>
  );
}
