'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <Canvas>
      <directionalLight position={[0, 2, 2]} />
      <mesh color="orange" position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <boxGeometry />
      </mesh>
    </Canvas>
  )
}
