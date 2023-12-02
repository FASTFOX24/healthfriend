import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;
export const PageTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 64px;
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
export const TextArea = styled.input`
  height: 12px;
  padding: 12px;
  margin-bottom: 36px;
  &.checkBtn {
    width: 170px;
    padding-right: 72px;
  }
  &.inbisible {
    width: 194px;
    padding-right: 48px;
  }
`;
export const JoinBtn = styled.button`
  background-color: #ff6300;
  color: white;
  border-radius: 99px;
  width: 256px;
  height: 36px;
`;
export const LoginBox = styled.div`
  display: flex;
  margin-top: 48px;
`;
export const LoginText = styled.span`
  font-size: 12px;
  color: #828282;
  margin-right: 8px;
`;
export const LoginBtn = styled.a`
  font-size: 12px;
  text-decoration: underline;
  text-underline-offset: 2px;
`;
