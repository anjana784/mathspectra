import { FC, useMemo } from "react";
import * as THREE from "three";

const R2: FC = () => {
  // points for the verticle line
  const verticlePoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = -5; i <= 5; i++) {
      points.push(new THREE.Vector3(i, 0, 0));
    }
    return points;
  }, []);

  // points for the horizontal line
  const horizontalPoints = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = -5; i <= 5; i++) {
      points.push(new THREE.Vector3(0, i, 0));
    }
    return points;
  }, []);

  // verticle line
  const verticleLine = useMemo(() => {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(
      verticlePoints
    );

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });

    return new THREE.Line(lineGeometry, lineMaterial);
  }, [verticlePoints]);

  // horizontal line
  const horizontalLine = useMemo(() => {
    const lineGeometry = new THREE.BufferGeometry().setFromPoints(
      horizontalPoints
    );

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    return new THREE.Line(lineGeometry, lineMaterial);
  }, [horizontalPoints]);

  return (
    <>
      <primitive object={verticleLine} />
      <primitive object={horizontalLine} />
    </>
  );
};

export default R2;
