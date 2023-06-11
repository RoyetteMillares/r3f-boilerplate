import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Models/Box";
const Experience = () => {
  return (
    <Canvas>
      <ambientLight />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

export default Experience;
