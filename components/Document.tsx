import { useRef, useState } from 'react';
import Moment from 'react-moment';
import { Folder } from 'phosphor-react';
import Input from './Input';
import Delayed from './Delayed';
import History from './History';
import styles from '../styles/Home.module.css';
import { Command } from '../types/command';
import { useFolderContext } from '../contexts/FolderContext';

interface WindowProps {
  time: number;
  hide: boolean;
  minimize: boolean;
  setHide: (args: any) => void;
  setMinimize: (args: any) => void;
  setShowButton: (args: any) => void;
}

export const Window: React.FC<WindowProps> = ({
  time,
  hide,
  setHide,
  minimize,
  setMinimize,
  setShowButton,
}) => {
  return <div></div>;
};

export default Window;
