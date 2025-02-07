import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function Model(props) {
  const { nodes, materials } = useGLTF('/the_old_moon.glb');
  const { nodes: nodesRocks } = useGLTF('/rocks.glb');
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={ref} {...props} scale={12} position={[0, -20, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.5, 0]} scale={0.7}>
        <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
          <mesh geometry={nodesRocks.planet003.geometry} material={nodesRocks.planet003.material} />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.OldMoon_LP_1_0.geometry}
        material={materials.material}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/the_old_moon.glb');
