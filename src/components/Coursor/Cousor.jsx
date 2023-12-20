"use client";
import "./Coursor.css";
import React, { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.querySelector("[data-cursor-dot]");
      const outline = document.querySelector("[data-cursor-outline]");

      const x = e.clientX;
      const y = e.clientY;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      outline.style.left = `${x}px`;
      outline.style.top = `${y}px`;

      outline.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-outline" data-cursor-outline></div>
    </div>
  );
};

export default Cursor;
