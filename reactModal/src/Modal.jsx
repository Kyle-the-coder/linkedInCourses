import { useState } from "react";
import styled from "styled-components";

const ModalBG = styled.div``;

const ModalBody = styled.div``;

export const Modal = ({ children }) => {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Open</button>
      {shouldShow && (
        <ModalBG>
          <ModalBody>{children}</ModalBody>
        </ModalBG>
      )}
    </>
  );
};
