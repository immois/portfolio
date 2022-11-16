interface SubTitleProps {
  text: string;
  center?: boolean;
}
const SubTitle = ({ text, center = false }: SubTitleProps) => {
  return (
    <>
      <h3>{text}</h3>

      <style jsx>{`
        h3 {
          max-width: 45rem;
          margin-bottom: 5rem;
          font-size: clamp(var(--fz-lg), 5vw, var(--fz-xl));
          line-height: 0.9;
          font-weight: 600;
          color: var(--color-white);
          text-align: ${center ? "center" : "left"};
        }
      `}</style>
    </>
  );
};

export default SubTitle;
