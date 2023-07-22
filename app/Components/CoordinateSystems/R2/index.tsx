import { FC } from "react";
import Axis from "../../Axis";
import { PerspectiveCamera } from "@react-three/drei";

const R2: FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <Axis axis="x" color="#FF0000" />
      <Axis axis="y" color="#00FF00" />
    </>
  );
};

export default R2;
