/* EXTERNAL MODULES */
import { createContext, useContext } from 'react';

interface FolderContextType {
  folder: string;
  setFolder: (folder: string) => void;
}

export const FolderContext = createContext<FolderContextType>({
  folder: '',
  setFolder: () => {},
});

export const useFolderContext = () => useContext(FolderContext);
