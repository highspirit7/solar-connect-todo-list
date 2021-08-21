import { useState, useEffect } from "react";

export type Itodo = {
  id: number;
  text: string;
  done: boolean;
  date: string;
};

type UseTodoTypes = {
  todoState: Itodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  createTodo: (text: string, date: string) => void;
};

let initialTodos: Itodo[] = [];

export const useTodo = (): UseTodoTypes => {
  const [todoState, setTodoState] = useState<Itodo[]>(initialTodos);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const toggleTodo = (id: number) => {
    //@TODO(완료)
    const todos = todoState.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    setTodoState(todos);
  };

  const removeTodo = (id: number) => {
    setTodoState((prevState) =>
      prevState
        .filter((todo: Itodo) => todo.id !== id)
        .map((todo: Itodo, index) => {
          todo.id = index + 1;
          return todo;
        }),
    );
  };

  const createTodo = (text: string, date: string) => {
    const nextId = todoState.length + 1;
    setTodoState((prevState) =>
      prevState.concat({
        id: nextId,
        text,
        done: false,
        date,
      }),
    );
  };

  const loadData = () => {
    const data = localStorage.getItem("todos");
    if (data) initialTodos = JSON.parse(data);
    if (initialTodos && initialTodos.length >= 1) {
      setTodoState(initialTodos);
    }
  };

  const saveData = () => {
    localStorage.setItem("todos", JSON.stringify(todoState));
  };

  return {
    todoState,
    toggleTodo,
    removeTodo,
    createTodo,
  };
};
