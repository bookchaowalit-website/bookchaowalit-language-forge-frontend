import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Language Forge", description: "A focused phrase practice desk." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
