"use client";

import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { CSSProperties } from "react";

export default function Home() {
  const starMatrix = (d: number) => {
    const stars = [];
    const squareGap = 200;

    for (let r = 0; r < 20; r++) {
      for (let c = 0; c < 10; c++) {
        const left = (c + Math.random()) * squareGap;
        const top = (r + Math.random()) * squareGap;

        const scale = -0.1 + 0.4 * Math.random() + d / 10;
        const animTime = Math.ceil(Math.random() * 3) / 2 + 0.5;
        const opacity = 0.2 + d / 3;

        const starStyle: CSSProperties = {
          position: "absolute",
          animation: `bulge ${animTime}s linear infinite`,
          left,
          top,
          scale,
          opacity,
        };

        const star = (
          <Image
            key={`star${r},${c},${d}`}
            src="/star.svg"
            width={61}
            height={61}
            style={starStyle}
            alt={"star"}
          />
        );

        stars.push(star);
      }
    }

    return <div>{stars}</div>;
  };

  const logo = (
    <div style={styles.centeredGroup}>
      <div
        style={{
          textAlign: "center",
          padding: 20,
        }}
      >
        <object style={styles.logo} data="/logo-animated.svg" />
      </div>
    </div>
  );

  const text = (
    <div style={styles.centeredGroup}>
      <p style={styles.floatyText}>
        Houston&apos;s Premier Hackathon!
        <br />
        Coming February 10th-11th!
      </p>
    </div>
  );

  return (
    <main style={styles.page}>
      <Parallax pages={2} config={{ tension: 10000, friction: 100 }}>
        <ParallaxLayer offset={0} speed={-0.9}>
          {starMatrix(0)}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.5}>
          {starMatrix(1)}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.1}>
          {starMatrix(2)}
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          {logo}
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          {text}
        </ParallaxLayer>
      </Parallax>
      <div className="animate-wiggle animate-bulge animate-floaty" />
    </main>
  );
}

const styles: {
  [item: string]: CSSProperties;
} = {
  centeredGroup: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    alignItems: "center",
    width: "100vw",
  },
  logo: {
    display: "inline",
    width: "60vh",
    maxWidth: "90vw",
    animation: "floaty 2s ease-in-out infinite",
  },
  floatyText: {
    fontSize: "5vh",
    marginTop: "3vh",
    padding: "0.5vh",
    animation: "floaty 2s ease-in-out infinite",
  },
  page: {
    color: "white",
    height: "100vh",
  },
};
