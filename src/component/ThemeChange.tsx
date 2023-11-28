'use client';

import { useRecoilState } from 'recoil';
import { calm, cyan, green, strcat, themeState } from '@/recoil/theme';
import {
  ThemeCalm,
  ThemeCyan,
  ThemeGreen,
  ThemeStrcat,
} from '@/component/Icon/Theme';

export default function ThemeChange() {
  const [Theme, setTheme] = useRecoilState(themeState);
  const handleThemeChange = (newTheme: themeState) => {
    setTheme(newTheme);
  };
  return (
    <>
      <div className="flex w-full flex-row items-center justify-center">
        <div className="basis-8"></div>
        <div
          className="mt-20 basis-14 "
          onClick={() => handleThemeChange(strcat)}
        >
          <ThemeStrcat />
        </div>
        <div className="basis-8"></div>
        <div
          className="mt-20 basis-14 "
          onClick={() => handleThemeChange(calm)}
        >
          <ThemeCalm />
        </div>
        <div className="basis-8"></div>
        <div
          className="mt-20 basis-14 "
          onClick={() => handleThemeChange(green)}
        >
          <ThemeGreen />
        </div>
        <div className="basis-8"></div>
        <div
          className="mt-20 basis-14  "
          onClick={() => handleThemeChange(cyan)}
        >
          <ThemeCyan />
        </div>
        <div className="basis-8"></div>
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <div className=" mt-9 basis-8"></div>
        <div className={`basis-14 text-center ${Theme.defaultText} `}>
          strcat
        </div>
        <div className="basis-8"></div>
        <div className={`basis-14 text-center ${Theme.defaultText} `}>Calm</div>
        <div className="basis-8"></div>
        <div className={`basis-14 text-center ${Theme.defaultText} `}>
          green
        </div>
        <div className="basis-8"></div>
        <div className={`basis-14 text-center ${Theme.defaultText} `}>Cyan</div>
        <div className="basis-8"></div>
      </div>
    </>
  );
}
