import React from "react";
import styled from "styled-components";

import Clock from "components/common/Clock";

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.(완료)

  return (
    <TodoHeadBlock>
      <Clock />
    </TodoHeadBlock>
  );
};

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  /* padding-top: 52px;
  padding-bottom: 24px; */
  border-bottom: 3px solid #33bb77;
`;

export default React.memo(TodoHead);
