import React from "react";
import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router";

interface BtnProps {
  btnName: string;
  list: { btnName: string; path: string }[];
}

const NestedList: React.FC<BtnProps> = ({ btnName, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const navList = list.map((btn) => {
    return (
      <S.NavBtn_2
        key={`navBtn_${btn.btnName}`}
        onClick={() => {
          navigate(btn.path);
        }}
      >
        {btn.btnName}
      </S.NavBtn_2>
    );
  });
  return (
    <S.Container>
      <S.NestedList
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <S.btnTitle>{btnName}</S.btnTitle>
        {isOpen ? <S.ArrowUpIcon /> : <S.ArrowDownIcon />}
      </S.NestedList>
      {isOpen ? navList : <></>}
    </S.Container>
  );
};

export default NestedList;
