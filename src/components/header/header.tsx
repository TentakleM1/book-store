import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { Button } from "../button/button";
import search from "../../../public/icons/search.png";
import style from "./header-style.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={style.head}>
      <section>
        <Image src={logo} alt="logo" width={88} height={46} />
      </section>
      <section>
        <span>Catalog</span>
        <div>
          <label htmlFor="search">
            <Image src={search} alt="search" />
          </label>
          <input name="search" type="text" placeholder="Search" />
        </div>
      </section>
      <section>
        <Button title="Log In" />
        <Button title="Sing Up" />
      </section>
    </header>
  );
};
