import { AnimationEvent, useRef, useState, useEffect } from "react";
import IconMenu from "../assets/icons/menu.svg";
import IconClose from "../assets/icons/cancelar.svg";
import useIsMobile from "../hooks/useIsMobile";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useIsMobile();
  const MenuWrapper = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    if (!MenuWrapper.current) return;

    if (!showMenu) {
      setShowMenu(true);
      document.body.classList.add("flow-hidden");
      MenuWrapper.current.style.display = "block";
      MenuWrapper.current.style.animationName = "openMenu";
    }
  };

  const closeMenu = () => {
    if (!MenuWrapper.current) return;

    if (showMenu) {
      setShowMenu(false);
      document.body.classList.remove("flow-hidden");
      MenuWrapper.current.style.animationName = "closeMenu";
    }
  };

  const closeAnimationMenu = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "closeMenu") {
      if (!MenuWrapper.current) return;

      MenuWrapper.current.style.display = "none";
    }
  };

  const menuList = [
    {
      name: "Portafolio",
      url: "portfolio",
    },
    {
      name: "Habilidades",
      url: "skills",
    },
    {
      name: "Contacto",
      url: "contact",
    },
  ];

  useEffect(() => {
    if (isMobile) return;

    document.body.classList.remove("flow-hidden");
    setShowMenu(false);
  }, [isMobile]);

  return (
    <>
      <button className="btn-menu" onClick={openMenu}>
        <IconMenu />
      </button>

      {isMobile ? (
        <div
          className="mobile-memu"
          ref={MenuWrapper}
          onAnimationEnd={closeAnimationMenu}
        >
          <div className="head-menu">
            <button className="btn-menu btn-sm" onClick={closeMenu}>
              <IconClose />
            </button>
          </div>
          <nav className="nav-menu">
            <ol>
              {menuList.map(({ name, url }, index) => (
                <li key={`${name}-${index}`} onClick={closeMenu}>
                  <a href={"#" + url}>{name}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      ) : (
        <nav className="nav-menu">
          <ol>
            {menuList.map(({ name, url }, index) => (
              <li key={`${name}-${index}`} onClick={closeMenu}>
                <a href={"#" + url}>{name}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <style jsx>{`
        .nav-menu {
          width: 100%;
          height: calc(100vh - 25rem);
          display: flex;
          align-items: center;
        }

        .nav-menu ol {
          width: 100%;
          padding: 0;
        }

        .nav-menu ol li {
          width: 100%;
          list-style: none;
          font-size: 3.3rem;
          font-weight: 500;
          color: var(--color-gray);
          padding: 2.5rem;
        }

        .nav-menu ol li:hover {
          color: var(--color-white);
        }

        .nav-menu ol li a {
          width: 100%;
          display: block;
        }

        .btn-menu {
          width: 2.8rem;
          height: 2.8rem;
          padding: 0 2.4rem;
          background-color: transparent;
          box-sizing: content-box;
          border: 0;
          fill: var(--white);
        }

        .btn-sm {
          width: 2.5rem;
          height: 2.5rem;
        }

        .btn-menu svg {
          width: 100%;
          height: 100%;
        }

        @media (max-width: 1000px) {
          .mobile-memu {
            width: 100vw;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: none;
            background-color: #172126;
            transform-origin: top right;
            animation-duration: 500ms;
            animation-timing-function: cubic-bezier(0.52, 0.35, 0.6, 1.06);
            animation-fill-mode: forwards;
            z-index: 2;
          }

          .head-menu {
            height: 8rem;
            display: flex;
            align-items: center;
            justify-content: flex-end;
          }

          @keyframes openMenu {
            from {
              clip-path: circle(1% at 93% 9%);
            }
            to {
              clip-path: circle(125% at 80% 10%);
            }
          }

          @keyframes closeMenu {
            from {
              clip-path: circle(125% at 80% 10%);
            }
            to {
              clip-path: circle(1% at 91% 5%);
            }
          }
        }

        @media (min-width: 1000px) {
          .nav-menu {
            width: min-content;
            height: auto;
          }

          .nav-menu ol {
            width: min-content;
            display: flex;
          }

          .nav-menu ol li {
            font-size: 2.3rem;
            padding: 0 1.5rem;
          }

          .btn-menu {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
