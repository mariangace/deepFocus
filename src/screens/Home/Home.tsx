import React, { useState } from "react";
import Layout from "../../layout";
import Counter from "../../components/Counter/Counter";
import Timer from "../../components/Timer/Timer";

function Home() {
  const [completedRounds, setCompletedRouds] = useState(0);

  return (
    <Layout>
      <Timer
        onTimerComplete={() => {
          setCompletedRouds(completedRounds + 1);
        }}
      />
      <Counter rounds={completedRounds} />
    </Layout>
  );
}

export default Home;
