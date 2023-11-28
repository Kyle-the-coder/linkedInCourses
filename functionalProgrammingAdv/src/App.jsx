import { BigSuccessButton, DangerButton } from "./componsition";
import { DangerButton2, SuccessButton2 } from "./partiallyApply";
import { RecursiveComponent } from "./RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <>
      <DangerButton2 text="stop!" />
      <SuccessButton2 text="success!" />
    </>
  );
}

export default App;
