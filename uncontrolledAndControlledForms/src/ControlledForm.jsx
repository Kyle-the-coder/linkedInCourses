import { useState } from "react";

export const ControlledForm = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(hairColor);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="text"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="hair color"
        onChange={(e) => setHairColor(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
