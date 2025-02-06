import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, OrbitControls, Stars, useHelper } from '@react-three/drei';
import { Earth } from './Earth.jsx';
import { Rocket } from './Rocket.jsx';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { SpotLightHelper } from 'three';

function EarthLight() {
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 'white');

  return <spotLight castShadow penumbra={0.5} position={[0.5, 1.5, -1]} angle={0.5} intensity={20} />;
}

export default function App() {
  return (
    <>
      <div className="bg" />
      <h1>
        Goodbye <span style={{ fontSize: '0.4em' }}></span>
        <br />
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
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={1.75} />
        {/*<PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>*/}
        {/*    <pointLight intensity={1} position={[-10, -25, -10]}/>*/}
        {/*    <spotLight castShadow intensity={8.25} angle={1.2} penumbra={1} position={[25, 20, 15]}*/}
        {/*               shadow-mapSize={[1024, 1024]} shadow-bias={-0.0001}/>*/}
        {/*</PerspectiveCamera>*/}
        <EarthLight />
        <Suspense fallback={null}>
          <group position={[-0.3, 0, 0]}>
            <Earth />
            <Rocket />
          </group>
          {/*<Environment preset="city"/>*/}
        </Suspense>
        <OrbitControls autoRotate={false} enablePan={false} enableZoom={true} />
        <Stars radius={200} depth={50} count={3000} factor={5} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.3} />
        </EffectComposer>
      </Canvas>
      <Loader />
      <a href="https://github.com/" className="top-left">
        Github
      </a>
      <a href="https://twitter.com/" className="top-right">
        LinkedIn
      </a>
    </>
  );
}
