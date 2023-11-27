import { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "../App";

export const useDataSource = (getResourceFunc) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getResourceFunc;
      setResource(res);
    })();
  }, [getResourceFunc]);

  return resource;
};
