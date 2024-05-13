import React from "react";

import "../App.css";

import { IFolder } from "../Types";
import { FileComponent } from "./File";

export const FolderComponent: React.FC<{ folder: IFolder }> = ({ folder }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="folder">
      <div onClick={toggleOpen} className="folder-name">
        <span>{folder.name}</span>
      </div>
      {isOpen && (
        <div className="folder-contents">
          {folder.data.map((item, index) => {
            if (item.type === "folder") {
              return <FolderComponent key={index} folder={item} />;
            } else {
              return <FileComponent key={index} file={item} />;
            }
          })}
        </div>
      )}
    </div>
  );
};
