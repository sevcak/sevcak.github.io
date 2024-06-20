import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";

import Character from "../models/Character";

const Home = () => {
  return (
    <section className="relative">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
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

          <Character />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home;