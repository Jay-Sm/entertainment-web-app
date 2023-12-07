import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export async function removeBookmark(titleId, titleType) {
  onAuthStateChanged(auth, (user) => {
    const userBookmarkDoc = doc(db, "user_bookmarks", user.uid);

    if (titleType === "Movie") {
      updateDoc(userBookmarkDoc, {
        bookmarked_movies: arrayRemove(titleId),
      });
    } else {
      updateDoc(userBookmarkDoc, {
        bookmarked_series: arrayRemove(titleId),
      });
    }
  });
}
