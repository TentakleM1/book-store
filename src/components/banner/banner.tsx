import React from "react";
import style from './banner-style.module.scss';
import Image from "next/image";
import books from '../../../public/imgs/books.png';

export const Banner: React.FC = () => {
  return (
   <section className={style.banner}>
        <div className={style.banner__assasin__picture}>
            <Image src={books} alt="books" />
        </div>
        <div>

        </div>
   </section>
  );
};
