import React from "react";
import * as S from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router";
import { push, ref } from "firebase/database";
import uuid from "react-uuid";
import { database } from "../../firebase";

interface BtnProps {
  btnName: string;
  list: { btnName: string; path: string }[];
}

const NestedList: React.FC<BtnProps> = ({ btnName, list }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const pushData = () => {
    const gymsRef = ref(database, "gyms");
    push(gymsRef, {
      image:
        "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17c2afa93c423e94d6/2ZvFyLPufDjjDWQKbgwJKjN75CSe5YWJWj4e.photo_25.900x600.jpg",
      name: "5150피트니스",
      price: 120000,
      reviewCount: 104,
      reviewScore: 9.8,
      id: uuid(),
    });
  };
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
      {isOpen && navList}
      <button onClick={pushData}>push data</button>
      
    </S.Container>
  );
};

export default NestedList;
