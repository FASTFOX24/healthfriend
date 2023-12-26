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

export const getData = async ({ url }: getDataProps) => {
  try {
    const dbRef = ref(database);
    const snapshot = await get(child(dbRef, `${url}`));
    return snapshot.val();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const postData = ({ url, data }: postDataProps) => {
  const db = database;
  set(ref(db, `${url}`), data);
};
