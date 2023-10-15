import { Todo } from "./atom/todoAtom";

export const addToTodo = (todos: Todo[], newTodo: string): Todo[] => [
  ...todos,
  {
    id: Math.ceil(((Math.random() * 10) % 100) * 20),
    todo: newTodo,
    done: false,
  },
];

export const removeTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};
export const updateTodo = (
  todos: Todo[],
  id: number,
  newTodo: string
): Todo[] => {
  return todos.map((todo) => ({
    ...todo,
    todo: todo.id === id ? newTodo : todo.todo,
  }));
};
