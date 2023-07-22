import { FC, useEffect, useMemo } from "react";
import Axis from "../../Axis";
import { useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const R3: FC = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[-2, 2, 12]} />
      <OrbitControls makeDefault enableDamping={false} />
      <Axis axis="x" color="hotpink" />
      <Axis axis="y" color="#00FF00" />
      <Axis axis="z" color="yellow" />
    </>
  );
};

export default R3;
