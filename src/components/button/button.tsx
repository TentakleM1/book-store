
import React from "react";
import style from "./button-style.module.scss";
import Image, { StaticImageData } from "next/image";

interface IButtonProps {
  title?: string;
  handle?: () => void;
  src?: StaticImageData;
}

export const Button: React.FC<IButtonProps> = (props) => {
  const handleClick = () => {
    if(!props.handle) { return }
    props.handle();
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {props.src ? <Image src={props.src} alt='' /> : props.title}
    </button>
  );
};
