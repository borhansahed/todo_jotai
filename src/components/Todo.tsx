"use client";
import { Trash } from "lucide-react";
import { Todo, remove, todoId, todos, update } from "@/src/jotai/atom/todoAtom";
import { useAtomValue, useSetAtom, useAtom } from "jotai/react";
import TodoList from "./TodoList";

const Todo = () => {
  const todoArray = useAtomValue<Todo[]>(todos);
  const removeTodo = useSetAtom(remove);
  const [id, setId] = useAtom(todoId);
  const updateTodo = useSetAtom(update);
  return (
    <>
      <div className="mt-6">
        {todoArray.map((todo: Todo) => (
          <>
            <div
              onClick={() => setId(todo.id)}
              key={todo.id}
              className="flex items-center"
            >
              {id === todo.id ? (
                <>
                  <input
                    className="border border-gray-400 rounded-md w-2/3 p-3 mt-4"
                    type="text"
                    value={todo.todo}
                    onChange={(e) => updateTodo(todo.id, e.target.value)}
                  />
                  <Trash
                    onClick={() => removeTodo(todo.id)}
                    className="mt-3 ml-2 text-gray-700"
                    size={32}
                  />
                </>
              ) : (
                <>
                  <TodoList todo={todo} />
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Todo;
