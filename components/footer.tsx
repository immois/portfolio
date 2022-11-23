import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <a
          href="https://github.com/immois"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed and Developed by Moises Machuca
        </a>
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          font-size: var(--fz-xxs);
          color: var(--color-gray);
          padding: 3rem 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
