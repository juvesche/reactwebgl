import React, {useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as THREE from "three";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthDayMap from "./texture/8k_earth_daymap.jpeg";
import EarthNormalMap from "./texture/8k_earth_normal_map.jpeg";
import EarthSpecularMap from "./texture/8k_earth_specular_map.jpeg";
import EarthCloudsMap from "./texture/8k_earth_clouds.jpeg";
import { TextureLoader } from "three";
import {useFrame, useLoader} from "@react-three/fiber";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export function Earth(props){

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 6;
        cloudsRef.current.rotation.y = elapsedTime / 6;
    });

    return(
        <>
            {}
        {/*<pointLight color="#f6f3ea" position={[2,0,2]} intensity={4.3} />*/}
        <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
        />
        <mesh ref={cloudsRef} position={[0, 0, 3]} receiveShadow castShadow>
            <sphereGeometry args={[1.005, 32, 32]} />
            <meshPhongMaterial
                map={cloudsMap}
                opacity={0.4}
                depthWrite={true}
                transparent={true}
                side={THREE.DoubleSide}
            />
        </mesh>
        <mesh ref={earthRef} position={[0, 0, 3]} receiveShadow castShadow>
            <sphereGeometry args={[1,32,32]}/>
            <meshPhongMaterial specularMap={specularMap}/>
            <meshStandardMaterial map={colorMap}
                                  normalMap={normalMap}
                                    metalness={0.4}
                                    roughness={0.7}/>
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
        </mesh>
        </>);

}