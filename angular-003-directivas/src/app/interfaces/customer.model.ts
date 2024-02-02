
export interface Customer{
    id: number;
    nif: string;
    firstName: string;
    email: string;
    birthday: Date;
    active: boolean;
    salary?: number; // la interrogación significa opcional

}