"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { GLBModel, FallbackBox } from "./Model";

/**
 * Controla la cámara según el scroll de la página.
 * Lerp suave para que se vea fluido.
 */
function ScrollCameraController() {
  const { camera, size } = useThree();
  const targetPos = useRef(new THREE.Vector3());
  const targetRot = useRef(new THREE.Euler());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const p = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useFrame((_, dt) => {
    // Keyframes básicos de posición/rotación para “recorrer” el modelo
    // Ajusta estos valores a tu escena
    const kf = [
      { pos: new THREE.Vector3(0, 0.6, 4.2), rot: new THREE.Euler(0, 0, 0) },            // inicio (hero)
      { pos: new THREE.Vector3(1.2, 0.8, 3.2), rot: new THREE.Euler(-0.1, 0.4, 0) },      // features
      { pos: new THREE.Vector3(-1.0, 0.5, 2.6), rot: new THREE.Euler(0.05, -0.5, 0) },    // security
      { pos: new THREE.Vector3(0, 0.9, 2.2), rot: new THREE.Euler(-0.15, 0.0, 0) },       // pricing/faq
    ];

    // Interpola entre keyframes según el progreso
    const t = progress * (kf.length - 1);
    const i = Math.floor(t);
    const f = Math.min(1, t - i);
    const a = kf[i];
    const b = kf[Math.min(i + 1, kf.length - 1)];

    targetPos.current.copy(a.pos).lerp(b.pos, f);
    targetRot.current.set(
      THREE.MathUtils.lerp(a.rot.x, b.rot.x, f),
      THREE.MathUtils.lerp(a.rot.y, b.rot.y, f),
      THREE.MathUtils.lerp(a.rot.z, b.rot.z, f)
    );

  camera.position.lerp(targetPos.current, Math.min(1, dt * 2));
  camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRot.current.x, Math.min(1, dt * 2));
  camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetRot.current.y, Math.min(1, dt * 2));
  camera.rotation.z = THREE.MathUtils.lerp(camera.rotation.z, targetRot.current.z, Math.min(1, dt * 2));

  // Solo si la cámara ES de perspectiva tocamos el FOV
  if (camera instanceof THREE.PerspectiveCamera) {
    const isMobile = size.width < 640;
    const targetFov = isMobile ? 55 : 45;
    camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, Math.min(1, dt * 2));
    camera.updateProjectionMatrix();
  }
});

  return null;
}

/**
 * Escena: luces, entorno y tu modelo.
 * Se dibuja detrás del contenido (position: fixed).
 */
function Scene() {
  // Cambia scale/position para encuadrar tu modelo
  const hasGLB = true; // Si no tienes aún el GLB, pon false para ver el cubo

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 2]} intensity={1.1} />
      <Environment preset="city" />

      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        {hasGLB ? (
          <GLBModel position={[0, -0.7, 0]} rotation={[0, Math.PI * 0.2, 0]} scale={1.2} />
        ) : (
          <FallbackBox position={[0, 0, 0]} />
        )}
      </Float>

      <ScrollCameraController />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 hidden sm:block">
      <Canvas
        camera={{ position: [0, 0.6, 4.2], fov: 45 }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
