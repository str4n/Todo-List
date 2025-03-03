import {createContext} from "react";
import {TodoContextType} from "./TodoContextType.ts";

export const TodoContext = createContext<TodoContextType | undefined>(undefined);