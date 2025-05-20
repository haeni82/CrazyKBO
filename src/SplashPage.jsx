import React from 'react';
import './SplashPage.css';

export default function SplashPage() {
  return (
    <div className="full-screen">
      <div className="center-box">
        <img src="/kklogo.png" alt="크크 로고" className="logo" />
        <h1 className="title">크크</h1>
        <p className="subtitle">CRAZY KBO</p>

        <div className="login-buttons">
          <button className="login-button google">
            <img src="/google.png" alt="Google" />
            구글로 계속하기
          </button>
          <button className="login-button kakao">
            <img src="/kakao.png" alt="Kakao" />
            카카오톡으로 계속하기
          </button>
          <button className="login-button naver">
            <img src="/naver.png" alt="Naver" />
            네이버로 계속하기
          </button>
        </div>
      </div>
    </div>
  );
}
