"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import LayoutContainer from "@/components/layout/layoutContainer";

const HIDDEN_LAYOUT_PATHS = ["/login", "/signup", "/auth/reset"];

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage = HIDDEN_LAYOUT_PATHS.some((path) =>
    pathname.startsWith(path)
  );

  return (
    <>
      {!isAuthPage && (
        <header>
          <Navbar />
        </header>
      )}
      {children}
      {!isAuthPage && (
        <LayoutContainer className="py-[10px] md:py-[14px]">
          <Footer />
        </LayoutContainer>
      )}
    </>
  );
}
