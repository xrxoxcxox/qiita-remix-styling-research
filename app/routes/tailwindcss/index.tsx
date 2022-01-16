import { Header } from "~/components/TailwindCSS/Header";
import { Button } from "~/components/TailwindCSS/Button";
import { Footer } from "~/components/TailwindCSS/Footer";
import { Navigation } from "~/components/TailwindCSS/Navigation";

export default function Tailwind() {
  return (
    <>
      <Header />
      <Navigation/>
      <h1>Tailwind</h1>
      <Button>Test</Button>
      <Footer/>
    </>
  );
}
