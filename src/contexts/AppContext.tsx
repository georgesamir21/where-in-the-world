import axios from 'axios';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

type Context = {
  get: <T>(path: string) => Promise<T>;
};

type Props = {
  baseURL: string;
  access_token: string;
  children: ReactNode;
};

const AppContext = createContext<Context | null>(null);

export const AppContextProvider = ({
  baseURL,
  access_token,
  children,
}: Props) => {
  //   const api = useCallback(() => axios.create({ baseURL }), [baseURL])();

  console.log('AppContext Render....');

  const api = axios.create({ baseURL });

  async function get<T>(path: string) {
    const { data } = await api.get<T>(path);
    return data;
  }

  api.interceptors.request.use((config) => {
    config.params = { ...config.params, access_key: access_token };
    return config;
  });

  return (
    <AppContext.Provider
      value={{
        get,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw Error('Error using AppContext outside AppContext Provider');
  return context;
};

export const a = 555;
