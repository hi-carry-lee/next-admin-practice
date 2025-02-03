import { Inter } from "next/font/google";
import "./_ui/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js Admin Dashboard",
  description: "This is a Next.js practice project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
