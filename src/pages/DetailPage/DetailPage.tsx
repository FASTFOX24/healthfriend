import React, { useEffect } from "react";
import * as S from "./styled";
import Header from "../../components/Header/Header";
import { useParams } from "react-router";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import { database } from "../../firebase";
import { useRecoilState } from "recoil";
import { gymData } from "../../utils/globalData";
import InfoDrawer from "../../components/InfoDrawer/InfoDrawer";
type gym = {
  image: string;
  name: string;
  price: number;
  reviewCount: number;
  reviewScore: number;
  id: string;
};
const infoData: object[] = [
  {
    name: "상세정보",
    type: "drawer",
    info: { info_1: "기본정보", info_2: "요금정보", info_3: "판매자 정보" },
  },
  {
    name: "리뷰",
    type: "review",
    info: { info_1: "기본정보", info_2: "요금정보", info_3: "판매자 정보" },
  },
];
const DetailPage = () => {
  const { id } = useParams();
  const [gym, setGym] = useRecoilState<gym>(gymData);
  useEffect(() => {
    if (id) {
      const recentPostsRef = query(
        ref(database, "gyms"),
        orderByChild("id"),
        equalTo(id)
      );
      onValue(recentPostsRef, (snapshot) => {
        const [innerData]: gym[] = Object.values(snapshot.val());
        setGym(innerData);
      });
    }
  }, []);
  return (
    <S.PageContainer>
      <Header />
      <S.MainImage src={gym.image} />
      <S.ImageBox>
        <S.LeftArrow />
        <S.SubImage
          src={
            "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17c2afa93c423e94d6/2WRTSm2KSeq6RFRpBwFAaMghCkdT9UxnbWq4.photo_17.900x600.jpg"
          }
        />
        <S.SubImage
          src={
            "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17c2afa93c423e94d6/2WRTSm2KSeq6RFRpBwFAaMghCkdT9UxnbWq4.photo_17.900x600.jpg"
          }
        />
        <S.SubImage
          src={
            "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17c2afa93c423e94d6/2WRTSm2KSeq6RFRpBwFAaMghCkdT9UxnbWq4.photo_17.900x600.jpg"
          }
        />
        <S.SubImage
          src={
            "https://s3.ap-northeast-2.amazonaws.com/stone-i-dagym-centers/images/gyms/17c2afa93c423e94d6/2WRTSm2KSeq6RFRpBwFAaMghCkdT9UxnbWq4.photo_17.900x600.jpg"
          }
        />
        <S.RightArrow />
      </S.ImageBox>
      <S.InfoBox>
        <h1>5150피트니스</h1>
        <S.reviewBox>
          <S.Text className="review_score">9.8</S.Text>
          <S.Text className="review">만족해요</S.Text>
          <S.Text className="review_count">리뷰 104개</S.Text>
        </S.reviewBox>
        <S.Text className="address">경기 고양시 일산서구 중앙로 1564</S.Text>
      </S.InfoBox>
      {/* <InfoDrawer infoData={infoData} /> */}
    </S.PageContainer>
  );
};

export default DetailPage;
