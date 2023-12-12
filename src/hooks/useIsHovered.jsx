import { useState } from "react";

export const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState(false);

  const isHoveredOn = () => {
    setIsHovered(true);
  };

  const isHoveredOff = () => {
    setIsHovered(false);
  };

  return { isHovered, isHoveredOn, isHoveredOff };
};
