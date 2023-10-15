"use client";
import Todo from "@/src/components/Todo";
import TodoInput from "@/src/components/TodoInput";
import { todoId } from "@/src/jotai/atom/todoAtom";
import { Provider as JotaiProvider } from "jotai";

export default function Home() {
  return (
    <JotaiProvider>
      <main className="px-40 my-20 ml-52">
        <TodoInput />
        <Todo />
      </main>
    </JotaiProvider>
  );
}
