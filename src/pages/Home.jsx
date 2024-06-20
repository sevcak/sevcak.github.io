import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

import Character from "../models/Character";

const Home = () => {
  const adjustCharacterForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-1, -1, 4];
    let rotation = [0, 3.6, 0];

    if (window.innerHeight < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [characterScale, characterPosition, rotation] = adjustCharacterForScreenSize();

  return (
    <section className="relative h-full">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center h-screen">
        Home
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />

          <Character
            position={characterPosition}
            scale={characterScale}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;