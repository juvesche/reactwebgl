import {useFrame} from "@react-three/fiber";
import React, { useState } from "react";

let i=-5;

function Move() {
    const myMesh = React.useRef();
    const [active, setActive] = useState(false);


    useFrame(({ clock }) => {
        myMesh.current.rotation.x = clock.getElapsedTime();
    });
    i+=0.2;
    return (
        <>
            <mesh receiveShadow castShadow
                position={active ? [i, 0, 0] : [1, 0, i+0.2]}
                onClick={() => setActive(!active)}
                ref={myMesh}
            >
                <boxBufferGeometry attach="geometry"/>
                <meshPhongMaterial color="yellow" />
            </mesh>
        </>
    );

}


export default Move;