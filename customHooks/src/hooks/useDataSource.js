import { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "../App";

export const useDataSource = (resourceName, resourceId) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${addy}/${resourceName}/${resourceId}`);
      setResource(res.data);
    })();
  }, [resourceName, resourceId]);

  return resource;
};
