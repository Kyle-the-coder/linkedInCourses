import { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "../App";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${addy}/users/${userId}`);
      setUser(res.data);
    })();
  }, [userId]);

  return user;
};
