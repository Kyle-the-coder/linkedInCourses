import React, { useState } from "react";

export const UncontrolledOnboardingFlow = ({ children, onFinish }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentChild = React.Children.toArray(children)[currentIndex];
  return <>{currentChild}</>;
};
