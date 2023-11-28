import { redirect } from "react-router-dom";

import { Button } from "./componsition";

export const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const DangerButton2 = partiallyApply(Button, { color: "red" });
export const SuccessButton2 = partiallyApply(Button, {
  color: "green",
  size: "large",
});
