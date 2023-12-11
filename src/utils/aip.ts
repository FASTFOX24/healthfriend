import { database } from "../firebase";
import { ref, set } from "firebase/database";
import { child, get } from "firebase/database";

interface getDataProps {
  url: string;
}
interface postDataProps {
  url: string;
  data: object;
}

export const getData = ({ url }: getDataProps)=> {
  const dbRef = ref(database);
  get(child(dbRef, `${url}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
export const postData = ({ url, data }: postDataProps) => {
  const db = database;
  set(ref(db, `${url}`), data);
};
