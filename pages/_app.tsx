import '../styles/globals.css';
import { useState } from 'react';
import { FolderContext } from '../contexts/FolderContext';

function MyApp({ Component, pageProps }) {
  const [folder, setFolder] = useState<string>('~');

  return (
    <FolderContext.Provider value={{ folder, setFolder }}>
      <Component {...pageProps} />
    </FolderContext.Provider>
  );
}

export default MyApp;
