import { useEffect, useState } from "react";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
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
    <button onClick={() => goToNext({ age: 10 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => {
  return (
    <>
      <h1>Step 3</h1>
      <p>Congratulations! You get a senior discount!</p>
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
};
const StepFour = ({ goToNext }) => {
  const [value, setValue] = useState("");
  return (
    <>
      <h1>Step 4</h1>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => goToNext({ hairColor: value })}>Next</button>
    </>
  );
};

function App() {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldShow, setShouldShow] = useState(false);

  const onNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
    console.log("yes");
  };

  useEffect(() => {
    console.log(onboardingData);
  }, [onboardingData]);
  console.log(onboardingData.age);
  return (
    <>
      <ControlledOnboardingFlow onNext={onNext} currentIndex={currentIndex}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
