"use client";

import { Trash } from "lucide-react";
import { Todo, remove } from "@/src/jotai/atom/todoAtom";
import { useSetAtom } from "jotai/react";

const TodoList = ({ todo }: { todo: Todo }) => {
  const removeTodo = useSetAtom(remove);
  return (
    <>
      <div className="border border-gray-500 w-2/3 p-2 mt-4 rounded-md">
        <p>{todo.todo}</p>
      </div>
      <Trash
        onClick={() => removeTodo(todo.id)}
        className="mt-3 ml-2 text-gray-700"
        size={32}
      />
    </>
  );
};

export default TodoList;
