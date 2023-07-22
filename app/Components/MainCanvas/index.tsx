"use client";
import {
  OrbitControls,
  OrthographicCamera,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Scene from "../Scene";
import useStore from "@/app/store";

const MainCanvas: FC = () => {
  const { systemType } = useStore((state) => state);

  return (
    <main className="w-full h-full">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </main>
  );
};

export default MainCanvas;
