import { createContext, useState } from "react";
import { RootContext } from "../constant/types";
import React from "react";

export const initialContext = {
  flights: [],
  filteredFlights: new Map(),
  errors: {},
  isLoading: false,
  appliedFilter: {},
};

export const AppContext = createContext<{
  rootState: RootContext;
  setRootStateHandler: (data: RootContext) => any;
}>({
  rootState: initialContext,
  setRootStateHandler: () => { },
});

export const AppContextProvider = (props: any) => {
  const [rootState, setRootState] = useState<RootContext>(initialContext);

  const setRootStateHandler = (data: RootContext) => {
    setRootState(data);
  };

  return (
    <AppContext.Provider
      value={{
        rootState,
        setRootStateHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
