"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai/react";
import { addTodo, newTodo } from "../jotai/atom/todoAtom";
const TodoInput = () => {
  const [todo, setTodo] = useAtom(newTodo);
  const newAddTodo = useSetAtom(addTodo);
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold w-52 text-gray-700">Todo List</h1>
        <input
          className="border border-gray-400 rounded-md w-2/3 p-3 mt-4"
          type="text"
          placeholder="add you todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={newAddTodo}
          className="border border-gray-400 bg-gray-700 text-white px-4 ml-3 py-2 rounded font-bold text-xl"
        >
          Add
        </button>
      </main>
    </>
  );
};

export default TodoInput;
