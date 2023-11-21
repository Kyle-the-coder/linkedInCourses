import { useRef } from "react";

export const UncontrolledForm = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const hairRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} name="name" type="text" placeholder="name" />
      <input ref={ageRef} name="age" type="text" placeholder="age" />
      <input
        ref={hairRef}
        name="hairColor"
        type="text"
        placeholder="hair color"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
