'use client';

import { useEffect, useState, useRef } from 'react';
import { axiosInstance } from '@/utils/axios';
import StrcatBoard from '@/component/StrcatBoard';
import { board } from '@/types/boards';
import ContentPhoto from '@/component/ContentPhoto';
import { useRecoilState } from 'recoil';
import { themeObj, themeState } from '@/recoil/theme';
import Drawer from '@/component/Drawer';
import StrcatHeader from '@/component/StrcatHeader';
import BottomButton from '@/component/BottomButton';
import { observeState } from '@/recoil/observe';

export default function Home() {
  const [title, setTitle] = useState<string | null>();
  const [boards, setBoards] = useState<board[]>([]);
  const [isAdd, setIsAdd] = useState(false);
  const [theme] = useRecoilState(themeState);
  const itemsRef = useRef(new Map());
  const [observe] = useRecoilState(observeState);
  const scrollToId = (itemId: number) => {
    const map = getMap();
    const node = map.get(itemId);
    const offset = node.offsetTop;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };
  const handleClick = () => {
    setIsAdd(true);
  };
  const getMap = () => {
    return itemsRef.current;
  };
  useEffect(() => {
    axiosInstance
      .get(`/api/group`)
      .then((data) => {
        setBoards(data.data.boards);
        setTitle(data.data.title);
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      <Drawer />
      <StrcatHeader />
      <div className={`relative w-full py-[24px] ${theme.BgColor}`}>
        <div className="mb-[20px]">
          <h1 className={`${theme.DefaultFontColor} text-4xl`}>{title}</h1>
        </div>
        <div>
          {boards.map((board: board) => {
            return (
              <div
                key={board.id}
                className={`my-[32px] ${themeObj[board.theme].BgColor}`}
                onClick={() => scrollToId(board.id)}
              >
                <p
                  className={`cursor-pointer text-xl ${
                    themeObj[board.theme].DefaultFontColor
                  }`}
                >
                  {board.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="pb-[500px] text-justify">
          {boards.map((board) => {
            return (
              <StrcatBoard
                theme={board.theme}
                setIsAdd={setIsAdd}
                isAdd={isAdd}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(board.id, node);
                  } else {
                    map.delete(board.id);
                  }
                }}
                key={board.id}
                boardId={board.id}
                title={board.title}
                data={board.content}
              />
            );
          })}
        </div>
        {!isAdd && (
          <div className="sticky bottom-5 flex w-full">
            <BottomButton
              color={`bg-white`}
              name="저장"
              width="basis-1/4"
              onClickHandler={handleClick}
              disabled={false}
            />
            <BottomButton
              color={`bg-white`}
              name="공유"
              width="basis-1/4"
              onClickHandler={handleClick}
              disabled={false}
            />
            <BottomButton
              color={`bg-strcat-green`}
              name="만들기"
              width="basis-1/4"
              onClickHandler={handleClick}
              disabled={false}
            />
            <BottomButton
              color={`bg-strcat-cyan`}
              name="글 작성"
              width="basis-1/4"
              onClickHandler={handleClick}
              disabled={!observe.boardId}
            />
          </div>
        )}
        {!isAdd && <ContentPhoto />}
      </div>
    </>
  );
}
