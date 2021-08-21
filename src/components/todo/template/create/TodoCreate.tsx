import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import moment from "moment";
interface TodoCreateProps {
  createTodo: (text: string, date: string) => void;
}

const TodoCreate = ({ createTodo }: TodoCreateProps) => {
  const [value, setValue] = useState("");
  const [dateString, setDateString] = useState("");
  const [dateMoment, setDateMoment] = useState<any>(null);

  const formRef = React.useRef<HTMLFormElement>(null);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    createTodo(value, dateString);

    setValue(""); // input 초기화
    setDateString(""); // dateString 초기화
    setDateMoment(null); // DatePicker 컴포넌트 value 초기화
  };

  const handleChangeDate = (date: moment.Moment | null, dateString: string) => {
    setDateString(dateString);
    setDateMoment(date);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit} ref={formRef}>
          <DateWrapper>
            <DatePicker
              onChange={handleChangeDate}
              size="large"
              id="date"
              name="date"
              value={dateMoment}
            />
          </DateWrapper>

          <InputWrapper>
            <Input
              autoFocus
              placeholder="What's need to be done?"
              onChange={handleChangeInput}
              value={value}
              id="input"
              name="input"
            />
            <CircleButton>
              <PlusCircleOutlined />
            </CircleButton>
          </InputWrapper>
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
};

const DateWrapper = styled.div`
  width: 400px;
  display: flex;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CircleButton = styled.button`
  background: #33bb77;
  width: 40px;
  height: 40px;
  font-size: 42px;
  left: 100%;
  transform: translate(100%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #dddddd;
  width: 100%;
  outline: none;
  font-size: 20px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

export default React.memo(TodoCreate);
