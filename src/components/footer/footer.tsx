import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div></div>
      <div></div>
    </footer>
  );
};
