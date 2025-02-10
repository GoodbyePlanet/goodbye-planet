import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer, Loader, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Model } from './Model.jsx';
import { EarthRocket } from './EarthRocket.jsx';

export default function App() {
  return (
    <>
      <div className="bg" />
      <h1>Goodbye</h1>
      <h1 className="planet">Planet</h1>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[-9.6, -9.7, 19.8]} fov={75} />
        <Suspense fallback={null}>
          <EarthRocket />
          <Model />
          <Environment preset="sunset">
            <Lightformer intensity={13} position={[0, 0, 7]} scale={5} form="plane" />
          </Environment>
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 1.5} />
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
