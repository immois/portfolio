import { useEffect, useState } from "react";

const useIsMobile = (md = "1000px") => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${md})`);

    const checkItIsMobile = () => {
      if (mql.matches) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    checkItIsMobile();
    mql.addListener(checkItIsMobile);

    return () => mql.removeListener(checkItIsMobile);
  }, [md]);

  return isMobile;
};

export default useIsMobile;
