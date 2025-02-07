import { useCallback, useEffect } from "react";

export function useWindowPaste(onPasted: (value: string) => void) {
  const hanndlePaste = useCallback(
    (event: ClipboardEvent) => {
      const value = event.clipboardData?.getData("Text");
      value && onPasted(value);
    },
    [onPasted]
  );

  useEffect(() => {
    window.addEventListener("paste", hanndlePaste);
    return () => window.removeEventListener("paste", hanndlePaste);
  }, [hanndlePaste]);
}
