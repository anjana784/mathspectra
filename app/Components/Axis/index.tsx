import { Text3D } from "@react-three/drei";
import { FC, useMemo } from "react";
import * as THREE from "three";

interface AxisProps {
  axis: "x" | "y" | "z";
  color: string;
}

const Axis: FC<AxisProps> = ({ axis, color = "#FF0000" }) => {
  // points for the line
  const points = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = -5; i <= 5; i++) {
      if (axis === "x") {
        points.push(new THREE.Vector3(i, 0, 0));
      } else if (axis === "y") {
        points.push(new THREE.Vector3(0, i, 0));
      } else if (axis === "z") {
        points.push(new THREE.Vector3(0, 0, i));
      }
    }
    return points;
  }, [axis]);

  // line
  const line = useMemo(() => {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color(color),
    });

    return new THREE.Line(lineGeometry, lineMaterial);
  }, [color, points]);

  return (
    <>
      <primitive object={line} />
      <mesh
        position={
          axis === "x" ? [5.1, 0, 0] : axis === "y" ? [0, 5.1, 0] : [0, 0, 5.1]
        }
        rotation={
          axis === "x"
            ? [0, 0, -Math.PI / 2]
            : axis === "y"
            ? [0, 0, 0]
            : [Math.PI / 2, 0, 0]
        }
      >
        <coneGeometry args={[0.05, 0.2, 32]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.2}
        height={0.001}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.001}
        bevelSize={0.002}
        bevelOffset={0}
        bevelSegments={5}
        position={
          axis === "x"
            ? [5.3, 0, 0]
            : axis === "y"
            ? [0, 5.1, 0]
            : [0.1, 0, 5.1]
        }
      >
        {axis.toUpperCase()}
        <meshBasicMaterial color={color} />
      </Text3D>
    </>
  );
};

export default Axis;
