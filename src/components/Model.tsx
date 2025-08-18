"use client";

import React from "react";
import { Center, useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";

type MeshProps = ThreeElements["mesh"];

// ⬇️ usa exactamente el nombre que tienes en /public/models/
const MODEL_PATH = "/models/dust_looping_rigged_animation_10mb_free.glb";

export function GLBModel(props: MeshProps) {
  // Carga el GLB y lo devuelve como objeto Three.js
  const { scene, animations } = useGLTF(MODEL_PATH);

  // Si tu modelo tiene animaciones y quieres reproducirlas luego,
  // podemos montar un mixer aquí (de momento no es necesario).

  // Center centra y ajusta el pivot del modelo para que no se quede fuera de cámara.
  return (
    <Center disableZ>
      <primitive object={scene} {...props} />
    </Center>
  );
}

export function FallbackBox(props: MeshProps) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

// Precarga el modelo para que aparezca más rápido
useGLTF.preload(MODEL_PATH);
