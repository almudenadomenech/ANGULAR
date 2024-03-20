import { Book } from "./book.model";
import { User } from "./user.model";

export interface Reservation {
  id: number;
  startDate: Date;
  endDate: Date;
  price: number;
  // opcional
  user?: User;
  book?: Book;
}
