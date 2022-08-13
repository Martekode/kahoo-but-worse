import React from 'react';
import Game from './components/Game';
import Header from './Header'
import Footer from './Footer'
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
} from 'recoil';

export const userAnswers = atom({
  key: 'userAnswers',
  default: ['hello world',],
})
export const correctAnswersArray = atom({
  key:'correctAnswersArray',
  default: [],
})
export function App() {
  return (
    
    <RecoilRoot>
      <Header/>
      <header className='App-header'>
      <Game/>
      </header>
      <Footer/>
    </RecoilRoot>
    
  );
}