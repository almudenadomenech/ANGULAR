import { Category } from "./category.model";
import { Manufacturer } from "./manufacture.model";

export interface Product {
   id: number;
   title: string;
   price: number;
   available: boolean;
   publishDate: Date;
   // Many To One
   manufacturer: Manufacturer;
   // Many To Many
   categories: Category []; 
}