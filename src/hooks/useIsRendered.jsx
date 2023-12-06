import { useEffect, useState } from "react";

export const useIsRendered = () => {
  const [isRendered, setisRendered] = useState(false);

  useEffect(() => setisRendered(true), []);
  return { isRendered };
};
