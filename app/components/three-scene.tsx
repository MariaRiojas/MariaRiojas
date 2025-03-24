"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

// Enhanced material properties for more vibrant appearance
const createMaterial = (color: string) => {
  return new THREE.MeshStandardMaterial({
    color,
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.8,
  })
}

export function IntroScene({ position, colors }: { position: [number, number, number]; colors: any }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} scale={1.5}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshStandardMaterial color={colors.from} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

export function CloudScene({ position, colors }: { position: [number, number, number]; colors: any }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} scale={1.5}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={colors.via} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
        <mesh position={[2, -1, 0]} scale={[0.5, 1, 0.3]}>
          <boxGeometry />
          <meshStandardMaterial color={colors.to} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

export function PoliticsScene({ position, colors }: { position: [number, number, number]; colors: any }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, 0, 0]}>
          {[0, 0.2, 0.4].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} scale={[0.8, 0.1, 0.6]} rotation={[0, i * 0.2, 0]}>
              <boxGeometry />
              <meshStandardMaterial
                color={i === 0 ? colors.from : i === 1 ? colors.via : colors.to}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
        <mesh position={[1.5, 0, 0]} scale={0.5}>
          <torusGeometry args={[1, 0.2, 16, 32]} />
          <meshStandardMaterial color={colors.via} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

export function FirefighterScene({ position, colors }: { position: [number, number, number]; colors: any }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[0, 0, 0]} scale={1.2}>
          <coneGeometry args={[1, 2, 32]} />
          <meshStandardMaterial color={colors.from} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
        <mesh position={[2, 0, 0]} scale={1}>
          <cylinderGeometry args={[1, 1, 0.2, 6]} />
          <meshStandardMaterial color={colors.to} metalness={0.9} roughness={0.1} transparent opacity={0.8} />
        </mesh>
      </Float>
    </group>
  )
}

