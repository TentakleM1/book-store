import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { Button } from "../button/button";
export const Header: React.FC = () => {
  return (
    <header>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <span>Catalog</span>
        <input type="text" placeholder="Search"/>
      </div>
      <div>
        <Button title="Log In"/>
        <Button title="Sing Up"/>
      </div>
    </header>
  );
};
