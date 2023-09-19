import { Header } from "@/components";
import type { LayoutProps } from "./types";

export const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
