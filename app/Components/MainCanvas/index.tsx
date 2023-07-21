"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Scene from "../Scene";

const MainCanvas: FC = () => {
  return (
    <main className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Scene />
      </Canvas>
    </main>
  );
};

export default MainCanvas;
