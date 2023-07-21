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
    </>
  );
};

export default Axis;
