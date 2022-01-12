import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";

export type Data = { title: string; url: string }[];

type Props = {
  dataset: Data;
  className?: string;
} & ComponentPropsWithRef<"div">;

export const Ranking = forwardRef<HTMLDivElement, Props>(
  ({ dataset, className, ...props }, ref) => {
    return (
      <StyledRanking className={className} {...props} ref={ref}>
        <StyledRankingHeadline>ランキング</StyledRankingHeadline>
        <StyledRankingList>
          {dataset.map((data) => (
            <StyledRankingListItem key={data.title}>
              <StyledRankingLink href={data.url}>
                {data.title}
              </StyledRankingLink>
            </StyledRankingListItem>
          ))}
        </StyledRankingList>
      </StyledRanking>
    );
  }
);

const StyledRanking = styled.div`
  background-color: var(--color-surface);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const StyledRankingHeadline = styled.h2`
  font-size: var(--font-size-subhead);
`;

const StyledRankingList = styled.ol`
  padding-left: 28px;
`;

const StyledRankingListItem = styled.li`
  margin-top: 16px;
  &::marker {
    color: var(--color-dark-text-medium);
    font-weight: bold;
  }
`;

const StyledRankingLink = styled.a`
  color: inherit;
  display: block;
  margin-left: 8px;
  text-decoration: none;
  &:hover {
    color: var(--color-primary-dark);
  }
`;
