import { Book } from "./book.model";
import { User } from "./user.model";

export interface Rating {
  id: number;
  score: number;
  comment: string;
  createdDate: Date;
  user?: User;
  book?: Book;
}
