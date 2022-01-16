import {
  Header,
  links as headerLinks,
} from "~/components/RegularStylesheets/Header";
import {
  Navigation,
  links as navigationLinks,
} from "~/components/RegularStylesheets/Navigation";
import {
  FeedItem,
  links as feedItemLinks,
  Data as feedItemDataType,
} from "~/components/RegularStylesheets/FeedItem";
import {
  Ranking,
  links as rankingLinks,
} from "~/components/RegularStylesheets/Ranking";
import {
  Footer,
  links as footerLinks,
} from "~/components/RegularStylesheets/Footer";
import globalStyles from "~/styles/global.css";
import pageStyles from "~/styles/page.css";
import feedItemDataset from "~/datas/dummy-feed-items.json";
import rankingDataset from "~/datas/dummy-ranking.json";

export function links() {
  return [
    { rel: "stylesheet", href: globalStyles },
    ...headerLinks(),
    ...navigationLinks(),
    ...feedItemLinks(),
    ...rankingLinks(),
    ...footerLinks(),
    { rel: "stylesheet", href: pageStyles },
  ];
}

export default function RegularStylesheets() {
  return (
    <>
      <Header />
      <div className="page-contents">
        <Navigation className="page-navigation" />
        <main className="page-main">
          <h2 className="page-main__headline">ホーム</h2>
          {feedItemDataset.map((feedItemData: feedItemDataType) => (
            <FeedItem
              data={feedItemData}
              key={feedItemData.title}
              className="page-feedItem"
            />
          ))}
        </main>
        <aside className="page-sidebar">
          <Ranking dataset={rankingDataset} />
          <Footer className="page-footer" />
        </aside>
      </div>
    </>
  );
}
