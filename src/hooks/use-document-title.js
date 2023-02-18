import { useEffect, useRef } from 'react';

function useDocumentTitle(title, retainOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!retainOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [],
  );
}

export default useDocumentTitle;
