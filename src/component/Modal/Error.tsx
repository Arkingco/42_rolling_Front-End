import BottomButton from '../BottomButton';

interface Props {
  mainContent: string;
  subContent: string;
  handleModalClose: () => void;
}

export default function Error({
  mainContent,
  subContent,
  handleModalClose,
}: Props) {
  return (
    <div className="relative w-[280px] pt-[32px] pb-[16px] px-[16px] bg-strcat-textarea-bg rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.50)] font-medium">
      <div className=" items-center justify-center">
        <p
          className={`text-center text-body-size1 text-strcat-white font-semibold`}
        >
          {mainContent}
        </p>
        {subContent && (
          <p className="text-center text-body-size2 text-strcat-white/50 mt-[12px]">
            {subContent}
          </p>
        )}
        <div className="mt-[32px] flex">
          <BottomButton
            textColor="text-strcat-black"
            height="h-[42px]"
            color="bg-strcat-bright-yellow"
            name="취소"
            width="w-full"
            onClickHandler={handleModalClose}
            disabled={false}
          />
        </div>
      </div>
    </div>
  );
}
