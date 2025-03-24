"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

export default function Scene() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshStandardMaterial>(null)

  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1

      // Change color based on window scroll position
      const scrollPosition = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)

      if (scrollPosition < 0.33) {
        materialRef.current.color.setHSL(0.7, 0.8, 0.5) // Purple for Cloud section
      } else if (scrollPosition < 0.66) {
        materialRef.current.color.setHSL(0, 0.8, 0.5) // Red for Politics section
      } else {
        materialRef.current.color.setHSL(0.05, 0.8, 0.5) // Orange-red for Firefighter section
      }
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusGeometry args={[2, 0.2, 16, 100]} />
        <meshStandardMaterial
          ref={materialRef}
          roughness={0.2}
          metalness={0.8}
          color={new THREE.Color().setHSL(0.7, 0.8, 0.5)} // Initial color
        />
      </mesh>
    </Float>
  )
}

