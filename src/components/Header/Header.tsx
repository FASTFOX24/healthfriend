import React from "react";
import * as S from "./style";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import { auth } from "../../firebase";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  console.log(auth.currentUser?.uid)
  return (
    <S.HeaderContainer $isOpen={isOpen}>
      <S.HeaderBody>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={"black"}
          size={20}
        />
        <S.TitleBtn
          onClick={() => {
            navigate("/");
          }}
        >
          Health Friend
        </S.TitleBtn>
        <S.SearchBtn>
          <S.SearchIcon />
        </S.SearchBtn>
      </S.HeaderBody>
      <NavBar isOpen={isOpen} />
    </S.HeaderContainer>
  );
};
export default Header;
