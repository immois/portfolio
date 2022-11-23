import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

interface MainProps {
  children: ReactNode | ReactNode[];
}

const BaseLayout = ({ children }: MainProps) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};

export default BaseLayout;
