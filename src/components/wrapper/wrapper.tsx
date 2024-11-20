import React from "react";
import style from './wrapper.-style.module.scss'

export const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={style.wrapper}>{children}</div>;
}
