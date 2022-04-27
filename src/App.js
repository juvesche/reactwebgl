import React, { useRef, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, softShadows } from "@react-three/drei";
import Cylinder from './Cylinder';
import { Physics, usePlane, useBox } from "@react-three/cannon";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

import { DDSLoader } from "three-stdlib";
import Plane from './Plane';

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
    return <primitive object={obj} scale={1.5} position={[1, 1, -4]} rotation={[Math.PI / 2, 0, 0]}/>;
};


function App(){
    return (
        <CanvasContainer>z
            <Canvas id="three-canvas-container" shadows>
                <fog attach="fog" color="black" near={1} far={8}/>
                <ambientLight intensity={0.5} />
                <spotLight intensity={1.5} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
                <directionalLight
                    castShadow
                    position={[0, 10, 0]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />

                <Suspense fallback={null}>

                    <Scene/>
                    <Earth/>
                    <Cylinder/>
                    <Cross/>
                    <Move/>
                    <Plane />
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
