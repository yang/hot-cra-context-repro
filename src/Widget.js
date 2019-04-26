import React, { useContext, createContext } from "react";

export const MyContext = createContext(0);

export function Widget() {
  const count = useContext(MyContext);
  console.log("consumed", count);
  return <div />;
}
