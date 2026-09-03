import { useEffect, useState } from "react";
import { subscribeToUserProgress } from "../../services/firestoreService";

export function useUserProgress(uid) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uid) return;
    const unsubscribe = subscribeToUserProgress(uid, (docData) => {
      setData(docData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [uid]);

  return { data, loading };
}