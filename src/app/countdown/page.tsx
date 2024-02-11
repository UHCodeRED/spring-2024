/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState("WEE");

  useEffect(() => {
    const startDate = new Date(2024, 1, 10, 13, 0, 0, 0);
    const endDate = new Date(2024, 1, 11, 13, 0, 0, 0);
    const fullDuration = endDate.getTime() - startDate.getTime();

    const updateLoop = setInterval(() => {
      const currentDate = new Date();
      const currentDuration = currentDate.getTime() - startDate.getTime();

      setProgress(
        currentDuration > fullDuration ? 1 : currentDuration / fullDuration
      );

      let duration = fullDuration - currentDuration;

      duration = duration < 0 ? 0 : duration;

      if (progress < 1 && duration === 0) {
        // DO SOMETHING
        new Audio("/alarm.mp3").play();
      }

      const hrLeft = Math.floor(duration / (1000 * 60 * 60));
      duration -= hrLeft * (1000 * 60 * 60);
      const minLeft = Math.floor(duration / (1000 * 60));
      duration -= minLeft * (1000 * 60);
      const secLeft = Math.floor(duration / 1000);
      duration -= secLeft * 1000;
      const msLeft =
        duration > 99
          ? duration
          : duration > 9
          ? `0${duration}`
          : `00${duration}`;

      setTimeLeft(
        `${hrLeft}hrs ${minLeft}min ${secLeft}sec ${msLeft}ms remaining!`
      );
    }, 0);

    return () => clearInterval(updateLoop);
  });

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 150,
          backgroundColor: "black",
          boxShadow: "0px 0px 50px 50px black",
          textAlign: "center",
        }}
      >
        <object
          // className="animate-floaty"
          style={{
            display: "inline",
            width: "60vh",
            maxWidth: "90vw",
            // animation: "shrink 2s ease-in-out infinite",
            animation: "shrink 1s linear infinite",
            animationPlayState: "paused",
            animationDelay: "calc(var(--scroll) * -1s)",
          }}
          data="/logo-animated.svg"
        />
      </div>
      <div
        style={{
          color: progress < 1 ? "white" : "red",
          width: "100%",
          fontSize: 50,
          textAlign: "center",
          marginTop: "20%",
        }}
      >
        {timeLeft}
      </div>
      <div
        style={{
          position: "absolute",
          border: "4px solid white",
          borderRadius: 6,
          left: 0,
          top: `calc(50vh - 25px)`,
          height: 50,
          width: "calc(100% - 120px)",
          color: "white",
          margin: 60,
        }}
      >
        <div
          style={{
            height: "100%",
            backgroundColor: "#D30D0D",
            width: `${progress * 100}%`,
            borderRadius: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/rocket.png"
            className="animate-floaty"
            style={{ marginLeft: `calc(100% - 50px)`, width: 150 }}
          />
        </div>
      </div>
    </>
  );
}
