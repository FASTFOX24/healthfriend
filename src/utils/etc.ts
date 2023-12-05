// 주소 검색
declare global {
  interface Window {
    daum: any;
  }
}
interface IAddr {
  address: string;
  zonecode: string;
}
interface addrProps {
  docId: string;
}
export const onClickAddr: React.FC<addrProps> = ({ docId }) =>
  new window.daum.Postcode({
    oncomplete: function (data: IAddr) {
      (document.getElementById(docId) as HTMLInputElement).value = data.address;
    },
  }).open();
