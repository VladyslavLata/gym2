import { useState } from "react";

export const useIsVisibleContent = () => {
  const [visible, setVisible] = useState(false);

  const togleVisibility = () => setVisible(!visible);

  const phoneIsDisplayed = () => {
    if (visible) {
      return;
    }
    togleVisibility();
  };

  return { visible, togleVisibility, phoneIsDisplayed };
};
