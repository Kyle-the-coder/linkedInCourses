import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledModal } from "./UncontrolledModal";

function App() {
  const [shouldShow, setShouldShow] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => {
          alert("Are you sure?");
          setShouldShow(false);
        }}
      >
        <h1>Hello from Modal!</h1>
      </ControlledModal>
      <button onClick={() => setShouldShow(!shouldShow)}>
        {shouldShow ? "Hide Modal" : "Show Modal"}
      </button>
    </>
  );
}

export default App;
