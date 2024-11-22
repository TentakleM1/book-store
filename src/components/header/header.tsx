import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { Button } from "../button/button";
import style from "./header-style.module.scss";
import { Search } from "./components/search/search";

export const Header: React.FC = () => {
  return (
    <header className={style.head}>
      <section>
        <Image src={logo} alt="logo" width={88} height={46} />
      </section>
      <Search />
      <section>
        <Button title="Log In" />
        <Button title="Sing Up" />
      </section>
    </header>
  );
};
