import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
    const { nodes, materials } = useGLTF('/the_old_moon.glb')
    return (
        <group {...props} scale={12} position={[0,-20,0]} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.OldMoon_LP_1_0.geometry}
                material={materials.material}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/the_old_moon.glb')
