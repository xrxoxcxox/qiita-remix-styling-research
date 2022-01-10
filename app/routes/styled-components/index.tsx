import styled from "styled-components";
import { GlobalStyle } from "~/components/StyledComponents/Global";
import { Header } from "~/components/StyledComponents/Header";
import { Footer } from "~/components/StyledComponents/Footer";
import { Navigation } from "~/components/StyledComponents/Navigation";
import feedItemDataset from "~/datas/dummy-feed-items.json";
import {
  FeedItem,
  Data as feedItemDataType,
} from "~/components/StyledComponents/FeedItem";
import rankingDataset from "~/datas/dummy-ranking.json";
import { Ranking } from "~/components/StyledComponents/Ranking";

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
      <StyledPageContents>
        <StyledPageNavigation />
        <StyledPageMain>
          <StyledPageMainHeadline>ホーム</StyledPageMainHeadline>
          {feedItemDataset.map((feedItemData: feedItemDataType) => (
            <StyledPageFeedItem data={feedItemData} key={feedItemData.title} />
          ))}
        </StyledPageMain>
        <StyledPageSidebar>
          <Ranking dataset={rankingDataset} />
          <StyledPageFooter />
        </StyledPageSidebar>
      </StyledPageContents>
    </>
  );
}

const StyledPageContents = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-areas: "navigation navigation main main main main main main sidebar sidebar sidebar sidebar";
  grid-template-columns: repeat(12, minmax(48px, 80px));
  justify-content: center;
  padding: 24px 16px 48px;
`;

const StyledPageNavigation = styled(Navigation)`
  align-self: start;
  display: flex;
  flex-direction: column;
  grid-area: navigation;
  position: sticky;
  top: 88px;
`;

const StyledPageMain = styled.main`
  grid-area: main;
`;

const StyledPageMainHeadline = styled.h2`
  font-size: var(--font-size-subhead);
  font-weight: bold;
`;

const StyledPageFeedItem = styled(FeedItem)`
  margin-top: 16px;
`;

const StyledPageSidebar = styled.aside`
  grid-area: sidebar;
`;

const StyledPageFooter = styled(Footer)`
  margin-top: 16px;
`;
