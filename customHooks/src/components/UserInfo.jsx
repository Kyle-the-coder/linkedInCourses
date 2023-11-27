import { addy } from "../App";
import axios from "axios";
import { useDataSource } from "../hooks/useDataSource";

export const UserInfo = ({ userId }) => {
  const user = useDataSource(async () => {
    const res = await axios.get(`${addy}/users/${userId}`);
    console.log(res.data);
    return res.data;
  });
  const { name, age, hairColor, hobbies } = user || {};
  console.log(user);
  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};
