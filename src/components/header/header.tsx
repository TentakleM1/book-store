"use client";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { Button } from "../button/button";
import style from "./header-style.module.scss";
import { Search } from "./components/search/search";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { removeUser } from "@/store/userSlice/userSlice";

export const Header: React.FC = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  return (
    <header className={style.head}>
      <section>
        <Link href="/">
          <Image src={logo} alt="logo" width={88} height={46} />
        </Link>
      </section>
      <section>
        {user ? (
          <Button title="logout" handle={() => dispatch(removeUser())} />
        ) : (
          <span>Catalog</span>
        )}
      </section>
      <Search />
      <section>
        {user ? (
          <>
            <Button title="trash" handle={() => console.log("trash")} />
            <Button title="faiforyt" handle={() => console.log("fayforit")} />
            <Button title="profile" handle={() => router.push("/profile")} />
          </>
        ) : (
          <>
            <Button title="Login In" handle={() => router.push("/login-in")} />
            <Button title="Sing Up" handle={() => router.push("/sign-up")} />
          </>
        )}
      </section>
    </header>
  );
};
