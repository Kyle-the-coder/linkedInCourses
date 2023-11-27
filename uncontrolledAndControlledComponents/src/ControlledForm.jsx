import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [nameError, setNameError] = useState("");
  const [isNameErr, setIsNameErr] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setNameError("name must be at least 2 chars");
      setIsNameErr(true);
    } else if (name.length >= 2) {
      setIsNameErr(false);
      setNameError("");
    }
  }, [name, age, hairColor]);

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
      {isNameErr && <p>{nameError}</p>}
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
      <button>Submit</button>
    </form>
  );
};
