import { TextureLoader } from "three";
import {useLoader} from "@react-three/fiber";
import CokeCan from "./texture/cokecan.jpg";
import CanTop from "./texture/can-top.jpg";
import CanBottom from "./texture/bottom.jpg";

function Cylinder (){
    const sideCan = useLoader(TextureLoader, CokeCan);
    const topCan = useLoader(TextureLoader, CanTop);
    const bottomCan = useLoader(TextureLoader, CanBottom);

    return (
        <>
            <mesh position={[0, 0, 0]} castShadow
                  receiveShadow>
                <cylinderBufferGeometry attach="geometry" args={[.3, .3, 1, 32,1,true]}/>
                <meshStandardMaterial map={sideCan} />
            </mesh>
            <mesh receiveShadow castShadow position={[0, .5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <circleGeometry attach="geometry" args={[.3, 32]} />
                <meshStandardMaterial map={topCan} />
            </mesh>
            <mesh receiveShadow castShadow position={[0, -.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <circleGeometry attach="geometry" args={[.3, 32]} />
                <meshStandardMaterial map={bottomCan} />
            </mesh>
        </>

    )
}


export default Cylinder;