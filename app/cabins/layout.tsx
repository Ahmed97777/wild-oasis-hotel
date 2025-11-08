import { ReactNode } from "react";
import { ReservationProvider } from "../_components/ReservationContext";

export default function CabinsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ReservationProvider>{children}</ReservationProvider>
    </div>
  );
}
