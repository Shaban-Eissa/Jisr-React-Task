export interface IFile {
  type: "file";
  meta: string;
  name: string;
}

export interface IFolder {
  type: "folder";
  name: string;
  data: Array<IFile | IFolder>;
}

type MyFileOrFolder = IFile | IFolder;
