import styled from "@emotion/styled";
import React, { FC, useRef } from "react";
import { Item } from "./Item";
import { SafelyRenderChildren } from "./SafelyRenderChildren";
import { useScrollPosition } from "../hooks/useScrollPosition";

const ScrollWrapper = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 500px;
  overflow: auto;
`;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
`;

export interface ListProps {
  items: string[];
}

export const List: FC<ListProps> = ({ items }) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition(scrollWrapperRef, 200);

  const itemHeight = 30;
  const totalItems = items.length;
  const maxVisibleItems = 2500;
  const visibleHeight = 500; // Height of the scrollable area

  const startIndex = Math.max(0, Math.floor(scrollPosition / itemHeight));
  const endIndex = Math.min(
    totalItems,
    startIndex + Math.ceil(visibleHeight / itemHeight) + maxVisibleItems
  );

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <ScrollWrapper ref={scrollWrapperRef}>
      <ListWrapper>
        <SafelyRenderChildren>
          {visibleItems.map((word, index) => (
            <Item key={startIndex + index}>{word}</Item>
          ))}
        </SafelyRenderChildren>
      </ListWrapper>
    </ScrollWrapper>
  );
};
