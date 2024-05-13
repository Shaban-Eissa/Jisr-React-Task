import React from 'react';
import {FolderComponent} from './Components/Folder'

import {Files} from './Constants/files'
import { Folder } from './Types';

const App: React.FC = () => {
  return <FolderComponent folder={Files as Folder} />;
};


export default App;
