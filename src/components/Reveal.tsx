import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type Direction = "up" | "left" | "right" | "scale";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
  id,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  id?: string;
  style?: CSSProperties;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      id={id}
      className={`reveal reveal-${direction} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
