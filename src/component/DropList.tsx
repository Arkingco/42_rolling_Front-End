import { useState } from 'react';
import DrawerItem from './DrawerItem';
import Strcat from './Icon/Strcat';
import { DropListDown, DropListUp } from './Icon/Drawer';
import DropListItem from './DropListItem';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';

interface Props {
  title: string;
  list: drawerBoard[];
  category: string;
}

interface drawerBoard {
  id: string;
  title: string;
}

export default function DropList({ title, list, category }: Props) {
  const [theme] = useRecoilState(themeState);
  const [dropDown, setDropDown] = useState(false);
  const catTheme = theme.catTheme;

  return (
    <>
      <div
        className="flex h-[54px] w-full items-center justify-between px-[24px]"
        onClick={() => setDropDown(!dropDown)}
      >
        <DrawerItem
          title={title}
          icon={
            <Strcat
              eyeColor={catTheme.headerCatEye}
              bodyColor={catTheme.headerCat}
            />
          }
        />
        {list.length != 0 && (
          <div className="ml-[12px]">
            {dropDown ? (
              <DropListUp color={theme.defaultIcon} />
            ) : (
              <DropListDown color={theme.defaultIcon} />
            )}
          </div>
        )}
      </div>
      {dropDown && (
        <div className="flex h-[216px] w-full flex-col overflow-y-scroll">
          {list && <DropListItem list={list} category={category} />}
        </div>
      )}
    </>
  );
}
