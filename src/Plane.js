import { TextureLoader } from "three";
import {useLoader} from "@react-three/fiber";
import SandMap from "./texture/sand.jpg";

function Plane(){
    const sand = useLoader(TextureLoader, SandMap);


    return (
        <>
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
                <planeBufferGeometry attach="geometry" args={[7,7]} />
                <meshStandardMaterial map={sand} />
            </mesh>

        </>

    )
}


export default Plane;