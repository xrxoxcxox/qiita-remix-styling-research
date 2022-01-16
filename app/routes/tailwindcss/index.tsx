import { Header } from "~/components/TailwindCSS/Header";
import { Button } from "~/components/TailwindCSS/Button";
import { Footer } from "~/components/TailwindCSS/Footer";
import { Navigation } from "~/components/TailwindCSS/Navigation";
import {
  FeedItem,
  Data as feedItemDataType,
} from "~/components/TailwindCSS/FeedItem";
import feedItemDataset from "~/datas/dummy-feed-items.json";

export default function Tailwind() {
  return (
    <>
      <Header />
      <Navigation />
      <h1>Tailwind</h1>
      {feedItemDataset.map((feedItemData: feedItemDataType) => (
        <FeedItem
          data={feedItemData}
          key={feedItemData.title}

        />
      ))}
      <Button>Test</Button>
      <Footer />
    </>
  );
}
