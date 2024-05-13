import React from "react";

import { IFolder } from "./Types";
import { Files } from "./Constants/files";
import { FolderComponent } from "./Components/Folder";

const App: React.FC = () => {
  return <FolderComponent folder={Files as IFolder} />;
};

export default App;
