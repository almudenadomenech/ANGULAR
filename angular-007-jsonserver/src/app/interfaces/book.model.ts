export interface Book {

id: number;
title: string;
sinopsis: string;
release: Date;
numPages: number;
photo: string;
price: number;
// Asociaciones con otras interfaces:
authorId: number; // Relación Many To One
categories: number[]; // Many To Many
}