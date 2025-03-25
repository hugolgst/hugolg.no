import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import FloatingParticles from '@/components/particles/FloatingParticles'
import Figure8Particles from '@/components/particles/Linear8Particles'

const Particles = () => (
  <Canvas camera={{ position: [ 0, 0, 2 ], fov: 75 }}>
    {/* Scene setup */}
    <color
      attach='background'
      args={[ 'white' ]}
    />
    <fogExp2
      attach='fog'
      args={[ '#ffffff', 0.4 ]}
    />

    {/* Particle systems */}
    <Figure8Particles />
    <FloatingParticles />

    {/* Controls */}
    <OrbitControls />
  </Canvas>
)

export default Particles
