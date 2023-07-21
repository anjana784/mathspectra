import { FC, useMemo } from "react";
import Axis from "../../Axis";

const R3: FC = () => {
  return (
    <>
      <Axis axis="x" color="hotpink" />
      <Axis axis="y" color="#00FF00" />
      <Axis axis="z" color="yellow" />
    </>
  );
};

export default R3;
