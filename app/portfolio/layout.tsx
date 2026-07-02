import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Raymondo Stiven Sugiarto",
  description:
    "Explore the portfolio of Raymondo Stiven Sugiarto, featuring web and mobile applications built with Laravel, React, and modern technologies.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
