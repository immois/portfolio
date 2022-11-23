import Head from "next/head";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Skills from "../components/skills";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

interface HomeProps {
  title: string;
  career: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  return {
    props: {
      title: "Moises Machuca Valverde",
      career: "Software Developer",
    },
  };
};

export default function Home({
  title,
  career,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{`${title} | ${career}`}</title>
        <meta
          name="description"
          content="Desarrollador de software en Lima,Perú con más de 3 años
          de experiencia en desarrollo web y UI/UX Designer.
          Apasionado por diseñar sistemas elegantes, escalables y mantenibles."
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />

      <Skills />
      <Contact />
    </>
  );
}
