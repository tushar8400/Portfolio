import { useEffect, useState } from "react";

// Loads a list from the API. Shows `fallback` immediately and keeps it
// if the request fails or returns an empty list, so the page never looks broken.
export default function useRemote(fetcher, fallback) {
  const [data, setData] = useState(fallback);

  useEffect(() => {
    let alive = true;
    fetcher()
      .then((result) => {
        if (alive && Array.isArray(result) && result.length > 0) setData(result);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
}
