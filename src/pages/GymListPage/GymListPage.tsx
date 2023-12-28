import React from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header";
import SubTitleBar from "../../components/SubTitlebar/SubTitlebar";
import SelectBox from "../../components/SelectBox/SelectBox";

const GymListPage = () => {
  return (
    <S.PageContainer>
      <Header />
      <SubTitleBar title={"헬스장 / 피트니스 센터"} button={true} />
      <S.ButtonBox>
        <SelectBox />
        {/* <SingleButton buttonName={"지도보기"} action={}/> */}
      </S.ButtonBox>
    </S.PageContainer>
  );
};

export default GymListPage;
