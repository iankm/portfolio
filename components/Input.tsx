import { forwardRef, useState } from 'react';
import { useFolderContext } from '../contexts/FolderContext';
import styles from '../styles/Home.module.css';
import { redirect } from '../utils/responses';

interface InputProps {
  customRef?: React.RefObject<HTMLInputElement>;
  autofocus?: boolean;
  placeholder?: string;
  callback?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  customRef,
  autofocus,
  placeholder,
  callback,
}) => {
  const { folder } = useFolderContext();
  const [value, setValue] = useState<string>('');

  const handleKeyDown = (e: any, value: string) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      redirect(value);
      setValue('');
      callback(value);
    }
    if (e.metaKey && e.key === 'k') {
      callback('clear');
    }
  };

  return (
    <div className={styles.commandline}>
      <div
        style={{
          fontSize: '14px',
          color: '#0c0',
          marginRight: '2px',
          whiteSpace: 'nowrap',
        }}
      >
        {`➞ ${folder}`}
      </div>
      {
        <input
          ref={customRef}
          autoFocus={autofocus}
          autoCapitalize="off"
          value={value}
          placeholder={placeholder}
          onChange={(e: any) => setValue(e.target.value)}
          onKeyDown={(e: any) => handleKeyDown(e, value)}
          className={styles.input}
        />
      }
    </div>
  );
};

export default Input;
