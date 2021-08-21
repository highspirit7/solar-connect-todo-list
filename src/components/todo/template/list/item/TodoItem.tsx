/* eslint-disable @typescript-eslint/no-empty-function */
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { TodoType } from "components/todo/TodoService";
import React from "react";
import styled, { css } from "styled-components";

interface ITodoItemProps {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  todo: TodoType;
}

const TodoItem = ({ toggleTodo, removeTodo, todo }: ITodoItemProps) => {
  const { id, text, done, date } = todo;

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => toggleTodo(id)}>
        {done && <CheckOutlined />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Date done={done}>{date}</Date>
      <Remove onClick={() => removeTodo(id)}>
        <DeleteOutlined />
      </Remove>
    </TodoItemBlock>
  );
};

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #119955;
  font-size: 16px;
  cursor: pointer;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div<{ done: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 16px;
  border: 1px solid #33bb77;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #dddddd;
      color: #dddddd;
    `}
`;

const Text = styled.div<{ done: boolean }>`
  flex: 1;
  font-size: 16px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Date = styled.div<{ done: boolean }>`
  margin-right: 16px;
  font-size: 14px;
  color: #119955;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

export default React.memo(TodoItem);
