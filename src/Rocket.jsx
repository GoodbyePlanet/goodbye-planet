/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Billy Jackman (https://sketchfab.com/billyjackman3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rocket-ship-low-poly-96858de4225f42048c88be630697f9cb
Title: Rocket Ship - Low Poly
*/

import {useGLTF} from '@react-three/drei'
import {Color} from "three";

const blueBloomColor = new Color("#029df8");
blueBloomColor.multiplyScalar(50);
const darkBlueBloomColor = new Color("#012b31");
darkBlueBloomColor.multiplyScalar(10);
const greyBloomColor = new Color("#c5c1c1");
greyBloomColor.multiplyScalar(30);

export function Rocket(props) {
    const {nodes, materials} = useGLTF('/rocket_ship_-_low_poly.glb')
    return (
        <group {...props} dispose={null}>
            <group scale={0.012}>
                <group position={[-50, 200, 40]} rotation={[-Math.PI / 2, Math.PI / 4, 0]}>
                    {/*<group position={[200, 0.274, 59.551]}>*/}
                    <group position={[250, 0.274, 39.551]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Rocket_Ship_01_Material_#28_0'].geometry}
                            material={materials.Material_28}
                            material-color="#89CFF0"
                        >
                            {/*<meshBasicMaterial color={darkBlueBloomColor} toneMapped={false}/>*/}
                        </mesh>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Rocket_Ship_01_Material_#27_0'].geometry}
                            material={materials.Material_27}
                            material-color="#F8F1F1"
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Rocket_Ship_01_Material_#29_0'].geometry}
                            material={materials.Material_29}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Rocket_Ship_01_Material_#42_0'].geometry}
                            material={materials.Material_42}
                        >
                            <meshBasicMaterial color={greyBloomColor} toneMapped={false}/>
                        </mesh>
                        {/*This is blue window*/}
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes['Rocket_Ship_01_Material_#30_0'].geometry}
                            material={materials.Material_30}
                        >
                            <meshBasicMaterial color={blueBloomColor} toneMapped={false}/>
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/rocket_ship_-_low_poly.glb')
