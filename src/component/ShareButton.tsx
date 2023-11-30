import { handleShare } from '@/utils/handleShare';
import Share from './Icon/Share';
import { useRecoilState } from 'recoil';
import { themeState } from '@/recoil/theme';

interface Props {
  params: string;
}

export default function ShareButton({ params }: Props) {
  const [theme, setTheme] = useRecoilState(themeState);
  return (
    <div>
      <div className=" relative top-[-30px] mx-[24px] text-[18px]">
        <span className={`${theme.highlightText}`}>
          공유하기 버튼을 눌러 생성한 스트링 캣을 동료에게 공유해보세요!
        </span>
        <span className={`${theme.defaultText}`}>
          동료들이 이어준 문자열을 확인할 수 있어요!
        </span>
      </div>
      <div className="flex h-[300px] w-full  justify-center">
        <button
          className="top-[30px] items-center justify-center"
          onClick={() => handleShare(`${params}`)}
        >
          <Share />
        </button>
      </div>
    </div>
  );
}