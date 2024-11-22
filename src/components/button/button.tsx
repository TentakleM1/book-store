import React from "react";
import style from './button-style.module.scss'

interface IButtonProps {
  title: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  return <button className={style.button}>{props.title}</button>;
};
