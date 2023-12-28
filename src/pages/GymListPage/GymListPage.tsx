import React from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header";
import SubTitleBar from "../../components/SubTitlebar/SubTitlebar";

const GymListPage = () => {
  return (
    <S.PageContainer>
      <Header />
      <SubTitleBar title={"헬스장 / 피트니스 센터"} button={true} />
    </S.PageContainer>
  );
};

export default GymListPage;
