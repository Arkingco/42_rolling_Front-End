import { useEffect, useState } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';

import ObserveContent from './ObserveContent';
import useModal from '@/hooks/useModal';
import { addContentState } from '@/recoil/addContent';
import { board } from '@/types/boards';
import { content } from '@/types/content';
import { observeContent } from '@/types/observe';
import { themeState } from '@/types/theme';

interface Props {
  board: board;
  theme: themeState;
}

const StrcatBoard = ({ board, theme }: Props) => {
  const [observe, setObserve] = useState<observeContent>({
    contentId: 0,
    photoUrl: '',
    writer: '',
  });
  const [content, setContent] = useState<content[]>([]);
  const [addContent, setAddContent] = useRecoilState(addContentState);
  const [openModal, closeModal] = useModal();

  useEffect(() => {
    setContent(board.contents);
    if (board.contents.length > 0) {
      setObserve(() => ({
        contentId: board.contents[0].id,
        photoUrl: board.contents[0].photoUrl,
        writer: board.contents[0].writer,
      }));
    }
  }, [board]);

  return (
    <div className="h-auto break-all px-[24px] text-justify">
      {content &&
        content.map((content: content) => {
          return (
            <ObserveContent
              key={content.id}
              observe={observe}
              setObserve={setObserve}
              content={content}
              addContent={addContent}
              setAddContent={setAddContent}
              theme={theme}
              openModal={openModal}
              closeModal={closeModal}
            />
          );
        })}
    </div>
  );
};

export default React.memo(StrcatBoard);
