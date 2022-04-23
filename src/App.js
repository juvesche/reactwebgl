import React, { useRef, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";

import { Physics, usePlane, useBox } from "@react-three/cannon";

import styled from "styled-components";

import "./App.css";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App(){
    return (
        <CanvasContainer>
            <Canvas>

                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 15, 10]} angle={0.3} />

                <Suspense fallback={null}>

                </Suspense>
            </Canvas>
    </CanvasContainer>
);
}

export default App;