import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Feature";
import HowItWork from "./components/HowItWork";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (

    <>
        <Layout>

            <Hero />

            <About />

            <Feature />

            <HowItWork />

            <Blog />

            <Contact />

            <FAQ />

        </Layout>

        <footer></footer>
    </>
  );
}