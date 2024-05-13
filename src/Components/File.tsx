import React from "react";

import { IFile } from "../Types";
import { getIcon } from "../Utils/icons";
import { ContextMenu } from "./ContextMenu/ContextMenu";

export const FileComponent: React.FC<{ file: IFile }> = ({ file }) => {
  const [showContextMenu, setShowContextMenu] = React.useState(false);
  const [contextMenuPosition, setContextMenuPosition] = React.useState({
    x: "0px",
    y: "0px",
  });

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenuPosition({ x: `${event.pageX}px`, y: `${event.pageY}px` });
    setShowContextMenu(true);
  };

  const handleOptionClick = (option: string) => {
    console.log(option, file.name);
    setShowContextMenu(false);
  };

  return (
    <>
      <div className="file" onContextMenu={handleContextMenu}>
        <span
          className="file-icon"
          dangerouslySetInnerHTML={{ __html: getIcon(file.meta) }}
        ></span>
        <span className="file-name">{file.name}</span>
      </div>
      {showContextMenu && (
        <ContextMenu
          options={["Copy", "Delete", "Rename"]}
          onOptionClick={handleOptionClick}
          style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
        />
      )}
    </>
  );
};
