import { ReactElement, ComponentPropsWithRef, forwardRef } from "react";
import { Button } from "~/components/StyledComponents/Button";
import styled from "styled-components";

export type Data = {
  thumbnail?: string;
  date: string;
  title: string;
  favorites: number;
  comments: number;
  url: string;
};

type Props = {
  data: Data;
  className?: string;
} & ComponentPropsWithRef<"article">;

export const FeedItem = forwardRef<HTMLElement, Props>(
  ({ data, className, ...props }, ref): ReactElement => {
    const { thumbnail, date, title, favorites, comments, url } = data;
    return (
      <StyledFeedItem className={className} {...props} ref={ref}>
        {thumbnail && (
          <StyledFeedItemThumbnailWrapper href={url}>
            <StyledFeedItemThumbnail src={thumbnail} alt="" />
          </StyledFeedItemThumbnailWrapper>
        )}
        <StyledFeedItemInformation>
          <StyledFeedItemLink href={url}>
            <StyledFeedItemPostedAt dateTime={date}>
              {date}
            </StyledFeedItemPostedAt>
            <StyledFeedItemTitle>{title}</StyledFeedItemTitle>
          </StyledFeedItemLink>
          <StyledFeedItemReactions>
            <StyledFeedItemReactionIcon>favorite</StyledFeedItemReactionIcon>
            <StyledFeedItemReactionCount>{favorites}</StyledFeedItemReactionCount>
            <StyledFeedItemReactionIcon>
              mode_comment
            </StyledFeedItemReactionIcon>
            <StyledFeedItemReactionCount>{comments}</StyledFeedItemReactionCount>
            <StyledFeedItemButton
              size="s"
              variant="border"
              onClick={() => alert(`「${title}」を保存`)}
            >
              保存
            </StyledFeedItemButton>
          </StyledFeedItemReactions>
        </StyledFeedItemInformation>
      </StyledFeedItem>
    );
  }
);

const StyledFeedItem = styled.article`
  background-color: var(--color-surface);
  border-radius: 4px;
  overflow: hidden;
`;

const StyledFeedItemThumbnailWrapper = styled.a`
  display: block;
  overflow: hidden;
  padding-top: 52.5%;
  position: relative;
`;

const StyledFeedItemThumbnail = styled.img`
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

const StyledFeedItemInformation = styled.div`
  padding: 16px;
`;

const StyledFeedItemLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: var(--color-primary-dark);
  }
`;

const StyledFeedItemPostedAt = styled.time`
  color: var(--color-dark-text-medium);
  display: block;
  font-size: var(--font-size-body3);
`;

const StyledFeedItemTitle = styled.h3`
  font-size: var(--font-size-headline);
  line-height: 1.25;
  margin-top: 8px;
`;

const StyledFeedItemReactions = styled.div`
  align-items: center;
  display: flex;
  margin-top: 8px;
`;

const StyledFeedItemReactionIcon = styled.span.attrs(() => ({
  className: "material-icons-round",
}))`
  color: var(--color-dark-text-medium);
  font-size: var(--font-size-body1);
`;

const StyledFeedItemReactionCount = styled.span`
  font-size: var(--font-size-body2);
  margin-left: 8px;
  + ${StyledFeedItemReactionIcon} {
    margin-left: 24px;
  }
`

const StyledFeedItemButton = styled(Button)`
  margin-left: auto;
`