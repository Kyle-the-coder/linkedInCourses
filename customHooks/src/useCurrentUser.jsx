import { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "./App";

export const useCurrentUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get(`${addy}/current-user`);
      setUser(res.data);
    })();
  }, []);

  return user;
};
