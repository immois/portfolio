import localFont from "@next/font/local";

const rubik = localFont({
  src: "../assets/fonts/Rubik/Rubik-Regular.ttf",
});

interface ButtonProps {
  text: string;
  email?: string;
}

const Button = ({ text, email }: ButtonProps) => {
  const handleClick = () => {
    const isEmail = Boolean(email);
    if (isEmail) {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <button type="button" className="button" onClick={handleClick}>
        {text}
      </button>

      <style jsx>{`
        .button {
          min-width: 18rem;
          background-color: transparent;
          padding: 0;
          margin: 0;
          border: 0;
          cursor: pointer;
          transition: all 0.3s 0s;
          background-color: var(--color-primary);
          color: var(--white);
          padding: 1.6rem 2.6rem;
          border-radius: 1.6rem;
          font-size: clamp(1.6rem, 2vw, 1.7rem);
          font-weight: 500;
          font-family: ${rubik.style.fontFamily}, sans-serif;
        }

        .button:active {
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
};

export default Button;
