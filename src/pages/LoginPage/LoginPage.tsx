import React from "react";
import * as S from "./styled";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema, onSubmit } from "../../utils/membership";
type FormData = Yup.InferType<typeof loginSchema>;
const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  return (
    <S.Container>
      <S.LoginTitle>로그인</S.LoginTitle>
      <S.FormBox onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.TextField
            {...register("identification")}
            placeholder="아이디를 입력하세요"
          />
          <S.ErrorMessage>{errors.identification?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextField
            {...register("password")}
            placeholder="비밀번호를 입력하세요"
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.LoginBtn type="submit" value={"운동 시작하기"} />
      </S.FormBox>
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
