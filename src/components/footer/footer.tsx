import Image from "next/image";
import React from "react";
import whiteLogo from "../../../public/imgs/white-logo.png";
import style from "./footer-style.module.scss";
import map from '../../../public/imgs/map.png'

export const Footer: React.FC = () => {
  return (
    <footer className={style.footer_books}>
        <section className={style.footer_books_info}>
          <div>
            <div>
              <Image src={whiteLogo} alt="logo" width={88} height={46} />
            </div>
            <div>
              <address>
                <p>tranthuy.nute@gmail.com</p>
                <p>(480) 555-0103</p>
              </address>
            </div>
          </div>
          <div>
            <nav>
              <ul>
                <li>Home Page</li>
                <li>Catalog</li>
                <li>My Account</li>
                <li>Cart</li>
              </ul>
            </nav>
          </div>
          <div>
            <address>
              <p>6391 Elgin St. Celina, Delaware 10299</p>
              <Image src={map} alt="map" />
            </address>
          </div>
        </section>
    </footer>
  );
};
