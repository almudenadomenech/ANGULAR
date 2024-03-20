import { Author } from "./author.model";
import { Category } from "./category.model";
import { Editorial } from "./editorial.model";

export interface Book {
  id: number;
  title: string;
  isbn: string;
  numPages: number;
  createdDate: Date;
  updateDate: Date;
  published: boolean;
  price: number;
  author: Author;
  editorial: Editorial;
  categories: Category[];
}
