import { State, Ticks } from "../types/types";

export interface RequestBody extends State {
    ticks: Ticks[]
}