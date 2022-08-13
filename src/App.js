import React from 'react';
import Question from './components/Question';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
export const userAnswers = atom({
  key: 'userAnswers',
  default: ['hello world',],
})
export function App() {
  return (
    <RecoilRoot>
      <Question />
    </RecoilRoot>
  );
}