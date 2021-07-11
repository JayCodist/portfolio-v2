import { useEffect, useRef } from "react";

const useOutsideClick = closeComponent => {
  const componentToCloseRef = useRef();

  const handleClose = e => {
    const componentToClose = componentToCloseRef.current;
    if (!componentToClose || !componentToClose.contains(e.target)) {
      closeComponent();
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClose);
    return () => window.removeEventListener("mousedown", handleClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return componentToCloseRef;
};

export default useOutsideClick;
