import React, { useState, useEffect } from "react";
import axios from "axios";

export const DataSource = ({
  getDataFunc = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataFunc();
        setState(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [getDataFunc]);

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
