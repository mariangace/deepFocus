import React from "react";

interface CounterProps {
  rounds: number;
}
function Counter({ rounds }: CounterProps) {
  return (
    <div>
      <h2>Completed Rounds: {rounds}</h2>
    </div>
  );
}

export default Counter;
