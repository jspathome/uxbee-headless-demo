import Link from "next/link";
import React from "react";

interface UILinkProps {
  Text: string;
  HRef: string;
  Color: "primary" | "secundary";
}

/**
 * Link UI component
 */
const UILink = ({ Text, HRef, Color = "primary" }: UILinkProps) => {
  const ColorClass = () => {
    switch (Color) {
      case "primary":
        return "hover:cursor-pointer text-uxbee-white hover:text-uxbee-yellow ";
      case "secundary":
        return "hover:cursor-pointer hover:text-uxbee-yellow text-uxbee-black ";
    }
  };
  return (
    <div>
      <Link className={ColorClass()} href={HRef}>
        {Text}
      </Link>
    </div>
  );
};

export default UILink;
