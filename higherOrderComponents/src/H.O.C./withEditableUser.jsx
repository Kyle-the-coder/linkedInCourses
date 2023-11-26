import React, { useState, useEffect } from "react";
import axios from "axios";
import { addy } from "../App";

export const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await axios.get(`${addy}/users/${userId}`);
        setOriginalUser(res.data);
        setUser(res.data);
      })();
    }, []);

    const onChangeUser = (changes) => {
      setUser({ ...user, ...changes });
      console.log(user);
    };

    const onSaveUser = async () => {
      try {
        const res = await axios.post(`${addy}/users/${userId}`, { user });
        setOriginalUser(res.data);
        setUser(res.data);
      } catch (error) {
        console.error("Error saving user:", error);
      }
    };

    const onResetUser = async () => {
      // const res = axios.post(`${addy}/users/${userId}`, {originalUser})
      setUser(originalUser);
    };

    return (
      <Component
        {...props}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };
};
