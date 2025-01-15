import { Provider } from "@/components/ui/provider";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
import { AppBreadcrumb } from "@/components/app/AppBreadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Advanced POS",
  description: "Made by CUSTians",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${kanit.variable} antialiased`}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <Provider>
          <Navbar />
          <AppBreadcrumb />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
