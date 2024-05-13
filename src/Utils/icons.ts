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

export const getIcon = (meta: string) => {
  let icon;
  switch (meta) {
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
  return icon;
};
