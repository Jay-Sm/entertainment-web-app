import { ref, toRaw } from "vue";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getBookmarked(user) {
  const userBookmarkDoc = doc(db, "user_bookmarks", user.uid);
  const docSnap = await getDoc(userBookmarkDoc);

  return docSnap.data()
}
