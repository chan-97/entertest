import { useState, useEffect } from "react";

export interface UseDisappearAnimationState {
  isDisappearAnimation: boolean;
}

interface UseDisappearAnimationUpdate {
  onDisappearAnimation: () => void;
}

export const useDisappearAnimation = (): [
  UseDisappearAnimationState,
  UseDisappearAnimationUpdate
] => {
  const [isDisappearAnimation, setIsDisappearAnimation] =
    useState<boolean>(false);

  const onDisappearAnimation = () => {
    setIsDisappearAnimation(true);
  };

  useEffect(() => {
    if (isDisappearAnimation) {
      setTimeout(() => setIsDisappearAnimation(false), 3000);
    }
  }, [isDisappearAnimation]);

  return [{ isDisappearAnimation }, { onDisappearAnimation }];
};
