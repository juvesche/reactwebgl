import React, { useRef, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'

import { Physics, usePlane, useBox } from "@react-three/cannon";

import styled from "styled-components";

import "./App.css";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`

function App(){
    return <CanvasContainer>
        <Canvas>
            <Suspense fallback={null}>

            </Suspense>
        </Canvas>
    </CanvasContainer>;


}

export default App;