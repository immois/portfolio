import Button from "./button";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-main">
          <h1>Moisés Machuca.</h1>
          <h2>Frontend Developer</h2>
        </div>
        <p>
          Soy un desarrollador de software especializado en el desarrollo del
          lado del cliente, construyendo aplicaciones web con React.js.
          Actualmente estoy enfocado en crear productos accesibles.
        </p>
        <div className="hero-actions">
          <Button text="Contactar" />
        </div>
      </section>

      <style jsx>{`
        .hero {
          width: 100%;
          min-height: 90vh;
          align-items: flex-start;
        }

        .hero-main {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .hero-main h1 {
          font-size: clamp(var(--fz-name-md), 12vw, var(--fz-name-xl));
          font-weight: 600;
          line-height: 0.9;
          transform: translateX(-2px);
        }

        .hero-main h2 {
          margin-bottom: 1.5rem;
          font-size: clamp(var(--fz-prof-md), 6vw, var(--fz-prof-xl));
          line-height: 0.9;
          color: var(--color-primary);
          font-weight: 500;
        }

        p {
          max-width: 60rem;
          font-size: clamp(1.8rem, 2vw, 2rem);
          color: #9c9fb7;
        }

        .hero-actions {
          margin-top: 4rem;
        }
      `}</style>
    </>
  );
};

export default Hero;
