import { atom } from "jotai";
import { addToTodo, removeTodo, updateTodo } from "../todo";

export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}
export const newTodo = atom<string>("");
export const todos = atom<Todo[]>([]);
export const todoId = atom<number>(0);

export const addTodo = atom(
  null,

  (get, set) => {
    set(todos, addToTodo(get(todos), get(newTodo)));
    set(newTodo, "");
  }
);
export const remove = atom(
  null,

  (get, set, id: number) => {
    set(todos, removeTodo(get(todos), id));
  }
);
export const update = atom(
  null,

  (get, set, id: number, newTodo: string) => {
    set(todos, updateTodo(get(todos), id, newTodo));
  }
);
