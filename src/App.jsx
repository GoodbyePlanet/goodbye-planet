import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Loader, OrbitControls, PerspectiveCamera, Stars, useGLTF} from '@react-three/drei'
import {Earth1} from "./Earth1.jsx";
import {Earth} from "./Earth.jsx";
import {Rocket} from "./Rocket.jsx";

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
                Learn <span style={{fontSize: '0.4em'}}>with</span>
                <br/>
                <span>Mario</span>
            </h1>
            <Canvas dpr={[1.5, 2]} linear shadows>
                <fog attach="fog" args={['#272730', 16, 30]}/>
                {/*<ambientLight intensity={1.75}/>*/}
                {/*<PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>*/}
                {/*    <pointLight intensity={1} position={[-10, -25, -10]}/>*/}
                {/*    <spotLight castShadow intensity={8.25} angle={1.2} penumbra={1} position={[25, 20, 15]}*/}
                {/*               shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001}/>*/}
                {/*</PerspectiveCamera>*/}
                {/*<CameraPositionControl/>*/}
                <Suspense fallback={null}>
                    <Earth />
                    <Rocket />
                    <Environment preset="studio" />
                </Suspense>
                <OrbitControls autoRotate={false} enablePan={false} enableZoom={true} maxPolarAngle={Math.PI / 2}
                               minPolarAngle={Math.PI / 2}/>
                <Stars radius={500} depth={50} count={1000} factor={10}/>
            </Canvas>
            <Loader/>
            <a href="https://github.com/" className="top-left" children="Github"/>
            <a href="https://twitter.com/" className="top-right" children="Twitter"/>
        </>
    )
}
