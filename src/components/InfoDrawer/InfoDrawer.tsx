import React, { useState } from "react";
import * as S from "./styled";

type infoDataProps = {
    infoData: [];
};

const InfoDrawer = ({ infoData }: infoDataProps) => {
  const buttons = infoData.map(() => {
    
  });
  const changeNav = () => {};
  return (
    <S.Container>
      <S.NavBox>
        <S.NavButton>상세정보</S.NavButton>
        <S.NavButton>리뷰</S.NavButton>
      </S.NavBox>
    </S.Container>
  );
};

export default InfoDrawer;
