import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export async function addBookmark(titleId, titleType) {
  onAuthStateChanged(auth, (user) => {
    const userBookmarkDoc = doc(db, "user_bookmarks", user.uid);

    if (titleType === "Movie") {
      updateDoc(userBookmarkDoc, {
        bookmarked_movies: arrayUnion(titleId),
      });
    } else {
      updateDoc(userBookmarkDoc, {
        bookmarked_series: arrayUnion(titleId),
      });
    }
  });
}
