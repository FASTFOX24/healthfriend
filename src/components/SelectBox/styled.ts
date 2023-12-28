import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const SelectBoxContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d1d1d1;
  border-radius: 99px;
  padding: 8px 12px 8px 20px;
`;
export const SelectedText = styled.span`
  margin-right: 4px;
`;
export const ArrowDown = styled(IoIosArrowDown)`
  transform: rotate(180deg);
  font-size: 16px;
`;
export const ArrowUp = styled(IoIosArrowDown)`
  font-size: 16px;
`;
