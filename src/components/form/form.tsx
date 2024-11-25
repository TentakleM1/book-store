"use client";
import React from "react";
import { Button } from "../button/button";
import { enumerationComponents } from "@/shared/utils/enumeration-components/enumeration-components";
import Input, { IInputProps } from "../input/input";
import style from "./form-style.module.scss";
import { useForm } from "react-hook-form";

interface IFormProps {
  title?: string;
  inputs: Omit<IInputProps, "register">[];
  handleForm: (data: any) => void;
}

export default function Form(props: IFormProps) {
  const { register, handleSubmit } = useForm();

  const newInputsOption = props.inputs.map((option) => {
    return { ...option, register };
  });

  return (
    <form onSubmit={handleSubmit(props.handleForm)} className={style.form}>
      {enumerationComponents(Input, newInputsOption)}
      {
        props.title && <Button title={props.title} />
      }
    </form>
  );
}
