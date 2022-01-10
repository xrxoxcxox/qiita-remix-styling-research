import { GlobalStyle } from "~/components/StyledComponents/Global";
import { Button } from "~/components/StyledComponents/Button";
import { Header } from "~/components/StyledComponents/Header";
import { Footer } from "~/components/StyledComponents/Footer";
import { Navigation } from "~/components/StyledComponents/Navigation";
import feedItemDataset from "~/datas/dummy-feed-items.json";
import {
  FeedItem,
  Data as feedItemDataType,
} from "~/components/StyledComponents/FeedItem";

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
      <Navigation />
      {feedItemDataset.map((feedItemData: feedItemDataType) => (
        <FeedItem
          data={feedItemData}
          key={feedItemData.title}
          className="page-feedItem"
        />
      ))}
      <h1>styled-components</h1>
      <Button>Button</Button>
      <Footer />
    </>
  );
}