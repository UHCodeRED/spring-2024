/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { CSSProperties, useEffect, useState } from "react";

export default function Home() {
  const [timer, setTimer] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const i =
        window.scrollY / (document.body.offsetHeight - window.innerHeight);

      document.body.style.setProperty(
        "--scroll",
        `${Math.min(window.scrollY / 150, 0.9999)}`
      );
    });

    const updateTimer = () => {
      const startDate = new Date(2024, 1, 10, 9);
      const nowDate = new Date();

      let msDiff = startDate.getTime() - nowDate.getTime();

      msDiff /= 1000;
      const seconds = Math.floor(msDiff) % 60;

      msDiff = (msDiff - seconds) / 60;
      const minutes = Math.floor(msDiff) % 60;

      msDiff = (msDiff - minutes) / 60;
      const hours = Math.floor(msDiff) % 24;

      msDiff = (msDiff - hours) / 24;
      const days = Math.floor(msDiff);

      const newTimer = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      setTimer(newTimer);
    };
    updateTimer();

    setInterval(updateTimer, 500);
  });

  return (
    <main style={styles.page}>
      {/* <Parallax pages={2} config={{ tension: 10000, friction: 100 }}>
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
      </Parallax> */}
      {/* {logo} */}
      <div className="animate-wiggle animate-bulge animate-floaty animate-shrink" />

      <div
        className="animate-floaty"
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "black",
          boxShadow: "0px 0px 50px 50px black",
        }}
      >
        <object
          // className="animate-floaty"
          style={styles.logo}
          data="/logo-animated.svg"
        />
      </div>

      <RegistrationSection timer={timer} />
      <WhatIsSection />
      <EventDetailsSection />
      <SponsorSection />
      <BigPlanetFooter />
    </main>
  );
}

const RegistrationSection = ({ timer }: { timer: string }) => {
  return (
    <div style={{ marginTop: 150, fontSize: "5vh" }}>
      <div>{`CodeRED starts in ${timer}`}</div>
      <div>
        Register now at{" "}
        <a
          style={{ textDecoration: "underline", color: "red" }}
          href="https://register.uhcode.red"
        >
          register.uhcode.red
        </a>
        !
      </div>
    </div>
  );
};

const WhatIsSection = () => {
  return (
    <div style={{ marginTop: 200, fontSize: "5vh" }}>
      What is Code<span style={{ color: "red" }}>RED</span>?
      <br />
      <div
        style={{
          fontSize: "3vh",
          width: 900,
          maxWidth: "90vw",
          display: "inline-block",
          textAlign: "left",
        }}
      >
        <p>
          {`CodeRED is a 24-hour hackathon event organized by CougarCS, the
          largest student-run computer science organization at the University of
          Houston. It's an event for people to come together and innovate by
          pushing their limits to create something amazing!`}
        </p>
        <br />
        <p>
          {`Want to learn something new, network with like-minded computer
          scientists, and push the boundaries of your skill? Come join us at
          CodeRED Genesis to solve real-life problems, explore new
          possibilities, and shoot for the stars!`}
        </p>
      </div>
    </div>
  );
};

const EventDetailsSection = () => {
  return (
    <div style={{ marginTop: 200, fontSize: "5vh" }}>
      Event Details
      <br />
      <div
        style={{
          fontSize: "3vh",
          width: 900,
          maxWidth: "90vw",
          display: "inline-block",
          textAlign: "left",
        }}
      >
        <p>
          Code<span style={{ color: "red" }}>RED</span> Genesis is an in-person
          event at the University of Houston on February 10th-11th, 2024. More
          time and place details will be released soon!
        </p>
      </div>
    </div>
  );
};

const SponsorSection = () => {
  return (
    <div style={{ marginTop: 200, fontSize: "5vh" }}>
      <div>{"Our Sponsors"}</div>
      <img
        style={{
          display: "inline-block",
          width: 600,
          maxWidth: "90vw",
          marginTop: 20,
        }}
        src="/ConocoPhillips.png"
      />
      <br />
      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "1fr 1fr",
          width: 600,
          maxWidth: "90vw",
          marginTop: 50,
          gap: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ display: "inline-block" }} src="/LYB.png" />
        <img style={{ display: "inline-block" }} src="/PROS.png" />
        <img style={{ display: "inline-block" }} src="/Google.png" />
        <img style={{ display: "inline-block" }} src="/RedBull.png" />
      </div>
      <br />
      {/* <img
        style={{
          display: "inline-block",
          width: 300,
          maxWidth: "45vw",
          marginTop: 50,
        }}
        src="/MLH.png"
      /> */}
      <br />
    </div>
  );
};

const BigPlanetFooter = () => {
  return (
    <div style={{ overflow: "hidden", paddingTop: 70 }}>
      <object
        style={{
          width: "100vw",
          filter: "drop-shadow(0px 0px 40px red)",
        }}
        data="/big-planet.svg"
      ></object>
    </div>
  );
};

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
    // animation: "shrink 2s ease-in-out infinite",
    animation: "shrink 1s linear infinite",
    animationPlayState: "paused",
    animationDelay: "calc(var(--scroll) * -1s)",
  },
  floatyText: {
    fontSize: "5vh",
    marginTop: "3vh",
    padding: "0.5vh",
    animation: "floaty 2s ease-in-out infinite",
  },
  page: {
    color: "white",
    // height: "100vh",
    textAlign: "center",
    paddingTop: "35vh",
    // overflowX: "hidden",
  },
};
