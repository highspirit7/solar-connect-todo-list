import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";

import twoDigitsForClock from "utils/twoDigitsForClock";

function Clock(): ReactElement {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    function clock(): void {
      const time = new Date();

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      setTime(
        `${twoDigitsForClock(hours)}:${twoDigitsForClock(
          minutes,
        )}:${twoDigitsForClock(seconds)}`,
      );

      setDate(time.toLocaleDateString("ko-KR", options));
    }

    const tickingClock = setInterval(clock, 1000);

    return () => {
      clearInterval(tickingClock);
    };
  }, []);

  return (
    <StyledClock>
      <div>{date}</div>
      <div>{time}</div>
    </StyledClock>
  );
}

const StyledClock = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 1rem 0.5rem;
  text-align: center;
  /* border: 2px dotted #33bb77; */
  color: #33bb77;
  font-size: 2rem;

  & > div:first-child {
    font-size: 1.25rem;
    margin-bottom: 6px;
  }
`;

export default Clock;
