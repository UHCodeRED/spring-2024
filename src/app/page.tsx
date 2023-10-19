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
          <Image
            className="animate-floaty"
            style={{ display: "inline" }}
            src="/logo.svg"
            alt="CodeRED Genesis Logo"
            width={600}
            height={100}
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
