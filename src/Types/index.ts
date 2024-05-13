export interface MyFile {
  type: "file";
  meta: string;
  name: string;
}

export interface Folder {
  type: "folder";
  name: string;
  data: Array<MyFile | Folder>;
}

type MyFileOrFolder = MyFile | Folder;
