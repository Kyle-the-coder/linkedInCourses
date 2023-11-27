import React from "react";

export const ControlledOnboardingFlow = ({
  onNext,
  currentIndex,
  children,
  onFinish,
}) => {
  const goToNext = (stepData) => {
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }
  return currentChild;
};
