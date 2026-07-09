import React from "react";

export default function BackgroundLayer() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        backgroundColor: "#0A1018",
        backgroundImage: [
          "radial-gradient(ellipse 80% 60% at 10% -5%, rgba(67,116,184,0.22), transparent 55%)",
          "radial-gradient(ellipse 60% 50% at 90% 25%, rgba(79,141,216,0.14), transparent 55%)",
          "radial-gradient(ellipse 70% 55% at 50% 100%, rgba(58,100,162,0.16), transparent 55%)",
          "radial-gradient(circle, rgba(107,155,209,0.03) 1px, transparent 1px)",
        ].join(", "),
        backgroundSize: "100% 100%, 100% 100%, 100% 100%, 36px 36px",
      }}
    />
  );
}