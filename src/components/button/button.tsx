import React from "react";
import { ButtonStyle } from "./button.module";

interface IButtonProps {
  title: string;
}

export const Button: React.FC<IButtonProps> = (props) => {
  return <ButtonStyle>{props.title}</ButtonStyle>;
};
