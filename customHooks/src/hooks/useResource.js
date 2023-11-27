import { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "../App";

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(resourceUrl);
      setResource(res.data);
    })();
  }, [resourceUrl]);

  return resource;
};
