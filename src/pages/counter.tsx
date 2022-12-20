import UIPageTitle from "@components/UI/atoms/UIPageTitle";
import { UIButton } from "@components/UI/molecules/UIButton";
import React, { useState } from "react";

const CounterPage = () => {
  const [Counter, setCounter] = useState<number>(0);

  return (
    <>
      <UIPageTitle title="Counter" />
      <div className="p-5">
        <div>Current count: {Counter}</div>
        <UIButton
          label="Click me"
          size="medium"
          primary={false}
          onClick={() => setCounter(Counter + 1)}
        />
      </div>
    </>
  );
};

export default CounterPage;
