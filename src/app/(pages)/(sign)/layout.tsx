import Image from "next/image";
import man from "../../../../public/imgs/man.png";
import style from "./sign-style.module.scss";

export default function SignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={style.sign__container}>
      <div className={style.sign__container__form}>
        {children}
      </div>
      <div>
        <Image src={man} alt="man" />
      </div>
    </section>
  );
}
