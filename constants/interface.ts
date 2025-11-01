export interface cabinInterface {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
}

export interface bookingInterface {
  id: string;
  guestId: number;
  startDate: string;
  endDate: string;
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string;
  created_at: string;
  cabins: { name: string; image: string };
}
