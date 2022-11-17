import React from "react";
import Button from "./button";
import Title from "./title";
import SubTitle from "./subtitle";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <Title text="Contacto" />
        <div>
          <SubTitle text="Cualquier tipo de consulta y discusión." />
          <p>
            Para ponerse en contacto o simplemente saludar, no dude en mandarme
            un email. Con gusto responderé 😉
          </p>
          <Button text="Di Hola" email="rolando19jobs@gmail.com" />
        </div>
      </section>

      <style jsx>{`
        .contact p {
          max-width: 45rem;
          margin-bottom: 9rem;
          font-size: var(--fz-md);
          color: var(--color-gray);
        }
      `}</style>
    </>
  );
};

export default Contact;
