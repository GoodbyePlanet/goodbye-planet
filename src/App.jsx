import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer, Loader, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Model } from './Model.jsx';
import { EarthRocket } from './EarthRocket.jsx';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

function PerCamera() {
  // const { x, y, z, fov } = useControls('Camera', {
  //   x: { value: 0, min: -50, max: 50, step: 0.1 },
  //   y: { value: 0, min: -50, max: 50, step: 0.1 },
  //   z: { value: 23, min: 0, max: 50, step: 0.1 },
  //   fov: { value: 75, min: 10, max: 120, step: 1 },
  // });

  // return <PerspectiveCamera makeDefault position={[x, y, z]} fov={fov}></PerspectiveCamera>;
  return <PerspectiveCamera makeDefault position={[-9.6, -9.7, 19.8]} fov={75}></PerspectiveCamera>;
}

export default function App() {
  return (
    <>
      <div className="bg" />
      <h1>Goodbye</h1>
      <h1 className="planet">Planet</h1>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerCamera />
        <Suspense fallback={null}>
          <EarthRocket />
          <Model />
          <Environment preset="sunset">
            <Lightformer intensity={13} position={[0, 0, 7]} scale={5} form="plane" />
          </Environment>
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} />
        <Stars radius={500} depth={50} count={1000} factor={10} />
        <EffectComposer>
          <Bloom mipmapBlur intensity={1.2} />
        </EffectComposer>
      </Canvas>
      <div className="layer" />
      <Loader />
    </>
  );
}
