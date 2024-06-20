
import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import characterScene from '../assets/3d/character.glb'

export function Character(props) {
  const characterRef = useRef();
  const { nodes, materials, animations } = useGLTF(characterScene)
  const { actions } = useAnimations(animations, characterRef)
  return (
    <a.group ref={characterRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI, 0, Math.PI]} scale={0.01}>
          <group name="body">
            <skinnedMesh
              name="Roundcube001"
              geometry={nodes.Roundcube001.geometry}
              material={materials.body}
              skeleton={nodes.Roundcube001.skeleton}
            />
            <skinnedMesh
              name="Roundcube001_1"
              geometry={nodes.Roundcube001_1.geometry}
              material={materials.stone}
              skeleton={nodes.Roundcube001_1.skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </a.group>
  )
}

export default Character;