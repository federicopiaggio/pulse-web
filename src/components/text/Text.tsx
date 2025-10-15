import React from "react";
import { clsx } from "clsx";
import styles from "./Text.module.css";

interface TextProps {
  variant?: "heading" | "body";
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties | string;
  children: React.ReactNode;
}

export default function Text({
  variant = "body",
  className,
  as: Component = "span",
  style,
  children,
}: TextProps) {
  const typoStyle = clsx(
    styles.text,
    styles[variant],
    styles[Component as string],
    className
  );

  // Handle both string and object styles
  const resolvedStyle =
    typeof style === "string"
      ? ({ cssText: style } as React.CSSProperties)
      : style;

  return (
    <Component className={typoStyle} style={resolvedStyle}>
      {children}
    </Component>
  );
}
