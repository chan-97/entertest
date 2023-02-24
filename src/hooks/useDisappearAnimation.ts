import { useState } from "react";

export interface UseDisappearAnimationState {
  isDisappearAnimation: boolean;
}

export interface UseDisappearAnimationUpdate {
  onDisappearAnimation: () => void;
  offDisappearAnimation: () => void;
}

export const useDisappearAnimation = (): [
  UseDisappearAnimationState,
  UseDisappearAnimationUpdate
] => {
  const [isDisappearAnimation, setIsDisappearAnimation] =
    useState<boolean>(false);

  const onDisappearAnimation = () => setIsDisappearAnimation(true);

  const offDisappearAnimation = () => setIsDisappearAnimation(false);

  return [
    { isDisappearAnimation },
    { onDisappearAnimation, offDisappearAnimation }
  ];
};
