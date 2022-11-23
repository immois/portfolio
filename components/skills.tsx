import Title from "./title";
import SubTitle from "./subtitle";
import Image from "next/image";

const Skills = () => {
  const iconsSkills = [
    "javascript",
    "typescript",
    "react",
    "redux",
    "html",
    "css",
    "sass",
    "graphQL",
    "git",
    "nextjs",
    "tailwind",
    "babel",
    "webpack",
    "prettier",
    "jest",
    "postman",
    "typeORM",
    "nodejs",
    "nestJS",
    "ESLint",
    "rollup",
    "mySQL",
    "parcel",
    "sequelize",
    "storybook",
    "npm",
    "yarn",
    "PM2",
    "RxJS",
    "AWS",
  ];

  return (
    <>
      <section className="skills" id="skills">
        <div className="skills-title">
          <Title text="Habilidades" />
        </div>
        <div className="skills-heading">
          <SubTitle text="Conjunto esenciales de habilidades técnicas." />
          <p>
            Mis principales skills frontend, desde el proceso de configuración
            con herramientas como Webpack hasta el manejo de frameworks como
            Next.js
            <br />
            <br />
            Dominando también los principales skills de backend como Node.js y
            sus principales ORMs.
          </p>
        </div>
        <div className="skills-gallery">
          {iconsSkills.map((item) => {
            return (
              <figure key={item}>
                <Image
                  src={`/icons-skills/${item}.svg`}
                  alt=""
                  width={40}
                  height={40}
                />
                <figcaption>{item}</figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <style jsx>{`
        .skills {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto 1fr;
        }

        .skills-heading p {
          font-size: var(--fz-sm);
          color: var(--color-gray);
          margin-bottom: 9rem;
        }

        .skills-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(5.4rem, 1fr));
          grid-auto-rows: 6.7rem;
          grid-auto-flow: dense;
          row-gap: 4rem;
          column-gap: 2rem;
          align-items: center;
          justify-items: center;
        }

        .skills-gallery figure {
          margin: 0;
          overflow: hidden;
          text-align: center;
        }

        .skills-gallery figure figcaption {
          font-size: var(--fz-xxs);
          text-transform: capitalize;
          padding-top: 3px;
        }

        @media (min-width: 1000px) {
          .skills {
            grid-template-columns: 1fr 1fr;
            column-gap: 9rem;
          }

          .skills-heading,
          .skills-title {
            grid-column-start: 2;
          }

          .skills-gallery {
            grid-row-start: 2;
          }
        }
      `}</style>
    </>
  );
};

export default Skills;
