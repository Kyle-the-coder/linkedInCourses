import React, { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "../App";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await axios.get(`${addy}/users/${userId}`);
        setUser(res.data);
      })();
    });

    return <Component {...props} user={user} />;
  };
};
