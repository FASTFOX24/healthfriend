import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header";
import SubTitleBar from "../../components/SubTitlebar/SubTitlebar";
import SelectBox from "../../components/SelectBox/SelectBox";
import { gymSortList } from "../../utils/globalData";
import SingleButton from "../../components/SingleButton/SingleButton";
import ItemCard from "../../components/ItemCard/ItemCard";
import Pagination from "../../components/Pagination/Pagination";
import { database } from "../../firebase";
import { onValue, ref } from "firebase/database";
type gyms = {
  image: string;
  name: string;
  price: number;
  reviewCount: number;
  reviewScore: number;
  id: string;
};
const kakao = (window as any).kakao;
const db = database;
const GymListPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const [gymList, setGymList] = useState<gyms[]>([]);
  const [page, setPage] = useState<number>(1);
  console.log(page);
  const [currentPage, setCurrentPage] = useState<number>(
    Number(urlParams.get("page")) || 1
  );
  const gymListCards = gymList.map((gymData, idx) => {
    return <ItemCard key={`gymCard_${idx}`} gymData={gymData} />;
  });
  useEffect(() => {
    // const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스 호출에서 지정
    // const options = {
    //   //지도를 생성할 때 필요한 기본 옵션
    //   center: new kakao.maps.LatLng(37.55699327194725, 126.97267350572926), //지도의 중심좌표
    //   level: 10, //지도의 레벨(확대, 축소 정도)
    // };
    // new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    const gymsRef = ref(db, "gyms");
    onValue(gymsRef, (snapshot) => {
      const data = snapshot.val();
      setPage(Math.ceil(Object.values(data).length / 24));
      const gymsArray: gyms[] = (Object.values(data) as gyms[]).slice(
        (currentPage - 1) * 24,
        currentPage * 24
      );
      setGymList([...gymsArray]);
    });
  }, [currentPage]);
  return (
    <S.PageContainer>
      <Header />
      <SubTitleBar title={"헬스장 / 피트니스 센터"} button={true} />
      <S.ContentsBox>
        <S.ButtonBox>
          <SelectBox sortList={gymSortList} />
          <SingleButton buttonName={"지도 보기"} />
        </S.ButtonBox>
        {/* <S.Map id="map" /> */}
        <S.GymList>{gymListCards}</S.GymList>
        <Pagination
          currentPage={currentPage}
          page={page}
          setCurrentPage={setCurrentPage}
        />
      </S.ContentsBox>
    </S.PageContainer>
  );
};

export default GymListPage;
