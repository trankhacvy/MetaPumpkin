import React from "react";

export function createContext(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext must be inside a Provider with a value",
    name,
  } = options;

  const Context = React.createContext(undefined);

  Context.displayName = name;

  function useContext() {
    const context = React.useContext(Context);
    if (!context && strict) throw new Error(errorMessage);

    return context;
  }

  return [Context.Provider, useContext, Context];
}
