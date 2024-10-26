'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  return (
    <Canvas>
      <directionalLight color="orange" position={[0, 0, 3]} />
      <mesh position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[-1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, -1, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}
