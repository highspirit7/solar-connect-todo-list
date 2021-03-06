import React, { ReactElement } from "react";
import "antd/dist/antd.css";
import Spinner from "./components/common/Spinner";
import TodoContainer from "./components/todo/TodoContainer";

function App(): ReactElement {
  //@TODO login
  // eslint-disable-next-line prefer-const
  let isLogged = true;

  const RenderLayout = (
    <div>
      <TodoContainer />
    </div>
  );

  return isLogged ? RenderLayout : <Spinner mask />;
}

export default App;
