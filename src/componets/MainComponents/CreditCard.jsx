import React from "react";

export function CreditCard({ svg, color, username }) {
  return (
    <>
      <div
        className="cc"
        style={{
          background: color?.background,
        }}
      >
        {svg !== null && (
          <svg
            className="svgBlock"
            viewBox="-22 -5 300.000000 300.000000"
            style={{
              width: "260px",
              height: "160px",
              fill: `${color?.svgColor}`,
            }}
          >
            {svg[0].content}
          </svg>
        )}
        <span className="chip"></span>
        <span className="username" style={{ color: color?.svgColor }}>
          {username || "CARD HOLDER"}
        </span>
      </div>
    </>
  );
}
