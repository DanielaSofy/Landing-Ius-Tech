"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";

type MeshProps = ThreeElements["mesh"];

// Usa el nombre exacto del archivo que subiste a /public/models
const MODEL_PATH = "/models/dust_looping_rigged_animation_10mb_free.glb";

export function GLBModel(props: MeshProps) {
  // 👇 Nada de "animations", ni "any"
  const gltf = useGLTF(MODEL_PATH) as GLTF;
  return <primitive object={gltf.scene} {...props} />;
}

export function FallbackBox(props: MeshProps) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial />
    </mesh>
  );
}

useGLTF.preload(MODEL_PATH);
