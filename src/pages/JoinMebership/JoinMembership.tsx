import React from "react";
import * as S from "./styled";
const JoinMembership = () => {
  return (
    <S.Container>
      <S.PageTitle>회원가입</S.PageTitle>
      <S.TextArea
        className="checkBtn"
        placeholder="아이디를 입력하세요"
      ></S.TextArea>
      <S.TextArea
        type="password"
        className="inbisible"
        placeholder="비밀번호를 입력하세요"
      ></S.TextArea>
      <S.TextArea
        type="password"
        className="inbisible"
        placeholder="비밀번호 확인"
      ></S.TextArea>
      <S.TextArea
        className="checkBtn"
        placeholder="닉네임을 입력하세요"
      ></S.TextArea>
      <S.TextArea
        className="checkBtn"
        placeholder="주소를 입력하세요"
      ></S.TextArea>
      <S.JoinBtn>등록 완료하기</S.JoinBtn>
      <S.LoginBox>
        <S.LoginText>이미 계정이 있으신가요?</S.LoginText>
        <S.LoginBtn>로그인 하러가기</S.LoginBtn>
      </S.LoginBox>
    </S.Container>
  );
};

export default JoinMembership;
