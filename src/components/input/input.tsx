import Image, { StaticImageData } from "next/image";
import style from "./input-style.module.scss";
import {  UseFormRegister, FieldValues } from "react-hook-form";

export interface IInputProps {
  src: StaticImageData;
  type: string;
  placeholder: string;
  inputName: string;
  register: UseFormRegister<FieldValues>;
  disabled?: boolean;
  value?: string;
}

export default function Input(props: IInputProps) {
  
  return (
    <div className={style.input}>
      <label htmlFor="search">
        <Image src={props.src} alt="search" />
      </label>
      <input type={props.type} placeholder={props.placeholder} value={props.value && props.value} disabled={props.disabled ? props.disabled : false} {...props.register(props.inputName, { required: "This is required.", })}/>
    </div>
  );
}
