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
    useFrame(({ mouse }) => {
        if (!ref.current) return;
        ref.current.rotation.y += 0.04; // slow auto-rotate
        // light parallax
        ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, mouse.y * 0.25, 0.06);
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, ref.current.rotation.y + mouse.x * 0.001, 0.06);
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
                    <IconSprites icons={icons} radius={3.2} defaultSize={0.3} />
                </Rotator>

                {/* Optional: allow slight manual orbit (no zoom/pan) */}
                <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.15   } />
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