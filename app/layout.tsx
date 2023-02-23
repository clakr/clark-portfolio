import { Raleway } from "@next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], weight: "variable" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`bg-gradient text-gray-200 selection:bg-gray-700 ${raleway.className}`}
      >
        {children}
      </body>
    </html>
  );
}
