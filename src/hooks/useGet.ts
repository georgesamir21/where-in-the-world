import { useCallback, useRef, useState, useEffect } from 'react';
import { useAppContext } from '../contexts/AppContext';

export const useGet = <T>(path: string) => {
  const appContext = useRef(useAppContext());
  const [data, setData] = useState<null | T>(null);
  const get = useCallback(async () => {
    const data = await appContext.current.get<T>(path);
    if (!data) return;
    setData(data);
  }, [path]);

  useEffect(() => {
    get();
  }, [get]);
  return data;
};
