"use client";

import React, { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { GLBModel, FallbackBox } from "./Model";

function SceneContents() {
  const groupRef = React.useRef<THREE.Group>(null);
  const { camera, size } = useThree();
  const isMobile = size.width < 640;

  // Parallax con mouse (suave y acotado)
  const mouse = React.useRef({ x: 0, y: 0 });
  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / size.width) * 2 - 1;
      const ny = (e.clientY / size.height) * 2 - 1;
      // Limitar por si acaso
      mouse.current.x = Math.max(-1, Math.min(1, nx));
      mouse.current.y = Math.max(-1, Math.min(1, ny));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [size.width, size.height]);

  // Pausar cálculos si la pestaña no está visible
  const pageVisible = React.useRef(true);
  React.useEffect(() => {
    const vis = () => (pageVisible.current = document.visibilityState === "visible");
    document.addEventListener("visibilitychange", vis);
    return () => document.removeEventListener("visibilitychange", vis);
  }, []);

  useFrame(({ clock }) => {
    if (!pageVisible.current) return;

    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.15;
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.05;
    }

    // Parallax menor en móvil
    const factorX = isMobile ? 0.25 : 0.6;
    const factorY = isMobile ? 0.15 : 0.3;

    const target = new THREE.Vector3(
      mouse.current.x * factorX,
      -mouse.current.y * factorY,
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
          {/* OJO: asegúrate que tu GLBModel usa la ruta correcta */}
          <GLBModel scale={[1.2, 1.2, 1.2]} position={[0, -0.3, 0]} />
        </Suspense>
      </group>
      {/* OrbitControls solo para auto-rotar; como pointerEvents es 'none', no intercepta clicks */}
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
          zIndex: 0,            // el contenido irá por encima con z-10
          pointerEvents: "none"
        }}
        gl={{ alpha: true }}     // <- fondo transparente
      >
        {/* Fondo transparente */}
        <color attach="background" args={[0, 0, 0, 0] as unknown as any} />
        <SceneContents />
      </Canvas>
      <Loader />
    </>
  );
}
