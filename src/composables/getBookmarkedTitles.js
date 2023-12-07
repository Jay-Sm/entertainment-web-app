import { ref } from "vue";
import { auth, db } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

export function getBookmarked() {
  const bookmarkedTitles = ref({});

  onAuthStateChanged(auth, (user) => {
    const userBookmarkDoc = doc(db, "user_bookmarks", user.uid);

    const unsub = onSnapshot(userBookmarkDoc, (doc) => {
      const bookmarkedMovies = ref(doc.data()["bookmarked_movies"]);
      const bookmarkedSeries = ref(doc.data()["bookmarked_series"]);

      bookmarkedTitles.value = { "Movie": bookmarkedMovies.value, "TV Series": bookmarkedSeries.value };
    });
  });

  return bookmarkedTitles;
}
