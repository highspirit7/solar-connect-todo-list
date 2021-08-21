import { useState, useEffect } from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export type TodoType = {
  id: number;
  text: string;
  done: boolean;
  date: string;
};

type UseTodoTypes = {
  todoState: TodoType[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  createTodo: (text: string, date: string) => void;
};

let initialTodos: TodoType[] = [];

export const useTodo = (): UseTodoTypes => {
  const [todoState, setTodoState] = useState<TodoType[]>(initialTodos);

  const { confirm } = Modal;

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
    confirm({
      title: "이 투두 아이템을 삭제하시겠습니까?",
      // eslint-disable-next-line react/react-in-jsx-scope
      icon: <ExclamationCircleOutlined />,
      content: "이미 완료한 아이템이 아닐 수도 있습니다.",
      onOk() {
        setTodoState((prevState) =>
          prevState
            .filter((todo: TodoType) => todo.id !== id)
            .map((todo: TodoType, index) => {
              todo.id = index + 1;
              return todo;
            }),
        );
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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
