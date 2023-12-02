import React from "react";
import * as S from "./styled";
import { useNavigate } from "react-router";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.TextField placeholder="아이디를 입력하세요" />
      <S.TextField placeholder="비밀번호를 입력하세요" />
      <S.LoginBtn>운동 시작하기</S.LoginBtn>
      <S.DividerBox>
        <S.Divider></S.Divider>
        <S.DividerText>또는</S.DividerText>
        <S.Divider></S.Divider>
      </S.DividerBox>
      <S.OauthBox>
        <S.KakaoAuth>
          <S.KakaoIcon />
          Kakao
        </S.KakaoAuth>
        <S.GoogleAuth>
          <S.GoogleIcon />
          Google
        </S.GoogleAuth>
      </S.OauthBox>
      <S.JMBox>
        <S.Text_1>계정이 없으신가요?</S.Text_1>
        <S.JMBtn
          onClick={() => {
            navigate("/auth/join_membership");
          }}
        >
          회원가입 하러가기
        </S.JMBtn>
      </S.JMBox>
    </S.Container>
  );
};

export default LoginPage;
