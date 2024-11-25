"use client";
import React from "react";
import search from "../../../../../public/icons/search.png";
import style from "./search-style.module.scss";
import Input from "@/components/input/input";
import { useForm } from "react-hook-form";

export const Search: React.FC = () => {
  const { register } = useForm();

  return (
    <section className={style.head_logout_search}>
      <Input src={search} type="text" placeholder="Search" inputName='search' register={register} />
    </section>
  );
};
