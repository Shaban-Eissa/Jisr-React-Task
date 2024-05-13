import { MyFile } from "../Types";
import { cssIcon, folderIcon, htmlIcon, jsIcon } from "../Constants";

export const FileComponent: React.FC<{ file: MyFile }> = ({ file }) => {
  let icon;
  switch (file.meta) {
    case "js":
      icon = jsIcon;
      break;
    case "html":
      icon = htmlIcon;
      break;
    case "css":
      icon = cssIcon;
      break;
    case "folder":
      icon = folderIcon;
      break;
    case "ts":
      icon = tsIcon;
      break;
    default:
      icon = folderIcon;
  }

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(file.name, "copy/delete/rename");
  };

  return (
    <div className="file" onContextMenu={handleContextMenu}>
      <span
        className="file-icon"
        dangerouslySetInnerHTML={{ __html: icon }}
      ></span>
      <span className="file-name">{file.name}</span>
    </div>
  );
};
