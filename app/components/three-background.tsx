"use client"

import { Canvas } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { IntroScene, CloudScene, PoliticsScene, FirefighterScene } from "./three-scene"

interface ThreeBackgroundProps {
  colors: {
    from: string
    via: string
    to: string
  }
  activeSection: string
}

export default function ThreeBackground({ colors, activeSection }: ThreeBackgroundProps) {
  const colorsArray = [colors.from, colors.via, colors.to]

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        {activeSection === "intro" && <IntroScene position={[0, 0, -5]} colors={colorsArray} />}
        {activeSection === "cloud" && <CloudScene position={[0, 0, -5]} colors={colorsArray} />}
        {activeSection === "politics" && <PoliticsScene position={[0, 0, -5]} colors={colorsArray} />}
        {activeSection === "firefighter" && <FirefighterScene position={[0, 0, -5]} colors={colorsArray} />}
        <Environment preset="city" />
      </Canvas>
    </div>
  )
}

