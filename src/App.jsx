import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader, OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { Model } from './Model.jsx';
import { EarthRocket } from './EarthRocket.jsx';
import { useControls } from 'leva';

function PerCamera() {
  const { x, y, z, fov } = useControls('Camera', {
    x: { value: 0, min: -50, max: 50, step: 0.1 },
    y: { value: 0, min: -50, max: 50, step: 0.1 },
    z: { value: 23, min: 0, max: 50, step: 0.1 },
    fov: { value: 75, min: 10, max: 120, step: 1 },
  });

  // return <PerspectiveCamera makeDefault position={[x, y, z]} fov={fov}></PerspectiveCamera>;
  return <PerspectiveCamera makeDefault position={[-9.6, -9.7, 19.8]} fov={fov}></PerspectiveCamera>;
}

export default function App() {
  return (
    <>
      <div className="bg" />
      <h1>
        Learn <span style={{ fontSize: '0.4em' }}>with</span>
        <br />
        <span>Jason</span>
      </h1>
      <Canvas dpr={[1.5, 2]} linear shadows>
        <fog attach="fog" args={['#272730', 16, 30]} />
        <ambientLight intensity={0.75} />
        <PerCamera />
        <Suspense fallback={null}>
          <EarthRocket />
          {/*<Model1 url="/scene.glb" />*/}
          <Model />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} />
        <Stars radius={500} depth={50} count={1000} factor={10} />
      </Canvas>
      <div className="layer" />
      <Loader />
      <a href="https://github.com/drcmda/learnwithjason" className="top-left" children="Github" />
      <a href="https://twitter.com/0xca0a" className="top-right" children="Twitter" />
    </>
  );
}
