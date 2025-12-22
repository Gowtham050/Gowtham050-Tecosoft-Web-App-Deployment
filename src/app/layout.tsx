import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import HeaderSection from "@/container/header/page";
import FooterSection from "@/container/footer/page";
import ClientLayout from "@/app/ClientLayout";
import ScrollWrapperSection from "@/components/scrollwrapper";
// _app.tsx or layout.tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  // variable: "--font-gilroy",
  // display: "swap",
});

export const metadata: Metadata = {
  title: "Tecosoft",
  description: "Tecosoft",
  icons: {
    icon: "/fav.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>
        <ClientLayout>
          <ScrollWrapperSection>
            <HeaderSection />
            {children}
            <FooterSection />
          </ScrollWrapperSection>
        </ClientLayout>
      </body>
    </html>
  );
}
