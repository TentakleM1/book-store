"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { Wrapper } from "@/components/wrapper/wrapper";
import style from './provider-style.module.scss';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <main className={style.wrapper}>{children}</main>
        <Footer />
      </Wrapper>
    </Provider>
  );
}

export default StoreProvider;
