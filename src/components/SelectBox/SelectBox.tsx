import React, { useState } from "react";
import * as S from "./styled";
const SelectBox = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(isOpen);
  return (
    <S.SelectBoxContainer
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <S.SelectedText>낮은 가격순</S.SelectedText>
      {isOpen ? <S.ArrowUp /> : <S.ArrowDown />}
    </S.SelectBoxContainer>
  );
};

export default SelectBox;
