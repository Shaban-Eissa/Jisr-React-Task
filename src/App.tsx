import React from "react";
import { FolderComponent } from "./Components/Folder";

import { Files } from "./Constants/files";
import { IFolder } from "./Types";

const App: React.FC = () => {
  return <FolderComponent folder={Files as IFolder} />;
};

export default App;
