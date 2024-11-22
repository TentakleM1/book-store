import Image from "next/image";
import React from "react";
import search from "../../../../../public/icons/search.png";
import style from "./search-style.module.scss";

export const Search: React.FC = () => {
  return (
    <section className={style.head_logout_search}>
      <span>Catalog</span>
      <div className={style.head_search}>
        <label htmlFor="search">
          <Image src={search} alt="search" />
        </label>
        <input name="search" type="text" placeholder="Search" />
      </div>
    </section>
  );
};
