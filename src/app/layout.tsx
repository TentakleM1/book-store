import type { Metadata } from "next";
import "./globals.css";
import Providers from "./StoreProvider";

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
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
