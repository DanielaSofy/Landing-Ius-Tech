"use client";

import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { GLBModel, FallbackBox } from "./Model";

function SceneContents() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, size } = useThree();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / size.width) * 2 - 1;
      const ny = (e.clientY / size.height) * 2 - 1;
      mouse.current.x = nx;
      mouse.current.y = ny;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [size.width, size.height]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.05;
    }

    const target = new THREE.Vector3(
      mouse.current.x * 0.6,
      -mouse.current.y * 0.3,
      6
    );
    camera.position.lerp(target, 0.06);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1} castShadow />
      <group ref={groupRef} position={[0, 0, 0]}>
        <Suspense fallback={<FallbackBox scale={[1.2, 1.2, 1.2]} />}>
          <GLBModel scale={[1.2, 1.2, 1.2]} position={[0, -0.3, 0]} />
        </Suspense>
      </group>
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </>
  );
}

export default function ThreeBackgroundClient() {
  return (
    <>
      <Canvas
        dpr={[1, 2]}
        shadows
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        gl={{ alpha: false }} // <- asegura que no sea transparente
          onCreated={({ gl }) => {
            gl.setClearColor("#020617", 1); // slate-950
          }}
      >
        <SceneContents />
      </Canvas>
      <Loader />
    </>
  );
}
