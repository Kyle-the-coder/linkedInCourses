import { useState } from "react";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: "green" }}>Left!</h1>;
};
const RightHandComponent = () => {
  return <p style={{ backgroundColor: "purple" }}>right!</p>;
};

function App() {
  return (
    <>
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={3}
      />
    </>
  );
}

export default App;
