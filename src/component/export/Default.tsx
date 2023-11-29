'use client';

import { content } from '@/types/content';

interface Props {
  content: content;
  color: string;
  highlightcolor: string;
}
export default function Default({ content, color, highlightcolor }: Props) {
  return (
    <div className={`${highlightcolor} inline`}>
      {content.id % 2 === 0 ? (
        <span>{content.text}</span>
      ) : (
        <span className={` ${color}`}>{content.text}</span>
      )}
    </div>
  );
}
