import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(resourceUrl);
        setState(res.data);
      } catch (error) {
        console.error("Error fetching current user:", error);
      }
    };

    fetchData();
  }, [resourceUrl]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
