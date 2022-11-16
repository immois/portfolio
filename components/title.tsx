export interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <h2> — {text}</h2>

      <style jsx>{`
        h2 {
          color: #3f48cc;
          font-size: var(--fz-lg);
          font-weight: 500;
          margin-bottom: 2.6rem;
        }
      `}</style>
    </>
  );
};

export default Title;
