import { GlobalStyle } from "~/components/StyledComponents/Global";
import { Button } from "~/components/StyledComponents/Button";
import { Header } from "~/components/StyledComponents/Header";

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

export default function StyledComponents() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1>styled-components</h1>
      <Button>Button</Button>
    </>
  );
}
