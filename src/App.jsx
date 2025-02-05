import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Loader, OrbitControls, PerspectiveCamera, Stars} from '@react-three/drei'
import {Earth} from "./Earth.jsx";
import {Rocket} from "./Rocket.jsx";
import {Earth1} from "./Earth1.jsx";
import {Planet} from "./Planet.jsx";
import {Bloom, EffectComposer} from "@react-three/postprocessing";

// function Model({url}) {
//     const {nodes} = useGLTF(url)
//     return (
//         <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
//             <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
//                 <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material}/>
//                 <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material}/>
//             </group>
//         </group>
//     )
// }

export default function App() {
    return (
        <>
            <div className="bg"/>
            <h1>
                Goodbye <span style={{fontSize: '0.4em'}}></span>
                <br/>
                <span>Planet</span>
            </h1>
            <Canvas
                dpr={[1.5, 2]}
                linear
                shadows
                camera={{
                    fov: 30, // Field of view in degrees
                    near: 0.1, // Near clipping plane
                    far: 1000, // Far clipping plane
                    // position: [3, 2, 5], // Camera position
                    position: [3, 2, 5], // Camera position
                }}
            >
                <fog attach="fog" args={['#272730', 16, 30]}/>
                <ambientLight intensity={1.75}/>
                {/*<PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>*/}
                {/*    <pointLight intensity={1} position={[-10, -25, -10]}/>*/}
                {/*    <spotLight castShadow intensity={8.25} angle={1.2} penumbra={1} position={[25, 20, 15]}*/}
                {/*               shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001}/>*/}
                {/*</PerspectiveCamera>*/}
                <Suspense fallback={null}>
                    <group position={[-0.3, 0, 0]}>
                        <Earth/>
                        <Rocket />
                    </group>
                    <Environment preset="city"/>
                </Suspense>
                <OrbitControls autoRotate={false} enablePan={false} enableZoom={true}/>
                <Stars radius={200} depth={50} count={3000} factor={5}/>
                <EffectComposer>
                    <Bloom mipmapBlur intensity={0.3} />
                </EffectComposer>
            </Canvas>
            <Loader/>
            <a href="https://github.com/" className="top-left">Github</a>
            <a href="https://twitter.com/" className="top-right">LinkedIn</a>
        </>
    )
}
