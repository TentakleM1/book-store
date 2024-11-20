import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./storeProvider";
import { Wrapper } from "../components/wrapper/wrapper";
import "./global.scss";
import "./variables.scss";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Books Store",
  description: "books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={poppins.className}>
      <body>
        <Wrapper>
          <Providers>{children}</Providers>
        </Wrapper>
      </body>
    </html>
  );
}
