import { useState, useEffect } from 'react';

function useFocusTrap(
  elementRef: React.RefObject<HTMLElement>,
  dependencies: Array<any> = [],
): (e: React.KeyboardEvent) => void {
  const [focusableElements, setFocusableElements] = useState<
    NodeListOf<Element>
  >();

  function handleTab(e: React.KeyboardEvent, backward?: boolean) {
    if (focusableElements) {
      const [firstElement] = focusableElements;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      if (backward) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
          return;
        }

        return;
      }

      if (document.activeElement === lastElement) {
        e.preventDefault();
        (firstElement as HTMLElement).focus();
        return;
      }
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Tab') {
      if (focusableElements?.length === 1) {
        e.preventDefault();
      }

      if (e.shiftKey) {
        return handleTab(e, true);
      }

      return handleTab(e);
    }
  }

  useEffect(() => {
    if (elementRef.current) {
      const queriedFocusableElements = elementRef.current.querySelectorAll(
        `a[href],
         area[href],
         input:not([disabled]),
         select:not([disabled]),
         textarea:not([disabled]),
         button:not([disabled]),
         [tabindex="0"]`,
      );

      (queriedFocusableElements[0] as HTMLElement).focus();

      setFocusableElements(queriedFocusableElements);
    }
  }, dependencies);

  return handleKeyDown;
}

export default useFocusTrap;
