import React from 'react';

type HobbyProps = {
  hobby: string;
};

const Hobby: React.FC<HobbyProps> = ({ hobby }) => {
  return (
    <div>
      <h1>趣味の詳細情報</h1>
      <p>趣味: {hobby}</p>
      <p>中学1年生から始めた{hobby}を今でも続けており、月に一度か二度息抜きに友人と楽しみます。</p>
      <p>大会にもたまに出場し、景品獲得目指して頑張っています。</p>
    </div>
  );
};

export default Hobby;