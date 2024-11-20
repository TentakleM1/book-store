import Image from "next/image";
import man from "../../../../public/man.png"

export default function SignIn() {
  return (
    <main>
      <section>
        <form action="">
          <input type="email" />
          <input type="password" />
          <button>Sign In</button>
          <button>sign up</button>
        </form>
      </section>
      <section>
        <Image src={man} alt="man" />
      </section>
    </main>
  );
}
