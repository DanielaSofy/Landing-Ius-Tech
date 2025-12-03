"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Loader } from "@react-three/drei";
import { GLBModel, FallbackBox } from "./Model";

/* =========================
   Fallback: Fondo animado CSS
   Se muestra cuando WebGL no está disponible
========================= */
function AnimatedGradientBackground() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(104, 105, 216, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 80%, rgba(102, 143, 198, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 50%, rgba(104, 105, 216, 0.05) 0%, transparent 70%),
          #020617
        `,
      }}
    >
      {/* Partículas flotantes con CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#6869D8' : '#668FC6',
              animation: `float-${i % 5} ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(30px, -30px) rotate(90deg); }
          50% { transform: translate(60px, 0) rotate(180deg); }
          75% { transform: translate(30px, 30px) rotate(270deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-40px, 20px); }
          66% { transform: translate(20px, -40px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(40px); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -20px) scale(1.5); }
        }
      `}</style>
    </div>
  );
}

/* =========================
   Detector de WebGL
========================= */
function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    
    if (!gl) return false;
    
    // Verificar que no esté en modo software (muy lento)
    const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      // SwiftShader es renderizado por software, muy lento
      if (renderer && renderer.toLowerCase().includes("swiftshader")) {
        return false;
      }
    }
    
    return true;
  } catch {
    return false;
  }
}

/* =========================
   Contenido 3D de la escena
========================= */
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

/* =========================
   Componente principal con fallback
========================= */
export default function ThreeBackgroundClient() {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Permitir forzar fallback con ?fallback=true en la URL (para pruebas)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('fallback') === 'true') {
      setWebGLSupported(false);
      return;
    }
    
    // Verificar soporte de WebGL en el cliente
    setWebGLSupported(isWebGLAvailable());
  }, []);

  // Mientras verifica, no mostrar nada (evita flash)
  if (webGLSupported === null) {
    return <div className="fixed inset-0 z-0 bg-[#020617]" />;
  }

  // Si WebGL no está disponible o hubo error, mostrar fallback CSS
  if (!webGLSupported || hasError) {
    return <AnimatedGradientBackground />;
  }

  // WebGL disponible: mostrar Canvas 3D
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
        gl={{ alpha: false }}
        onCreated={({ gl }) => {
          gl.setClearColor("#020617", 1);
        }}
        onError={() => {
          // Si hay error al crear el canvas, usar fallback
          setHasError(true);
        }}
      >
        <SceneContents />
      </Canvas>
      <Loader />
    </>
  );
}