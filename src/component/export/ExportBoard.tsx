import { content } from '@/types/content';
import Default from './Default';
import Writer from './Writer';
import LineBreak from './LineBreak';
import { exportThemeEnum } from '@/types/export';
import { themeObj } from '@/recoil/theme';

interface Props {
  title: string;
  content: content[] | undefined;
  exportTheme: string;
  boardTheme: 'strcat' | 'calm' | 'green' | 'cyan';
}

export default function ExportBoard({
  title,
  content,
  exportTheme,
  boardTheme,
}: Props) {
  const theme = themeObj[boardTheme];
  return (
    <div className={`${theme.background} ${theme.defaultText}`}>
      <div className={`mx-[24px]`}>
        <div className={`pb-[32px] pt-[40px] text-[22px]`}>{title}</div>
        <div className={` pb-[40px]  text-justify text-[18px]`}>
          {content?.map((item: content) => (
            <div key={item.id}>
              {exportTheme === exportThemeEnum.default && (
                <Default
                  content={item}
                  color={theme.defaultText}
                  highlightcolor={theme.highlightText}
                />
              )}
              {exportTheme === exportThemeEnum.lineBreak && (
                <LineBreak content={item} color={theme.defaultText} />
              )}
              {exportTheme === exportThemeEnum.writer && (
                <Writer content={item} color={theme.defaultText} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
