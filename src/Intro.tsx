import React from 'react';
import { Link } from 'react-router-dom';

type IntroProps = {
  name: string;
};

const Intro: React.FC<IntroProps> = ({ name }) => {
  return (
    <div>
      <h1>こんにちは、私の自己紹介ページへようこそ！</h1>
      <p>私の名前は{name}です。</p>
      <Link to="/hobby">{name}の趣味について知りたい方はこちら</Link>
    </div>
  );
};

export default Intro;