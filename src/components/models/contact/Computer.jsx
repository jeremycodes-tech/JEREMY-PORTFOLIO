import { useGLTF } from "@react-three/drei";

export function Computer(props) {
  const { nodes } = useGLTF("/models/AI-transformed.glb");

  return (
    <group {...props} dispose={null}>
      {/* Increased scale and lifted position to match contact form height */}
      <group scale={2.2} position={[0, -1, 0]} rotation={[0, Math.PI, 0]}>
        {Object.entries(nodes).map(([key, node]) => {
          if (node.type === "Mesh") {
            return (
              <mesh
                key={key}
                geometry={node.geometry}
                material={node.material}
                castShadow
                receiveShadow
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}

useGLTF.preload("/models/AI-transformed.glb");

export default Computer;
