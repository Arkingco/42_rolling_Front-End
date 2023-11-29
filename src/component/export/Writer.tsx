'use client';

import { content } from '@/types/content';

export default function Writer({ content }: { content: content }) {
  return (
    <div className="inline">
      {content.text}
      <span className=" bg-emerald-400">
        {content.writer === '' ? '익명의 스트링캣' : content.writer}
      </span>
    </div>
  );
}
