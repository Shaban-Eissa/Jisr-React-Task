import { IFile } from "../Types";
import {
  cssIcon,
  defaultIcon,
  folderIcon,
  htmlIcon,
  jsIcon,
  tsIcon,
  imgIcon,
  svgIcon,
} from "../Constants";

export const FileComponent: React.FC<{ file: IFile }> = ({ file }) => {
  let icon;
  switch (file.meta) {
    case "js":
      icon = jsIcon;
      break;
    case "ts":
      icon = tsIcon;
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
    case "img":
      icon = imgIcon;
      break;
    case "svg":
      icon = svgIcon;
      break;
    default:
      icon = defaultIcon;
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
