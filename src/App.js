import React, { useRef, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

import { Physics, usePlane, useBox } from "@react-three/cannon";

import styled from "styled-components";

import "./App.css";
import {Earth} from "./index";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;

`

function App(){
    return (
        <CanvasContainer>
            <Canvas>
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 15, 10]} angle={0.3} />

                <Suspense fallback={null}>
                    <Earth/>
                </Suspense>
            </Canvas>
    </CanvasContainer>
);
}

export default App;

function Box(){
    return(
        <mesh>
            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color="hotpink"/>
        </mesh>
    )
}
