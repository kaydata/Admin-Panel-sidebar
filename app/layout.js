import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Mainheader from "@/components/header/Mainheader";
import MenuContextProvider from "@/context/MenuContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Front end App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuContextProvider>
          <Mainheader />
          {children}
        </MenuContextProvider>
      </body>
    </html>
  );
}
