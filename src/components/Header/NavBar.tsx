import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router";
import NestedList from "./NestedList";

interface NavBarProps {
  isOpen: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isOpen }) => {
  const NavBarList = [
    { btnName: "홈", path: "/" },
    { btnName: "운동시설 보기", path: "/list_gym" },
    { btnName: "이용권 구매 내역", path: "/list_ticket" },
    {
      btnName: "더 보기",
      list: [
        { btnName: "마이프로필", path: "/profile" },
        { btnName: "이벤트", path: "/event" },
        { btnName: "커뮤니티", path: "/comunity" },
      ],
    },
  ];
  const navigate = useNavigate();
  const list = NavBarList.map((btn) => {
    if (btn.list) {
      return (
        <NestedList
          key={`navBtns_${btn.btnName}`}
          btnName={btn.btnName}
          list={btn.list}
        />
      );
    } else {
      return (
        <S.NavBtn_1
          key={`navBtn_${btn.btnName}`}
          onClick={() => {
            navigate(btn.path);
          }}
        >
          {btn.btnName}
        </S.NavBtn_1>
      );
    }
  });
  return (
    <S.NavBar $isOpen={isOpen}>
      <S.LoginBox>
        <S.TextBox_1>
          로그인 후 이용하시면 <br />
          할인 쿠폰과 추가 혜택을 받을 수 있어요.
        </S.TextBox_1>
        <S.LoginBtn
          onClick={() => {
            navigate("/auth/login");
          }}
        >
          로그인
        </S.LoginBtn>
      </S.LoginBox>
      <S.CouponBox>
        <S.TextBox_2>
          -<br />
          포인트
        </S.TextBox_2>
        <S.Divider />
        <S.TextBox_2>
          -<br />
          할인쿠폰
        </S.TextBox_2>
      </S.CouponBox>
      {list}
    </S.NavBar>
  );
};

export default NavBar;
