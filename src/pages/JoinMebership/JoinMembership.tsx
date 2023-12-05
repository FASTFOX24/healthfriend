import React, { useState } from "react";
import * as S from "./styled";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import { joinMembershipSchema } from "../../utils/membership";
import { useNavigate } from "react-router";

type FormData = Yup.InferType<typeof joinMembershipSchema>;

const JoinMembership = () => {
  const [visibleState, setVisibleState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(joinMembershipSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = ({
    identification,
    password,
  }) => {
    console.log(identification);
    console.log(password);
  };
  const navigate = useNavigate();
  const changeVisible = () => {
    setVisibleState(!visibleState);
  };
  return (
    <S.Container>
      <S.PageTitle>회원가입</S.PageTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.TextArea
            {...register("identification")}
            className="checkBtn"
            placeholder="아이디를 입력하세요"
          />
          {errors.identification && (
            <S.ErrorMessage>{errors.identification?.message}</S.ErrorMessage>
          )}
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea className="checkBtn" placeholder="닉네임을 입력하세요" />
          <S.doubleCheckBtn>중복 확인</S.doubleCheckBtn>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...register("password")}
            type="password"
            className="inbisible"
            placeholder="비밀번호를 입력하세요"
          />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea
            {...register("password_confirm")}
            type={visibleState ? "" : "password"}
            className="inbisible"
            placeholder="비밀번호 확인"
          />
          <S.IconBtn onClick={changeVisible}>
            {visibleState ? <S.InvisibleIcon /> : <S.VisibleIcon />}
          </S.IconBtn>
          <S.ErrorMessage>{errors.password_confirm?.message}</S.ErrorMessage>
        </S.InputContainer>
        <S.InputContainer>
          <S.TextArea className="checkBtn" placeholder="주소를 입력하세요" />
          <S.doubleCheckBtn>주소 찾기</S.doubleCheckBtn>
          <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
        </S.InputContainer>
        <S.JoinBtn type="submit" value={"등록 완료하기"} />
      </form>
      <S.LoginBox>
        <S.LoginText>이미 계정이 있으신가요?</S.LoginText>
        <S.LoginBtn
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          로그인 하러가기
        </S.LoginBtn>
      </S.LoginBox>
    </S.Container>
  );
};

export default JoinMembership;
