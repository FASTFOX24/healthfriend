import React from "react";
import styled from "styled-components";

interface ButtonProps {
  buttonName: string;
  action: any;
}
const SingleButton = ({ buttonName, action }: ButtonProps) => {
  return (
    <ButtonContainer onClick={action}>
      <ButtonName>{buttonName}</ButtonName>
    </ButtonContainer>
  );
};

export default SingleButton;

const ButtonContainer = styled.button`
  border: 2px solid #d1d1d1;`;
const ButtonName = styled.span``;
