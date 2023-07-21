import { FC, useMemo } from "react";
import Axis from "../../Axis";

const R3: FC = () => {
  return (
    <>
      <Axis axis="x" color="#FF0000" />
      <Axis axis="y" color="#00FF00" />
      <Axis axis="z" color="#0000FF" />
    </>
  );
};

export default R3;
