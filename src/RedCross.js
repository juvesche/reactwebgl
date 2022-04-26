import {useLoader} from "@react-three/fiber";
import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {TextureLoader} from "three";
import CokeCan from "./texture/red.png";


function Cross() {
    const myMesh = React.useRef();
    const myMesh2 = React.useRef();
    const sideCan = useLoader(TextureLoader, CokeCan);


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = a;
        myMesh2.current.rotation.x = -a;
    });

    return (
        <>
            <mesh position={[3, 0, 0]}
                  ref={myMesh}>
                <boxBufferGeometry attach="geometry" args={[.3, .3, 1, 32,1,true]} />
                <meshStandardMaterial map={sideCan} />
            </mesh>

            <mesh position={[3, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}
                  ref={myMesh2}>
                <boxBufferGeometry attach="geometry" args={[.3, .3, 1, 32,1,true]} />
                <meshStandardMaterial map={sideCan} />
            </mesh>
        </>
    );
}
export default Cross;

