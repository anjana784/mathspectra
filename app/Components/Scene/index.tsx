import { FC } from "react";
import R2 from "../CoordinateSystems/R2";
import R3 from "../CoordinateSystems/R3";
import useStore from "@/app/store";

const Scene: FC = () => {
  const { systemType } = useStore((state) => state);

  return (
    <>{systemType === "R2" ? <R2 /> : systemType === "R3" ? <R3 /> : null}</>
  );
};

export default Scene;
