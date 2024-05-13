import React from "react";

import "./ContextMenu.css";

export const ContextMenu: React.FC<{
  options: string[];
  onOptionClick: (option: string) => void;
  style: React.CSSProperties;
}> = ({ options, onOptionClick, style }) => {
  return (
    <div className="context-menu" style={{ ...style, position: "fixed" }}>
      {options.map((option) => (
        <div key={option} onClick={() => onOptionClick(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};
