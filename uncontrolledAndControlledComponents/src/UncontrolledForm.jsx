import { useRef } from "react";

export const UncontrolledForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const hairColorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(ageRef.current.value);
    console.log(hairColorRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} name="name" type="text" placeholder="name" />
      <input ref={ageRef} name="age" type="text" placeholder="age" />
      <input
        ref={hairColorRef}
        name="hairColor"
        type="text"
        placeholder="hair color"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
