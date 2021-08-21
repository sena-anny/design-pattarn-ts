import {IteratorInter} from "./Iterator";

export interface Aggregate {
    iterator(): IteratorInter;
}
