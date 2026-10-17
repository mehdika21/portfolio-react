
import * as THREE from "three";

import React, {
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Html,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";

// -----------------------------------
// TYPES
// -----------------------------------

type Icon = {
  src: string;
  size?: number;
  name?: string;
};

type SkillCloudProps = {
  icons: Icon[];
  className?: string;
};

// -----------------------------------
// GENERATE SPHERE POSITIONS
// -----------------------------------

function spherePoints(
  count: number,
  radius: number
): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];

  if (count === 0) return points;

  const phi = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y =
      count === 1
        ? 0
        : 1 - (i / (count - 1)) * 2;

    const r = Math.sqrt(
      Math.max(0, 1 - y * y)
    );

    const theta = phi * i;

    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;

    const point = new THREE.Vector3(
      x,
      y,
      z
    )
      .normalize()
      .multiplyScalar(radius);

    points.push(point);
  }

  return points;
}

// -----------------------------------
// INDIVIDUAL LOGO
// Uses HTML img instead of WebGL texture
// -----------------------------------

const SkillIcon: React.FC<{
  icon: Icon;
  defaultSize: number;
}> = ({ icon, defaultSize }) => {
  const [failed, setFailed] = useState(false);

  const size = icon.size ?? defaultSize;

  const label =
    icon.name ??
    icon.src.split("/").slice(-2)[0] ??
    "Skill";

  return (
    <div
      style={{
        width: size,
        height: size,
        padding: 0,
        background: "transparent",
        border: "none",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        userSelect: "none",
        boxSizing: "border-box",
        }}
    >
      {failed ? (
        <span
          style={{
            color: "#222",
            fontSize: 9,
            textAlign: "center",
            overflowWrap: "anywhere",
          }}
        >
          {label}
        </span>
      ) : (
        <img
          src={icon.src}
          alt={label}
          draggable={false}
          loading="eager"
          decoding="async"
          onError={() => {
            console.warn(
              "Failed to load logo:",
              icon.src
            );
            setFailed(true);
          }}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      )}
    </div>
  );
};

// -----------------------------------
// ICONS POSITIONED IN 3D
// -----------------------------------

const IconCloud: React.FC<{
  icons: Icon[];
  radius?: number;
  defaultSize?: number;
}> = ({
  icons,
  radius = 3.2,
  defaultSize = 48,
}) => {
  const points = useMemo(
    () => spherePoints(icons.length, radius),
    [icons.length, radius]
  );

  return (
    <group>
      {points.map((position, index) => (
        <Html
          key={`${icons[index].src}-${index}`}
          position={[
            position.x,
            position.y,
            position.z,
          ]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: "none",
          }}
        >
          <SkillIcon
            icon={icons[index]}
            defaultSize={defaultSize}
          />
        </Html>
      ))}
    </group>
  );
};

// -----------------------------------
// SMOOTH ROTATION
// -----------------------------------

const Rotator: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ pointer }, delta) => {
    if (!ref.current) return;

    // Continuous rotation
    ref.current.rotation.y += delta * 0.35;

    // Smooth vertical mouse movement
    ref.current.rotation.x =
      THREE.MathUtils.lerp(
        ref.current.rotation.x,
        pointer.y * 0.15,
        Math.min(1, delta * 4)
      );
  });

  return <group ref={ref}>{children}</group>;
};

// -----------------------------------
// MAIN COMPONENT
// -----------------------------------

const SkillCloud: React.FC<SkillCloudProps> = ({
  icons,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        h-[460px]
        w-full
        rounded-2xl
        overflow-hidden
        bg-[#151515]
        ${className}
      `}
      role="img"
      aria-label="Rotating 3D cloud of technology logos"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <PerspectiveCamera
          makeDefault
          fov={50}
          position={[0, 0, 10]}
        />

        <Rotator>
          <IconCloud
            icons={icons}
            radius={3.2}
            defaultSize={48}
          />
        </Rotator>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.15}
        />
      </Canvas>
    </div>
  );
};

export default SkillCloud;