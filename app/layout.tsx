import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import "./globals.css";
import { Fragment } from "react";
import { DotPattern } from "@/components/dot-pattern";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-ubuntu-mono",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Mustafa Emre Tufan",
  description: "Frontend Developer",
};

const Favicon = () => {
  return (
    <Fragment>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicons/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <meta name="theme-color" content="#0A0A0A" />
    </Fragment>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={`${ubuntuMono.variable} antialiased font-mono`}>
        <Analytics />
        <DotPattern
          width={16}
          height={16}
          cx={1}
          cy={10}
          className={cn(
            "print:hidden -z-10",
            "[mask-image:linear-gradient(to_bottom,hsl(var(--background)),transparent)]"
          )}
        />
        {children}
      </body>
    </html>
  );
}
