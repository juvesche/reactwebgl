import React, { useRef, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import Cylinder from './Cylinder';
import { Physics, usePlane, useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";

import styled from "styled-components";

import "./App.css";
import {Earth} from "./index";
import Cross from "./RedCross";
import Move from "./move";

const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;

`
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = () => {
    const materials = useLoader(MTLLoader, "untitled.mtl");
    const obj = useLoader(OBJLoader, "untitled.obj", (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    console.log(obj);
    return <primitive object={obj} scale={4.0} position={[1, 1, -40]} rotation={[Math.PI / 2, 0, 0]}/>;
};


function App(){
    return (
        <CanvasContainer>
            <Canvas>
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 15, 10]} angle={0.3} />

                <Suspense fallback={null}>
                    <Scene/>
                    <Earth/>
                    <Cylinder/>
                    <Cross/>
                    <Move/>
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
