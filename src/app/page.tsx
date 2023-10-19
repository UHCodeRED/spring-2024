import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        color: "white",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          alignItems: "center",
          width: "100vw",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: 20,
          }}
        >
          <object
            className="animate-floaty"
            style={{ display: "inline", width: "60vh", maxWidth: "90vw" }}
            data="/logo-animated.svg"
          />
        </div>
        <p
          className="animate-floaty"
          style={{ fontSize: "3vh", marginTop: "3vh" }}
        >
          Coming Feb 10-11th!
        </p>
      </div>
    </main>
  );
}
