import React from "react";

interface UITitleProps {
  /**
   * Title contents
   */
  Text: string;
  /**
   * How large the title must be. (h1,h2,h3,h4)
   */
  Type: "h1" | "h2" | "h3" | "h4";
}

/**
 * Title UI component
 */
export const UITitle = ({ 
        Text, 
        Type = "h2"
      }: UITitleProps) => {
  const TitleOutput = () => {
    switch (Type) {
      case "h1":
        return <h1 className="text-3xl">{Text}</h1>;
      case "h2":
        return <h2 className="text-2xl">{Text}</h2>;
      case "h3":
        return <h3 className="text-xl">{Text}</h3>;
      case "h4":
        return <h4 className="text-lg">{Text}</h4>;
    }
  };

  return <div>{TitleOutput()}</div>;
};

//export default Title;
