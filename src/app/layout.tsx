import type { Metadata } from "next";
import localFont from "next/font/local";
import '../styles/globals.css';
import 'animate.css';
import { ReduxProvider } from "./provider";
import 'font-awesome/css/font-awesome.min.css';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mr.Margarita-NextJS",
  description: "Mr.Margarita-NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{backgroundColor: 'rgb(233, 233, 233)'}}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
