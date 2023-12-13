'use client';

import Error from '@/component/Modal/Error';
import useModal from '@/hooks/useModal';
import { axiosInstance } from '@/utils/axios';
import { confirm } from '@/utils/confirm';

export default function Modal() {
  const [openModal, closeModal] = useModal();

  const handleConfirm = async () => {
    const result = await confirm(
      '완료하시겠어요?',
      '제목과 테마는 수정할 수 없어요🐱',
      openModal,
      closeModal,
    );
  };

  const handleError = () => {
    openModal(
      <Error content="에러 모달 띄우기" handleModalClose={closeModal} />,
    );
  };

  const handleErrorRespons = () => {
    axiosInstance
      .get('/api/error')
      .then((res) => {})
      .catch((error) => {});
  };

  return (
    <div className="h-full w-full">
      <div>
        <button onClick={handleError}>Modal click</button>
      </div>
      <div>
        <button onClick={handleConfirm}>Confirm Click</button>
      </div>
      <div>
        <button onClick={handleErrorRespons}>500 Error api send</button>
      </div>
    </div>
  );
}
