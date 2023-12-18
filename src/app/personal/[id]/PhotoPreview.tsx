import PhotoPreviewIcon from '@/component/Icon/PhotoPreview';
import Image from 'next/image';

interface Props {
  photoUrl: string;
  color: string;
  handleClickPhoto: () => void;
}

export default function PhotoPreview({
  photoUrl,
  color,
  handleClickPhoto,
}: Props) {
  return (
    <div className="absolute top-[-51px]">
      <div className="w-[44px] h-[46px] relative" onClick={handleClickPhoto}>
        <div className="w-[40px] h-[40px] absolute left-[2px]">
          <Image
            src={photoUrl}
            width={innerWidth}
            height={innerHeight}
            className="rounded-[10px] w-full h-full"
            alt="photo preview"
          />
        </div>
        <div className="absolute">
          <PhotoPreviewIcon color={color} />
        </div>
      </div>
    </div>
  );
}
