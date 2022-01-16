import { Header } from "~/components/TailwindCSS/Header";
import { Button } from "~/components/TailwindCSS/Button";
import { Footer } from "~/components/TailwindCSS/Footer";
import { Navigation } from "~/components/TailwindCSS/Navigation";

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
    },
  ];
}

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
