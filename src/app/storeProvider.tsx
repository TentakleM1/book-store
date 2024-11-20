"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Header />
      {children}
      <Footer />
    </Provider>
  );
}

export default Providers;
