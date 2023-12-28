import { atom } from "recoil";

//static data
export const navBarList = [
  { btnName: "홈", path: "/" },
  { btnName: "운동시설 보기", path: "/list_gym" },
  { btnName: "이용권 구매 내역", path: "/list_ticket" },
  {
    btnName: "더 보기",
    list: [
      { btnName: "마이프로필", path: "/profile" },
      { btnName: "이벤트", path: "/event" },
      { btnName: "커뮤니티", path: "/comunity" },
    ],
  },
];

//recoil data
export const userData = atom({
  key: "userData",
  default: {
    address: "",
    displayName: "",
    email: "",
    password: "",
    point: 0,
    coupon: {},
  },
});
