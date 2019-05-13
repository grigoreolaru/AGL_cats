import { Pet } from "./Pets";

export interface Owner {
    name: string;
    gender: string; // Male, Female
    age: number;
    pets?: Pet[];
}
