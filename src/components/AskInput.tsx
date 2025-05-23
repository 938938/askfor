'use client';

import { useAppDispatch } from '@/utils/hooks/hooks';
import { fetchOxAnswer, setOxAsk } from '@/utils/redux/oxSlice';
import { useState } from 'react';

const AskInput = () => {
  const [ask, setAsk] = useState<string>('');
  const dispatch = useAppDispatch();
  const onClickHandler = async () => {
    dispatch(setOxAsk(ask));
    dispatch(fetchOxAnswer());
    setAsk('');
  };
  return (
    <div className='flex flex-col mx-auto max-w-screen-sm gap-2 my-2'>
      <input
        className='border'
        value={ask}
        onChange={(e) => setAsk(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onClickHandler();
          }
        }}
      />
      <button className='bg-slate-300' onClick={onClickHandler}>
        질문하기
      </button>
    </div>
  );
};

export default AskInput;
