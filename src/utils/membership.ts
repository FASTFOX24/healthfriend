import * as Yup from "yup";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";

export const onSubmit: SubmitHandler<FieldValues> = ({
  identification,
  password,
}) => {
  console.log(identification);
  console.log(password);
};

// 회원가입
export const joinMembershipSchema = Yup.object({
  identification: Yup.string()
    .required("이메일(아이디)을 입력해 주세요")
    .email("email 형식을 입력해주세요"),
  password: Yup.string()
    .required("비밀번호를 입력해 주세요")
    .min(8, "비밀번호는 최소 8자리 이상입니다")
    .max(16, "비밀번호는 최대 16자리까지 입니다")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
      "영문자, 숫자, 특수문자를 조합해서 입력하세요"
    ),
  password_confirm: Yup.string().oneOf(
    [Yup.ref("password")],
    "비밀번호가 일치하지 않습니다"
  ),
});

//로그인
export const loginSchema = Yup.object({
  identification: Yup.string().required("아이디(이메일)을 입력해 주세요"),
  password: Yup.string().required("비밀번호를 입력해 주세요"),
});
