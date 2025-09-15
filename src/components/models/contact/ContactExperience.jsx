import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 6], fov: 45 }}
      style={{ background: "transparent" }}
    >
      {/* ✨ Clean studio-style lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[3, 10, 5]} intensity={2} castShadow />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2}
      />

      {/* 🎯 Shifted left, raised up, and rotated to face forward */}
    <group
  position={[-1, 1.1, 0]}
  rotation={[0, Math.PI, 0]}
  scale={[1.1, 1.1, 1]} // ✅ Increase height + overall size
>
  <Computer />
</group>

    </Canvas>
  );
};

export default ContactExperience;
