import { forwardRef, useState } from 'react';
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
  const [value, setValue] = useState('');

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
        ➞ ~
      </div>
      {
        <input
          ref={customRef}
          autoFocus={autofocus}
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
