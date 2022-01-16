import { Header } from "~/components/TailwindCSS/Header";
import { Footer } from "~/components/TailwindCSS/Footer";
import { Navigation } from "~/components/TailwindCSS/Navigation";
import {
  FeedItem,
  Data as feedItemDataType,
} from "~/components/TailwindCSS/FeedItem";
import feedItemDataset from "~/datas/dummy-feed-items.json";
import { Ranking } from "~/components/TailwindCSS/Ranking";
import rankingDataset from "~/datas/dummy-ranking.json";
import globalStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: globalStyles }];
}

export default function Tailwind() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-4 justify-center pt-6 px-4 pb-12 w-full max-w-screen-lg mx-auto">
        <Navigation className="self-start flex flex-col col-start-1 col-end-3" />
        <main className="col-start-3 col-end-9">
          <h2 className="text-xl font-bold">ホーム</h2>
          {feedItemDataset.map((feedItemData: feedItemDataType) => (
            <FeedItem
              data={feedItemData}
              key={feedItemData.title}
              className="mt-4"
            />
          ))}
        </main>
        <aside className="col-start-9 col-end-13">
          <Ranking dataset={rankingDataset} />
          <Footer className="mt-4" />
        </aside>
      </div>
    </>
  );
}
