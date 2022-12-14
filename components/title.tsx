export interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <>
      <h2> — {text}</h2>

      <style jsx>{`
        h2 {
          color: var(--color-primary);
          font-size: var(--fz-md);
          font-weight: 500;
          margin-bottom: 2.6rem;
        }
      `}</style>
    </>
  );
};

export default Title;
