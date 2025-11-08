"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type ReservationRange = { from: Date | undefined; to: Date | undefined };

type ReservationContextType = {
  range: ReservationRange;
  setRange: React.Dispatch<React.SetStateAction<ReservationRange>>;
  resetRange: () => void;
};

const initialState: ReservationRange = { from: undefined, to: undefined };

const ReservationContext = createContext<ReservationContextType>({
  range: initialState,
  setRange: () => {},
  resetRange: () => {},
});

function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => {
    setRange(initialState);
  };
  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {" "}
      {children}{" "}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context was used outside its provider");
  return context;
}

export { ReservationProvider, useReservationContext };
