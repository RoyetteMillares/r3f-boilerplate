import React, { useState } from "react";

const Box = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <mesh onClick={() => setHovered((prev) => !prev)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

export default Box;
