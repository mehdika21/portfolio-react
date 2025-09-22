// SkillCloud.tsx
import * as THREE from "three";
import React, { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

type Icon = { src: string; size?: number };

function spherePoints(count: number, radius: number): THREE.Vector3[] {
    const pts: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * r;
        const z = Math.sin(theta) * r;
        const v = new THREE.Vector3(x, y, z).normalize().multiplyScalar(radius);
        // push slightly above the surface so sprites don't clip
        v.multiplyScalar(1.02);
        pts.push(v);
    }
    return pts;
}

const IconSprites: React.FC<{ icons: Icon[]; radius?: number; defaultSize?: number }> = ({
    icons,
    radius = 4.2,
    defaultSize = 0.55, // smaller icons
}) => {
    const textures = useLoader(THREE.TextureLoader, icons.map((i) => i.src));
    const points = useMemo(() => spherePoints(icons.length, radius), [icons.length, radius]);

    return (
        <group>
            {points.map((p, i) => (
                <sprite key={i} position={p} scale={[icons[i].size ?? defaultSize, icons[i].size ?? defaultSize, 1]}>
                    <spriteMaterial map={textures[i]} transparent />
                </sprite>
            ))}
        </group>
    );
};

const Rotator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const ref = useRef<THREE.Group>(null);
    const rotationSpeed = useRef({ x: 0.005, y: 0.008 }); // Base rotation speeds
    
    useFrame(({ mouse, clock }) => {
        if (!ref.current) return;
        
        // Constant rotation with time-based animation
        const time = clock.getElapsedTime();
        
        // Primary constant rotation
        ref.current.rotation.y += rotationSpeed.current.y;
        ref.current.rotation.x += rotationSpeed.current.x;
        
        // Optional: Add subtle mouse influence without stopping rotation
        const mouseInfluenceX = mouse.y * 0.1;
        const mouseInfluenceY = mouse.x * 0.1;
        
        // Blend mouse influence with constant rotation
        ref.current.rotation.x += mouseInfluenceX * 0.01;
        ref.current.rotation.y += mouseInfluenceY * 0.01;
        
        // Optional: Add slight variation to make it more organic
        const variation = Math.sin(time * 0.5) * 0.002;
        ref.current.rotation.x += variation;
    });
    
    return <group ref={ref}>{children}</group>;
};

const SkillCloud: React.FC<{ icons: Icon[]; className?: string }> = ({ icons, className = "" }) => {
    return (
        <div className={`relative h-[460px] w-full rounded-2xl bg-[#151515] ${className}`}>
            <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
                {/* Perspective for real depth */}
                <PerspectiveCamera makeDefault fov={50} position={[0, 0, 10]} />

                {/* Lights - Adjust these for different shading */}
                <ambientLight intensity={0.8} />  {/* Overall brightness */}
                <directionalLight position={[5, 8, 12]} intensity={0.4} />  {/* Main light */}
                <pointLight position={[-6, -4, -8]} intensity={0.2} />  {/* Fill light */}

                <Rotator>
                    {/* Icons on the globe */}
                    <IconSprites icons={icons} radius={3.2} defaultSize={0.5} />
                </Rotator>

                {/* Disable OrbitControls or make them less intrusive */}
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    rotateSpeed={0.3}
                    enableDamping={true}
                    dampingFactor={0.1}
                />
            </Canvas>

            {/* Soft inner vignette */}
           {/* <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2
                w-[560px] h-[560px] rounded-full
                bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_45%,rgba(0,0,0,0)_70%)]
                shadow-[0_60px_140px_-60px_rgba(0,0,0,0.6)]" /> */}
        </div>
    );
};

export default SkillCloud;