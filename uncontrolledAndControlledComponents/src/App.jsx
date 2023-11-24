import { useState } from "react";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>

    <button onClick={() => goToNext({ name: "Kyle Yurok" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: "32" })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <h1>Step 3</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => goToNext({ hairColor: value })}>Next</button>
    </>
  );
};

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          alert("complete!");
          console.log(data);
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default App;
