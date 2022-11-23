import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./menu";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <Link href="/">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="logo de Moises"
              priority
            />
          </Link>
        </div>
        <Menu />
      </header>

      <style jsx>{`
        .header {
          width: 100%;
          height: 8rem;
          position: sticky;
          top: 0;
          max-width: 100rem;
          margin: 0 auto;
          display: flex;
          background-color: #1b262c;
          justify-content: space-between;
          align-items: center;
          z-index: 3;
        }

        .header-logo {
          position: relative;
          z-index: 3;
          padding: 0 2.4rem;
        }

        @media (min-width: 1000px) {
          .header {
            height: 10rem;
          }

          .header-logo {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
