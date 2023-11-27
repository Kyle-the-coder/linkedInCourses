import { useState, useEffect } from "react";

export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getResourceFunc();
      setResource(res);
    })();
  }, [getResourceFunc]);

  return resource;
};
